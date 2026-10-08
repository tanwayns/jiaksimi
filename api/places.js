/**
 * Geoapify Places API Proxy Endpoint
 * Endpoint: /api/places or /api/places.js
 * Documentation: https://apidocs.geoapify.com/docs/places/
 * Queries catering and restaurant points of interest around specified coordinates.
 */

// Fallback curated Singapore and Malaysia places database
const LOCAL_CATALOG = [
  {
    id: 'sg-1',
    name: 'Rempah Botanica',
    tagline: 'Slow-simmered 36-ingredient Peranakan rempah, wild Buah Keluak wagyu',
    cuisine: 'Modern Peranakan & Straits Heritage',
    categories: ['catering.restaurant', 'catering.restaurant.asian'],
    address: '112 Amoy St, Singapore 069932',
    street: 'Amoy Street',
    housenumber: '112',
    postcode: '069932',
    city: 'Singapore',
    country: 'Singapore',
    lat: 1.2801,
    lon: 103.8475,
    rating: 4.9,
    price: '$$$',
    popularDishes: ['Wagyu Beef Rib Buah Keluak', 'Bakwan Kepiting', 'Heritage Kueh Salat', 'Nyonya Laksa'],
    phone: '+65 6224 8188'
  },
  {
    id: 'sg-2',
    name: 'Wok Hei Shophouse',
    tagline: 'High-heat wok alchemy, moonlight wagyu hor fun & coffee pork ribs',
    cuisine: 'Elevated Zi Char & Modern Wok Mastery',
    categories: ['catering.restaurant', 'catering.restaurant.chinese'],
    address: '28 Keong Saik Rd, Singapore 089135',
    street: 'Keong Saik Road',
    housenumber: '28',
    postcode: '089135',
    city: 'Singapore',
    country: 'Singapore',
    lat: 1.2808,
    lon: 103.8423,
    rating: 4.9,
    price: '$$',
    popularDishes: ['Moonlight Wagyu Hor Fun', 'Coffee Glazed Ribs', 'Salted Egg Yolk Calamari', 'Char Kway Teow'],
    phone: '+65 6778 8780'
  },
  {
    id: 'sg-3',
    name: 'Scaled by Ah Hua Kelong',
    tagline: 'Direct-from-kelong sea bass, roasted chili crab mantou & smoked clams',
    cuisine: 'Coastal Kelong Seafood & Farm-to-Table',
    categories: ['catering.restaurant', 'catering.restaurant.seafood'],
    address: '8 Haji Lane, Singapore 189201',
    street: 'Haji Lane',
    housenumber: '8',
    postcode: '189201',
    city: 'Singapore',
    country: 'Singapore',
    lat: 1.3005,
    lon: 103.8588,
    rating: 4.9,
    price: '$$$',
    popularDishes: ['Chili Crab Dip with Mantou', 'Whole Roasted Kelong Seabass', 'Black Pepper Crab'],
    phone: '+65 9180 8123'
  },
  {
    id: 'sg-4',
    name: 'Thevar Spice Atelier',
    tagline: 'Modern South Indian culinary canvas, bone marrow roti, spiced lobster',
    cuisine: 'Contemporary South Indian & Spice Artistry',
    categories: ['catering.restaurant', 'catering.restaurant.indian'],
    address: '9 Keong Saik Rd, Singapore 089117',
    street: 'Keong Saik Road',
    housenumber: '9',
    postcode: '089117',
    city: 'Singapore',
    country: 'Singapore',
    lat: 1.2804,
    lon: 103.8428,
    rating: 4.9,
    price: '$$$$',
    popularDishes: ['Crispy Pork Vindaloo Roti', 'Spiced Lobster Madras Bisque', 'Bone Marrow Parotta'],
    phone: '+65 6904 0838'
  },
  {
    id: 'sg-5',
    name: '328 Katong Laksa Heritage',
    tagline: 'Rich coconut milk broth, sun-dried shrimp sambal & mackerel otah',
    cuisine: 'Iconic Katong Laksa & Straits Snacks',
    categories: ['catering.restaurant', 'catering.fast_food'],
    address: '51 East Coast Rd, Singapore 428770',
    street: 'East Coast Road',
    housenumber: '51',
    postcode: '428770',
    city: 'Singapore',
    country: 'Singapore',
    lat: 1.3068,
    lon: 103.9038,
    rating: 4.8,
    price: '$',
    popularDishes: ['Signature Katong Laksa Bowl', 'Charcoal-Grilled Mackerel Otah', 'Prawn Laksa'],
    phone: '+65 9732 8163'
  },
  {
    id: 'sg-6',
    name: 'Boon Tong Kee Chicken Rice Atelier',
    tagline: 'Silky poached grain-fed chicken, aromatic ginger pandan rice',
    cuisine: 'Hainanese Chicken Rice & Cantonese Roasts',
    categories: ['catering.restaurant', 'catering.restaurant.asian'],
    address: '425 River Valley Rd, Singapore 248324',
    street: 'River Valley Road',
    housenumber: '425',
    postcode: '248324',
    city: 'Singapore',
    country: 'Singapore',
    lat: 1.2952,
    lon: 103.8322,
    rating: 4.8,
    price: '$$',
    popularDishes: ['Signature Poached Chicken', 'Fragrant Chicken Fat Rice', 'Crispy Beancurd'],
    phone: '+65 6736 3213'
  },
  {
    id: 'my-1',
    name: 'Dewakan Ember Lab',
    tagline: 'Indigenous Malaysian terroir, fermented tempoyak, wood-fired duck',
    cuisine: 'Modern Malaysian & Indigenous Foraged',
    categories: ['catering.restaurant'],
    address: 'Platinum Park, 50 Persiaran KLCC, Kuala Lumpur 50088',
    street: 'Persiaran KLCC',
    housenumber: '50',
    postcode: '50088',
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    lat: 3.1578,
    lon: 101.7119,
    rating: 4.9,
    price: '$$$$',
    popularDishes: ['Aged Perak Duck with Bario Rice', 'Kulim Nut River Prawn Broth', 'Tempoyak Sambal'],
    phone: '+60 3-6207 9008'
  },
  {
    id: 'my-2',
    name: 'Chocha Heritage Cellar',
    tagline: 'Restored pre-war shophouse, natural pet-nats & spiced duck noodles',
    cuisine: 'Natural Wine Bar & Contemporary Malaysian Tapas',
    categories: ['catering.restaurant', 'catering.bar', 'catering.cafe'],
    address: '156 Jalan Petaling, Chinatown, 50000 Kuala Lumpur',
    street: 'Jalan Petaling',
    housenumber: '156',
    postcode: '50000',
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    lat: 3.1435,
    lon: 101.6982,
    rating: 4.8,
    price: '$$',
    popularDishes: ['Cincalok Fried Chicken Wings', 'Hand-Cut Duck Confit Aglio Olio', 'Pet-Nat Wine'],
    phone: '+60 3-2022 1100'
  },
  {
    id: 'my-3',
    name: 'George Town Heritage Roastery',
    tagline: 'Artisan charcoal-toasted pandan kaya brioche & single-origin Liberica',
    cuisine: 'Artisan Heritage Kopitiam & Single-Origin Roastery',
    categories: ['catering.cafe'],
    address: '120 Beach St, George Town, 10300 Penang, Malaysia',
    street: 'Beach Street',
    housenumber: '120',
    postcode: '10300',
    city: 'George Town',
    country: 'Malaysia',
    lat: 5.4164,
    lon: 100.3392,
    rating: 4.9,
    price: '$',
    popularDishes: ['Charcoal-Grilled Pandan Kaya Toast Set', 'Johor Liberica Cold Drip', 'Soft Kampung Eggs'],
    phone: '+60 4-261 8820'
  },
  {
    id: 'my-4',
    name: 'Firesmith Hearth & Satay Bar',
    tagline: 'Mangrove wood-fired dry-aged wagyu skewers & charred pineapple sambal',
    cuisine: 'Contemporary Charcoal Satay & Open Flame Hearth',
    categories: ['catering.restaurant', 'catering.bar'],
    address: '32 Jalan Telawi 5, Bangsar, 59100 Kuala Lumpur',
    street: 'Jalan Telawi 5',
    housenumber: '32',
    postcode: '59100',
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    lat: 3.1319,
    lon: 101.6705,
    rating: 4.8,
    price: '$$$',
    popularDishes: ['Dry-Aged Wagyu Satay Kerbau', 'Smoked Bone Marrow & Roti Canai', 'Peanut Dip'],
    phone: '+60 3-2287 4000'
  }
];

