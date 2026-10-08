export interface Coordinates {
  lat: number;
  lng: number;
}

export interface UserLocationState {
  coords: Coordinates;
  name: string;
  isLiveGps: boolean;
  accuracyMeters?: number;
  timestamp?: number;
}

/**
 * Pre-defined regional hubs across Singapore and Malaysia
 */
export const REGIONAL_HUBS: { id: string; name: string; region: 'SG' | 'MY'; coords: Coordinates; district: string }[] = [
  {
    id: 'sg-telok-ayer',
    name: 'Telok Ayer & Amoy St',
    district: 'Central Business District',
    region: 'SG',
    coords: { lat: 1.2801, lng: 103.8475 }
  },
  {
    id: 'sg-keong-saik',
    name: 'Keong Saik & Chinatown',
    district: 'Heritage Shophouse Belt',
    region: 'SG',
    coords: { lat: 1.2808, lng: 103.8423 }
  },
  {
    id: 'sg-marina-bay',
    name: 'Marina Bay Sands',
    district: 'Waterfront & Bay',
    region: 'SG',
    coords: { lat: 1.2834, lng: 103.8607 }
  },
  {
    id: 'sg-bugis',
    name: 'Bugis & Haji Lane',
    district: 'Kampong Glam Arts District',
    region: 'SG',
    coords: { lat: 1.3005, lng: 103.8588 }
  },
  {
    id: 'sg-orchard',
    name: 'Orchard Road',
    district: 'Shopping & Dining Corridor',
    region: 'SG',
    coords: { lat: 1.3048, lng: 103.8318 }
  },
  {
    id: 'my-kl-chinatown',
    name: 'Petaling St / Chinatown, KL',
    district: 'Old Kuala Lumpur',
    region: 'MY',
    coords: { lat: 3.1435, lng: 101.6982 }
  },
  {
    id: 'my-klcc',
    name: 'KLCC & Platinum Park, KL',
    district: 'Golden Triangle',
    region: 'MY',
    coords: { lat: 3.1578, lng: 101.7119 }
  },
  {
    id: 'my-bangsar',
    name: 'Bangsar Telawi, KL',
    district: 'Damansara & Bangsar',
    region: 'MY',
    coords: { lat: 3.1319, lng: 101.6705 }
  },
  {
    id: 'my-penang',
    name: 'Beach St, George Town, Penang',
    district: 'UNESCO Heritage Zone',
    region: 'MY',
    coords: { lat: 5.4164, lng: 100.3392 }
  },
  {
    id: 'my-jb',
    name: 'Tan Hiok Nee, Johor Bahru',
    district: 'Old Town Heritage',
    region: 'MY',
    coords: { lat: 1.4589, lng: 103.7635 }
  }
];

export const DEFAULT_USER_LOCATION: UserLocationState = {
  coords: { lat: 1.2801, lng: 103.8475 },
  name: 'Telok Ayer, Singapore',
  isLiveGps: false,
};

/**
 * Calculates Great-Circle distance between two coordinates using Haversine formula
 * Returns distance in kilometers (km)
 */
export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth's mean radius in km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

/**
 * Formats distance cleanly (e.g. "320 m", "1.2 km", "310 km")
 */
export function formatDistance(distanceKm: number): string {
  if (distanceKm < 1) {
    const meters = Math.round(distanceKm * 1000);
    return `${meters} m`;
  }
  if (distanceKm < 10) {
    return `${distanceKm.toFixed(1)} km`;
  }
  return `${Math.round(distanceKm)} km`;
}

/**
 * Estimates travel time:
 * - <= 1.5 km: walking at ~4.5 km/h
 * - > 1.5 km: driving/transit at ~30 km/h
 */
export function formatTravelTime(distanceKm: number): string {
  if (distanceKm <= 1.5) {
    const walkMin = Math.max(1, Math.round((distanceKm / 4.5) * 60));
    return `${walkMin} min walk`;
  }
  const driveMin = Math.max(3, Math.round((distanceKm / 35) * 60));
  return `${driveMin} min drive`;
}

/**
 * Known Singapore & Malaysia District Landmarks for instant zero-latency offline reverse geocoding
 */
const KNOWN_LANDMARK_DISTRICTS: { name: string; lat: number; lng: number }[] = [
  { name: 'Telok Ayer & Amoy St, Singapore', lat: 1.2801, lng: 103.8475 },
  { name: 'Maxwell & Chinatown, Singapore', lat: 1.2804, lng: 103.8440 },
  { name: 'Keong Saik & Outram Park, Singapore', lat: 1.2808, lng: 103.8423 },
  { name: 'Tanjong Pagar & Anson, Singapore', lat: 1.2764, lng: 103.8458 },
  { name: 'Marina Bay Sands & Bayfront, Singapore', lat: 1.2834, lng: 103.8607 },
  { name: 'Raffles Place & CBD, Singapore', lat: 1.2840, lng: 103.8515 },
  { name: 'Bugis & Kampong Glam, Singapore', lat: 1.3005, lng: 103.8588 },
  { name: 'Orchard Road & Somerset, Singapore', lat: 1.3048, lng: 103.8318 },
  { name: 'Tiong Bahru & Havelock, Singapore', lat: 1.2865, lng: 103.8306 },
  { name: 'Newton & Novena, Singapore', lat: 1.3130, lng: 103.8375 },
  { name: 'Old Airport Road & Mountbatten, Singapore', lat: 1.3082, lng: 103.8858 },
  { name: 'Katong & East Coast Rd, Singapore', lat: 1.3068, lng: 103.9038 },
  { name: 'Marine Parade & Joo Chiat, Singapore', lat: 1.3025, lng: 103.9060 },
  { name: 'Little India & Farrer Park, Singapore', lat: 1.3115, lng: 103.8540 },
  { name: 'Chomp Chomp & Serangoon Gardens, Singapore', lat: 1.3644, lng: 103.8665 },
  { name: 'Bishan & Junction 8, Singapore', lat: 1.3508, lng: 103.8488 },
  { name: 'Toa Payoh Central, Singapore', lat: 1.3325, lng: 103.8485 },
  { name: 'Ang Mo Kio Central, Singapore', lat: 1.3691, lng: 103.8454 },
  { name: 'Jurong East & JEM, Singapore', lat: 1.3331, lng: 103.7436 },
  { name: 'Clementi Central, Singapore', lat: 1.3151, lng: 103.7650 },
  { name: 'Woodlands Central, Singapore', lat: 1.4360, lng: 103.7865 },
  { name: 'Tampines Regional Centre, Singapore', lat: 1.3532, lng: 103.9452 },
  { name: 'Bedok Central, Singapore', lat: 1.3236, lng: 103.9273 },
  { name: 'Changi Airport, Singapore', lat: 1.3644, lng: 103.9915 },
  { name: 'Petaling St / Chinatown, Kuala Lumpur', lat: 3.1435, lng: 101.6982 },
  { name: 'KLCC & Golden Triangle, Kuala Lumpur', lat: 3.1578, lng: 101.7119 },
  { name: 'Bangsar Telawi, Kuala Lumpur', lat: 3.1319, lng: 101.6705 },
  { name: 'George Town, Penang', lat: 5.4164, lng: 100.3392 },
  { name: 'Tan Hiok Nee, Johor Bahru', lat: 1.4589, lng: 103.7635 },
];

/**
 * Free Reverse Geocoder using OpenStreetMap Nominatim with zero API key.
 * Gracefully falls back to nearest Singapore/Malaysia district landmark.
 */
export async function reverseGeocodeWithoutApiKey(lat: number, lng: number): Promise<string> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);

    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`,
      {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'JiakSimiFoodFinder/1.0'
        },
        signal: controller.signal
      }
    );
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data && data.address) {
        const addr = data.address;
        const road = addr.road || addr.pedestrian || addr.footway || addr.suburb || addr.neighbourhood;
        const sub = addr.suburb || addr.neighbourhood || addr.city_district || addr.quarter;
        const city = addr.city || addr.town || addr.state || addr.country;
        
        const parts = [road, sub].filter(Boolean);
        if (parts.length > 0) {
          return `${parts.join(', ')} (${city || 'Singapore'})`;
        }
        if (data.display_name) {
          const split = data.display_name.split(',');
          return split.slice(0, 2).join(', ').trim();
        }
      }
    }
  } catch {
    // Non-blocking fallback to local nearest district calculation below
  }

  // Fallback: Find nearest known landmark in SG/MY
  let closestName = 'Current Location';
  let minDistance = Infinity;

  for (const hub of KNOWN_LANDMARK_DISTRICTS) {
    const dist = calculateDistance(lat, lng, hub.lat, hub.lng);
    if (dist < minDistance) {
      minDistance = dist;
      closestName = dist < 2.5 ? `Near ${hub.name}` : hub.name;
    }
  }

  return closestName;
}

/**
 * Requests browser GPS position with high accuracy
 */
export function requestBrowserLocation(): Promise<{ coords: Coordinates; accuracy: number }> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser.'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        resolve({
          coords: {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          },
          accuracy: pos.coords.accuracy,
        });
      },
      (err) => {
        reject(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 30000,
      }
    );
  });
}