// Calculate Haversine distance in meters
function getDistanceMeters(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // metres
  const phi1 = (lat1 * Math.PI) / 180;
  const phi2 = (lat2 * Math.PI) / 180;
  const deltaPhi = ((lat2 - lat1) * Math.PI) / 180;
  const deltaLambda = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
    Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

export default async function placesHandler(req, res) {
  const startTime = Date.now();

  // Extract query parameters
  const query = req.query || {};
  const lat = parseFloat(query.lat || query.latitude || '1.2801');
  const lon = parseFloat(query.lng || query.lon || query.longitude || '103.8475');
  const radius = parseInt(query.radius || '5000', 10); // in meters
  const categories = query.categories || 'catering.restaurant,catering.cafe,catering.fast_food,catering.bar';
  const limit = Math.min(parseInt(query.limit || '20', 10), 50);
  const text = (query.text || query.name || query.q || '').trim();

  const apiKey = process.env.GEOAPIFY_API_KEY;
  let source = 'curated_catalog';
  let features = [];
  let geoapifyError = null;

  // If a Geoapify API key is configured, call the live Geoapify Places API
  if (apiKey) {
    try {
      const geoapifyUrl = new URL('https://api.geoapify.com/v2/places');
      geoapifyUrl.searchParams.set('categories', categories);
      geoapifyUrl.searchParams.set('filter', `circle:${lon},${lat},${radius}`);
      geoapifyUrl.searchParams.set('bias', `proximity:${lon},${lat}`);
      geoapifyUrl.searchParams.set('limit', String(limit));
      geoapifyUrl.searchParams.set('apiKey', apiKey);
      if (text) {
        geoapifyUrl.searchParams.set('name', text);
      }

      const response = await fetch(geoapifyUrl.toString(), {
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        const data = await response.json();
        if (data && Array.isArray(data.features)) {
          source = 'geoapify_live';
          features = data.features;
        }
      } else {
        const errorText = await response.text();
        geoapifyError = `Geoapify status ${response.status}: ${errorText.slice(0, 150)}`;
      }
    } catch (err) {
      geoapifyError = err.message || 'Geoapify network request failed';
    }
  }

  // Fallback to local catalog if Geoapify is not configured or failed
  if (features.length === 0) {
    source = 'curated_catalog';
    let filtered = LOCAL_CATALOG.map((item) => {
      const distMeters = getDistanceMeters(lat, lon, item.lat, item.lon);
      return {
        ...item,
        distanceMeters: distMeters,
      };
    });

    // Filter by text search if provided
    if (text) {
      const q = text.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.cuisine.toLowerCase().includes(q) ||
          item.popularDishes.some((d) => d.toLowerCase().includes(q))
      );
    }

    // Sort by distance
    filtered.sort((a, b) => a.distanceMeters - b.distanceMeters);

    // Filter by radius if within 50000m
    if (radius > 0) {
      const withinRadius = filtered.filter((i) => i.distanceMeters <= radius);
      if (withinRadius.length > 0) {
        filtered = withinRadius;
      }
    }

    // Convert to GeoJSON Features matching Geoapify Places specification
    features = filtered.slice(0, limit).map((place) => ({
      type: 'Feature',
      properties: {
        id: place.id,
        name: place.name,
        tagline: place.tagline,
        country: place.country,
        city: place.city,
        street: place.street,
        housenumber: place.housenumber,
        postcode: place.postcode,
        formatted: place.address,
        categories: place.categories,
        catering: {
          cuisine: place.cuisine,
        },
        contact: {
          phone: place.phone,
        },
        rating: place.rating,
        price: place.price,
        popularDishes: place.popularDishes,
        distance: place.distanceMeters,
        lat: place.lat,
        lon: place.lon,
      },
      geometry: {
        type: 'Point',
        coordinates: [place.lon, place.lat],
      },
    }));
  }

  const result = {
    type: 'FeatureCollection',
    source,
    geoapifyKeyConfigured: Boolean(apiKey),
    geoapifyError: geoapifyError,
    query: {
      lat,
      lon,
      radiusMeters: radius,
      categories,
      limit,
      search: text || null,
    },
    documentation: 'https://apidocs.geoapify.com/docs/places/',
    endpointUrl: 'https://api.geoapify.com/v2/places',
    executionMs: Date.now() - startTime,
    features,
  };

  if (res) {
    if (typeof res.setHeader === 'function') {
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Cache-Control', 'no-store, max-age=0');
    }

    if (typeof res.status === 'function' && typeof res.json === 'function') {
      return res.status(200).json(result);
    } else if (typeof res.writeHead === 'function') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(result, null, 2));
    }
  }

  return result;
}
