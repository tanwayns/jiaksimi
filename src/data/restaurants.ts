import { Restaurant, UserTasteProfile } from '../types/restaurant';

export const RESTAURANTS_DATA: Restaurant[] = [
  // ==========================================
  // HAWKER CENTRES & ICONIC STALLS (小贩中心)
  // ==========================================
  {
    id: 'sg-hawker-1',
    name: 'Tian Tian Hainanese Chicken Rice',
    tagline: 'World-renowned silky poached chicken, aromatic fat-glazed rice & explosive garlic-chili sambal',
    cuisine: 'Hainanese Chicken Rice',
    venueType: 'hawker',
    foodCentreName: 'Maxwell Food Centre',
    stallNumber: '#01-10/11',
    neighborhood: 'Maxwell / Chinatown, Singapore',
    address: '1 Kadayanallur St, #01-10/11 Maxwell Food Centre, Singapore 069184',
    distance: '0.3 km',
    walkTime: '4 min walk',
    price: '$',
    rating: 4.8,
    reviewCount: 3840,
    matchScore: 99,
    matchReason: 'Anthony Bourdain-praised Hainanese chicken rice: glistening jelly layer under the skin, deeply aromatic pandan-ginger rice, and punchy calamansi chili.',
    isOpen: true,
    openStatusText: 'Open Now · Closes 7:30 PM',
    heroImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'hawker',
    vibes: ['Hawker Centre Legend', 'Bustling Queue', 'No-Frills Comfort', 'Budget Friendly'],
    dietary: ['Halal-Sourced Chicken', 'Pork-Free'],
    hasOutdoor: true,
    michelinGuide: true,
    chefHighlight: 'Secret master stock simmered continuously since 1986, instantly plunging birds in ice bath for tender gelatin skin.',
    lat: 1.2804,
    lng: 103.8440,
    mapX: 38,
    mapY: 54,
    phone: '+65 9691 4852',
    hours: [
      { days: 'Tue - Sun', time: '10:00 AM – 7:30 PM' },
      { days: 'Mon', time: 'Closed' }
    ],
    popularDishes: ['Hainanese Poached Chicken Rice', 'Chicken Gizzard & Liver', 'Oyster Sauce Baby Kai Lan', 'Fragrant Chicken Fat Rice', 'Crystal Chicken Feet'],
    menuHighlights: [
      {
        id: 'tt-m1',
        name: 'Signature Chicken Rice Set',
        description: 'Tender poached chicken slices draped in secret soy sesame dressing, served with fragrant chicken rice and piping hot broth.',
        price: 5.5,
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      },
      {
        id: 'tt-m2',
        name: 'Whole Poached Chicken',
        description: 'Whole crystal skin Hainanese poached chicken with ginger paste and house red chili.',
        price: 32,
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      }
    ],
    reviews: [
      {
        id: 'tt-r1',
        author: 'Marcus Tan',
        authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        role: 'Maxwell Hawker Regular',
        rating: 5,
        date: 'Today',
        text: 'The rice alone is so deeply seasoned with chicken fat, pandan, and ginger that you can eat it on its own. Pair with a dollop of that tangy chili.',
        favoriteDish: 'Signature Chicken Rice Set'
      }
    ],
    availableSlots: ['11:30 AM', '12:15 PM', '1:00 PM', '5:30 PM', '6:45 PM']
  },
  {
    id: 'sg-hawker-2',
    name: 'Nam Sing Hokkien Fried Mee (南星福建炒虾面)',
    tagline: 'Dry-style Hokkien Mee with charred yellow mee, thin bee hoon & rich prawn-pork bone broth',
    cuisine: 'Traditional Hokkien Prawn Mee',
    venueType: 'hawker',
    foodCentreName: 'Old Airport Road Food Centre',
    stallNumber: '#01-32',
    neighborhood: 'Old Airport Road / Mountbatten, Singapore',
    address: '51 Old Airport Rd, #01-32 Old Airport Road Food Centre, Singapore 390051',
    distance: '3.8 km',
    walkTime: 'Dakota MRT 3 min',
    price: '$',
    rating: 4.8,
    reviewCount: 2980,
    matchScore: 98,
    matchReason: 'Third-generation wok legend: thin bee hoon that soaks up every drop of sea prawn and pork bone stock, cut red chili, and fresh calamansi.',
    isOpen: true,
    openStatusText: 'Open Now · Closes 6:00 PM',
    heroImage: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'hawker',
    vibes: ['Iconic Hawker Centre', 'Charcoal Wok Fire', 'Heritage Legend', 'Long Queues'],
    dietary: ['Pork & Seafood Broth'],
    hasOutdoor: true,
    michelinGuide: true,
    chefHighlight: 'Master Ng fries each plate by hand using thin white bee hoon that absorbs 100% of the concentrated wild prawn stock.',
    lat: 1.3082,
    lng: 103.8858,
    mapX: 72,
    mapY: 40,
    phone: '+65 6440 5340',
    hours: [
      { days: 'Tue - Sun', time: '10:00 AM – 6:00 PM' },
      { days: 'Mon', time: 'Closed' }
    ],
    popularDishes: ['Traditional Fried Hokkien Mee', 'Cut Fresh Chili & Lime', 'Sea Prawn & Sotong Topping', 'Crispy Pork Lard'],
    menuHighlights: [
      {
        id: 'ns-m1',
        name: 'Fried Hokkien Prawn Mee (Medium)',
        description: 'Thin bee hoon and yellow noodles wok-braised in simmering prawn head broth with squid, eggs, and fresh sea prawns.',
        price: 6.0,
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      }
    ],
    reviews: [
      {
        id: 'ns-r1',
        author: 'Eileen Toh',
        authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
        role: 'Food Blogger',
        rating: 5,
        date: 'Yesterday',
        text: 'The dry-style sauce absorption here is unmatched anywhere in Singapore. They serve with cut red chili instead of sambal to let the sweet seafood stock shine.',
        favoriteDish: 'Fried Hokkien Prawn Mee'
      }
    ],
    availableSlots: ['11:00 AM', '1:00 PM', '3:30 PM', '5:00 PM']
  },
  {
    id: 'sg-hawker-3',
    name: 'Lian He Ben Ji Claypot Rice (联合本记煲仔饭)',
    tagline: 'Charcoal-fired bubbling claypot rice, marinated chicken thigh, lup cheong & crispy crust',
    cuisine: 'Charcoal Claypot Rice',
    venueType: 'hawker',
    foodCentreName: 'Chinatown Complex Food Centre',
    stallNumber: '#02-198',
    neighborhood: 'Chinatown, Singapore',
    address: '335 Smith St, #02-198 Chinatown Complex Market & Food Centre, Singapore 050335',
    distance: '0.4 km',
    walkTime: '5 min walk',
    price: '$',
    rating: 4.8,
    reviewCount: 2410,
    matchScore: 97,
    matchReason: 'Cooked from raw rice grains over raging charcoal stoves. Drizzle fragrant dark soy sauce and shallot oil, then scrape the heavenly crispy rice crust.',
    isOpen: true,
    openStatusText: 'Open Now · Closes 9:30 PM',
    heroImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'hawker',
    vibes: ['Charcoal Stoves', 'Massive Hawker Complex', 'Late Night Dinner', 'Soul Food'],
    dietary: ['Pork & Poultry'],
    hasOutdoor: false,
    michelinGuide: true,
    chefHighlight: 'Over 20 individual claypots simmering simultaneously over charcoal embers with custom-cured waxed sausages.',
    lat: 1.2825,
    lng: 103.8431,
    mapX: 36,
    mapY: 58,
    phone: '+65 6227 2470',
    hours: [
      { days: 'Fri - Wed', time: '4:30 PM – 9:30 PM' },
      { days: 'Thu', time: 'Closed' }
    ],
    popularDishes: ['Claypot Mixed Chicken Rice', 'Lup Cheong (Waxed Sausage)', 'Salted Fish Addition', 'Crispy Golden Rice Crust (Guoba)'],
    menuHighlights: [
      {
        id: 'lh-m1',
        name: 'Claypot Chicken Rice with Waxed Meats',
        description: 'Tender marinated bone-in chicken, Chinese lap cheong sausage, duck liver sausage, and salted fish atop fluffy charred rice.',
        price: 9.0,
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      }
    ],
    reviews: [
      {
        id: 'lh-r1',
        author: 'Derrick Koh',
        authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
        role: 'Food Enthusiast',
        rating: 5,
        date: '3 days ago',
        text: 'The smoky charcoal scent is unbelievable. Scraping the crunchy bottom layer with the sweet dark sauce is the highlight of Chinatown.',
        favoriteDish: 'Claypot Chicken Rice with Waxed Meats'
      }
    ],
    availableSlots: ['5:00 PM', '6:30 PM', '7:45 PM', '8:30 PM']
  },
  {
    id: 'sg-hawker-4',
    name: 'A Noodle Story (超好面)',
    tagline: 'Michelin Bib Gourmand Singapore-style ramen, sous-vide char siew & crispy potato-wrapped prawn',
    cuisine: 'Modern Singapore Ramen & Wonton Noodles',
    venueType: 'hawker',
    foodCentreName: 'Amoy Street Food Centre',
    stallNumber: '#01-39',
    neighborhood: 'Telok Ayer / CBD, Singapore',
    address: '7 Maxwell Rd, #01-39 Amoy Street Food Centre, Singapore 069111',
    distance: '0.2 km',
    walkTime: '2 min walk',
    price: '$',
    rating: 4.8,
    reviewCount: 1650,
    matchScore: 97,
    matchReason: 'Springy Hong Kong wonton noodles tossed in lemongrass sambal, crowned with 36-hour tender Spanish pork belly and a molten ramen egg.',
    isOpen: true,
    openStatusText: 'Open Now · Closes 2:30 PM, 5:30 PM',
    heroImage: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'hawker',
    vibes: ['Michelin Bib Gourmand', 'CBD Lunch Rush', 'Gourmet Hawker', 'Modern Fusion'],
    dietary: ['Pork & Seafood Broth'],
    hasOutdoor: true,
    michelinGuide: true,
    chefHighlight: 'Founded by Shatec-trained culinary chefs bringing European and Japanese sous-vide techniques to the hawker stall.',
    lat: 1.2796,
    lng: 103.8465,
    mapX: 41,
    mapY: 53,
    phone: '+65 9027 6289',
    hours: [
      { days: 'Mon - Fri', time: '11:15 AM – 2:30 PM, 5:30 PM – 7:30 PM' },
      { days: 'Sat - Sun', time: 'Closed' }
    ],
    popularDishes: ['Singapore Style Ramen', 'Potato-Wrapped Prawn', 'Tender Sous-Vide Char Siew', 'Onsen Lava Egg', 'Prawn & Pork Wontons'],
    menuHighlights: [
      {
        id: 'ans-m1',
        name: 'Signature Singapore Style Ramen Bowl',
        description: 'Springy egg noodles tossed in aromatic dried shrimp chili oil, paired with sous-vide char siew, potato nest prawn, and wontons.',
        price: 9.8,
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      }
    ],
    reviews: [
      {
        id: 'ans-r1',
        author: 'Chloe Ng',
        authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        role: 'CBD Professional',
        rating: 5,
        date: '2 days ago',
        text: 'The potato-wrapped prawn is ridiculously crisp, and the noodles have that perfect al dente spring. Michelin quality at hawker prices.',
        favoriteDish: 'Signature Singapore Style Ramen Bowl'
      }
    ],
    availableSlots: ['11:30 AM', '12:00 PM', '1:15 PM', '6:00 PM']
  },
  {
    id: 'sg-hawker-5',
    name: 'Lau Pa Sat Satay Street (Stalls 7 & 8)',
    tagline: 'Open-air charcoal haze, caramelized lemongrass chicken skewers & warm chunky peanut sauce',
    cuisine: 'Charcoal Grilled Satay & Street Skewers',
    venueType: 'hawker',
    foodCentreName: 'Lau Pa Sat / Boon Tat Street',
    stallNumber: 'Stalls 7 & 8',
    neighborhood: 'Raffles Place / Downtown, Singapore',
    address: '18 Raffles Quay, Boon Tat St Satay Street, Singapore 048582',
    distance: '0.4 km',
    walkTime: '5 min walk',
    price: '$',
    rating: 4.8,
    reviewCount: 4210,
    matchScore: 98,
    matchReason: 'The definitive Singapore night eating ritual: Boon Tat Street closes to road traffic every evening for charcoal satay smoke under the glittering skyscrapers.',
    isOpen: true,
    openStatusText: 'Open Now · Closes 2:00 AM',
    heroImage: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'supper',
    vibes: ['Open Air Street Feast', 'Charcoal Smoke', 'Late Night Drinks', 'Vibrant Buzz'],
    dietary: ['Halal Certified Stalls', 'Pork-Free'],
    hasOutdoor: true,
    michelinGuide: false,
    chefHighlight: 'Over 10,000 skewers hand-fanned daily over coconut husk charcoal pits with lemongrass marinade.',
    lat: 1.2806,
    lng: 103.8504,
    mapX: 47,
    mapY: 51,
    phone: '+65 6220 2138',
    hours: [
      { days: 'Everyday', time: '6:30 PM – 2:00 AM' }
    ],
    popularDishes: ['Chicken & Beef Satay Platter', 'BBQ Tiger Prawns', 'Ketan Ketupat Rice Cakes', 'Chunky Pineapple Peanut Sauce'],
    menuHighlights: [
      {
        id: 'lps-m1',
        name: 'Satay Street Feast Set (20 Skewers)',
        description: 'Assorted chicken, mutton, and beef skewers grilled over open charcoal, cucumber slices, onions, and spicy peanut gravy with grated pineapple.',
        price: 18.0,
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      }
    ],
    reviews: [
      {
        id: 'lps-r1',
        author: 'Farhan Malik',
        authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        role: 'Verified Local',
        rating: 5,
        date: 'Last night',
        text: 'Sitting outside on the closed street with satay smoke curling around the glass skyscrapers while sipping cold Tiger beer is an unbeatable vibe.',
        favoriteDish: 'Satay Street Feast Set'
      }
    ],
    availableSlots: ['7:00 PM', '8:30 PM', '10:00 PM', '11:45 PM', '1:00 AM']
  },
  {
    id: 'sg-hawker-6',
    name: 'Newton Food Centre - Hup Kee Oyster Omelette & BBQ Stingray',
    tagline: 'Crispy goo-egg oyster omelette, sambal stingray on banana leaf & sugar cane tower',
    cuisine: 'Hawker Oyster Omelette & BBQ Seafood',
    venueType: 'hawker',
    foodCentreName: 'Newton Food Centre',
    stallNumber: 'Stall 73 & Stall 31',
    neighborhood: 'Newton / Orchard, Singapore',
    address: '500 Clemenceau Ave N, Newton Food Centre, Singapore 229495',
    distance: '3.1 km',
    walkTime: 'Newton MRT 2 min',
    price: '$',
    rating: 4.8,
    reviewCount: 3120,
    matchScore: 96,
    matchReason: 'Famous outdoor hawker courtyard seen in Crazy Rich Asians: plump fresh oysters fried with tapioca starch and eggs into crispy, gooey perfection.',
    isOpen: true,
    openStatusText: 'Open Now · Closes 1:30 AM',
    heroImage: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'supper',
    vibes: ['Crazy Rich Asians Setting', 'Open Air Courtyard', 'BBQ Seafood Smoke', 'Late Night Feast'],
    dietary: ['Seafood Specialists', 'Halal BBQ Stalls Available'],
    hasOutdoor: true,
    michelinGuide: true,
    chefHighlight: 'Cast iron wok seasoned over 50 years to achieve that golden crispy exterior with custardy egg-starch interior.',
    lat: 1.3130,
    lng: 103.8375,
    mapX: 35,
    mapY: 26,
    phone: '+65 6734 5689',
    hours: [
      { days: 'Everyday', time: '5:00 PM – 1:30 AM' }
    ],
    popularDishes: ['Fried Oyster Omelette (Orh Luak)', 'BBQ Sambal Stingray', 'Chili Crab with Mantou', 'Charcoal Grilled Chicken Wings', 'Fresh Sugarcane with Lemon'],
    menuHighlights: [
      {
        id: 'nfc-m1',
        name: 'Crispy Fried Oyster Omelette (Orh Luak)',
        description: 'Plump Pacific oysters pan-fried with egg, tapioca batter, garlic, and coriander. Served with spicy lime chili dip.',
        price: 8.0,
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      },
      {
        id: 'nfc-m2',
        name: 'BBQ Sambal Stingray on Banana Leaf',
        description: 'Meaty stingray smothered in house-made dried shrimp belacan sambal, roasted over charcoal and garnished with calamansi.',
        price: 15.0,
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      }
    ],
    reviews: [
      {
        id: 'nfc-r1',
        author: 'Rachel Chu',
        authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
        role: 'Culinary Explorer',
        rating: 5,
        date: '3 days ago',
        text: 'The contrast of the crispy edges with the soft, gooey egg and sweet plump oysters is perfection. Dip into the chili sauce for that bright acidity!',
        favoriteDish: 'Crispy Fried Oyster Omelette'
      }
    ],
    availableSlots: ['6:00 PM', '7:30 PM', '9:15 PM', '11:00 PM', '12:30 AM']
  },

  // ==========================================
  // FOOD COURTS & KOPITIAMS (食阁/咖啡店)
  // ==========================================
  {
    id: 'sg-foodcourt-1',
    name: 'Food Republic @ Wisma Atria',
    tagline: 'Nostalgic 1900s Nanyang courtyard food court featuring Singapore\'s top heritage brands under one roof',
    cuisine: 'Multi-Heritage Food Court (Cai Fan, Ban Mian, Bak Kut Teh)',
    venueType: 'foodcourt',
    foodCentreName: 'Food Republic (Wisma Atria)',
    stallNumber: 'Level 4 Food Atrium',
    neighborhood: 'Orchard Road, Singapore',
    address: '435 Orchard Rd, Level 4 Wisma Atria, Singapore 238877',
    distance: '2.8 km',
    walkTime: 'Orchard MRT 1 min',
    price: '$$',
    rating: 4.7,
    reviewCount: 3100,
    matchScore: 95,
    matchReason: 'Air-conditioned comfort with 22 famous stalls: Thye Moh Chan pastries, Balestier Bak Kut Teh, Li Xin Teochew Fishball Noodles, and Pepper Lunch.',
    isOpen: true,
    openStatusText: 'Open Now · Closes 10:00 PM',
    heroImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'foodcourt',
    vibes: ['Nanyang 1920s Decor', 'Air-Conditioned Comfort', 'Huge Selection', 'Family Friendly'],
    dietary: ['Halal Stalls Available', 'Vegetarian Options', 'Gluten-Free Rice'],
    hasOutdoor: false,
    michelinGuide: false,
    chefHighlight: 'Curated roster of second- and third-generation master cooks preparing traditional dishes with modern consistency.',
    lat: 1.3039,
    lng: 103.8335,
    mapX: 31,
    mapY: 34,
    phone: '+65 6737 9881',
    hours: [
      { days: 'Everyday', time: '10:00 AM – 10:00 PM' }
    ],
    popularDishes: ['Li Xin Teochew Fishball Noodles', 'Handmade You Mian Ban Mian', 'Balestier Pepper Bak Kut Teh', 'Padang Rice', 'Chendol Ice'],
    menuHighlights: [
      {
        id: 'fr-m1',
        name: 'Li Xin Signature Fishball Mee Pok',
        description: '100% yellowtail fishballs hand-shaped daily without flour, springy noodles tossed in chili paste and crispy pork lard.',
        price: 7.2,
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      },
      {
        id: 'fr-m2',
        name: 'Claypot Ban Mian Soup',
        description: 'Torn handmade wheat dough simmered in anchovy broth with minced pork, wolfberry leaves, and a poached egg.',
        price: 6.8,
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      }
    ],
    reviews: [
      {
        id: 'fr-r1',
        author: 'Jonathan Sim',
        authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        role: 'Orchard Worker',
        rating: 5,
        date: 'Yesterday',
        text: 'The fishballs from Li Xin have that bouncy crunch you rarely find in standard food courts. Great air-conditioned spot when shopping along Orchard.',
        favoriteDish: 'Li Xin Signature Fishball Mee Pok'
      }
    ],
    availableSlots: ['11:30 AM', '12:30 PM', '1:30 PM', '6:00 PM', '7:30 PM']
  },
  {
    id: 'sg-foodcourt-2',
    name: 'Heap Seng Leong Traditional Coffeeshop (协胜隆)',
    tagline: 'Step back to 1950s Singapore: charcoal toasted kaya bread, soft-boiled eggs & iconic Butter Kopi Gu You',
    cuisine: 'Traditional Hainanese Kopitiam',
    venueType: 'foodcourt',
    foodCentreName: 'Heritage Shophouse Coffeeshop',
    stallNumber: '#01-5109',
    neighborhood: 'North Bridge Road / Lavender, Singapore',
    address: '10 North Bridge Rd, #01-5109, Singapore 190010',
    distance: '2.1 km',
    walkTime: 'Lavender MRT 4 min',
    price: '$',
    rating: 4.9,
    reviewCount: 2280,
    matchScore: 98,
    matchReason: 'The uncle in striped pajama pants roasting bread over charcoal embers and dropping a rich slab of salted butter into hot Nanyang Robusta kopi.',
    isOpen: true,
    openStatusText: 'Open Now · Closes 4:00 PM',
    heroImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'cafe',
    vibes: ['1950s Time Capsule', 'Charcoal Toasting', 'Abacus on Counter', 'Living Heritage'],
    dietary: ['Vegetarian Toast Options'],
    hasOutdoor: false,
    michelinGuide: false,
    chefHighlight: 'Uncle Shi runs the antique coffee station manually calculating bills with a wooden Chinese abacus.',
    lat: 1.3056,
    lng: 103.8624,
    mapX: 66,
    mapY: 25,
    phone: '+65 6292 2368',
    hours: [
      { days: 'Everyday', time: '5:00 AM – 4:00 PM' }
    ],
    popularDishes: ['Kopi Gu You (Butter Coffee)', 'Charcoal Toasted Kaya Butter Bread', 'Soft Boiled Kampung Eggs', 'Teh Tarik', 'Pandan Chiffon Slice'],
    menuHighlights: [
      {
        id: 'hsl-m1',
        name: 'Traditional Kopi Gu You Set',
        description: 'Hot Robusta kopi melted with a golden slab of SCS butter, accompanied by charcoal-crisped white toast with kaya and two runny eggs.',
        price: 3.8,
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      }
    ],
    reviews: [
      {
        id: 'hsl-r1',
        author: 'Grace Teo',
        authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
        role: 'Heritage Chronicler',
        rating: 5,
        date: '2 days ago',
        text: 'The aroma of bread toasting over live charcoal and butter melting into rich dark kopi transports you straight to pre-war Singapore. Unmatched nostalgia.',
        favoriteDish: 'Traditional Kopi Gu You Set'
      }
    ],
    availableSlots: ['7:00 AM', '8:30 AM', '10:00 AM', '1:00 PM']
  },

  // ==========================================
  // ZI CHAR & HERITAGE SEAFOOD (煮炒/海鲜)
  // ==========================================
  {
    id: 'sg-zichar-1',
    name: 'Keng Eng Kee (KEK) Seafood Alexandra',
    tagline: 'Michelin-recommended legendary Zi Char: Moonlight Hor Fun, Coffee Pork Ribs, Mingzhu Rolls & Chili Crab',
    cuisine: 'Heritage Zi Char & Wok Seafood',
    venueType: 'zichar',
    neighborhood: 'Alexandra / Bukit Merah, Singapore',
    address: '124 Bukit Merah Lane 1, #01-136, Singapore 150124',
    distance: '3.6 km',
    walkTime: 'Queenstown MRT 8 min',
    price: '$$',
    rating: 4.9,
    reviewCount: 3890,
    matchScore: 98,
    matchReason: 'Family-run Zi Char institution featured on Netflix Street Food: intense smoky wok hei, rich raw egg folding over beef noodles, and savory Mingzhu rolls.',
    isOpen: true,
    openStatusText: 'Open Now · Closes 10:30 PM',
    heroImage: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'zichar',
    vibes: ['Michelin Bib Gourmand', 'Netflix Feature', 'High Octane Wok Flames', 'Crowded Feast'],
    dietary: ['Pork-Free Hor Fun available', 'Pescatarian Friendly'],
    hasOutdoor: true,
    michelinGuide: true,
    chefHighlight: 'Third-generation brothers Paul and Wayne Liew perfecting 100,000 BTU cast-iron wok control.',
    lat: 1.2858,
    lng: 103.8033,
    mapX: 18,
    mapY: 50,
    phone: '+65 6272 1038',
    hours: [
      { days: 'Everyday', time: '11:30 AM – 2:00 PM, 5:00 PM – 10:00 PM' }
    ],
    popularDishes: ['Moonlight Hor Fun (月光河粉)', 'Coffee Pork Ribs', 'Signature Mingzhu Roll', 'Claypot Pig Liver', 'Chili Crab with Fried Mantou', 'Salted Egg Squid'],
    menuHighlights: [
      {
        id: 'kek-m1',
        name: 'Signature Moonlight Hor Fun',
        description: 'Silky charred flat rice noodles fried with sliced beef, squid, and Chinese sausage, crowned with an organic raw egg yolk.',
        price: 11.8,
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      },
      {
        id: 'kek-m2',
        name: 'Signature Coffee Pork Ribs',
        description: 'Tender pork ribs caramelized in a bittersweet Nanyang coffee reduction, topped with sesame seeds.',
        price: 16.8,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      }
    ],
    reviews: [
      {
        id: 'kek-r1',
        author: 'Daniel Food Diary',
        authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        role: 'Food Writer',
        rating: 5,
        date: '3 days ago',
        text: 'The breath of the wok in the Moonlight Hor Fun is intense and breathtaking. When you break the golden yolk into the noodles, it becomes velvety bliss.',
        favoriteDish: 'Signature Moonlight Hor Fun'
      }
    ],
    availableSlots: ['5:30 PM', '6:45 PM', '8:00 PM', '9:15 PM']
  },
  {
    id: 'sg-zichar-2',
    name: 'Kok Sen Restaurant (国成球记餐室)',
    tagline: 'Michelin Bib Gourmand Cantonese Zi Char: colossal Big Prawn Crispy Noodles & Claypot Yong Tau Foo',
    cuisine: 'Cantonese Heritage Zi Char',
    venueType: 'zichar',
    neighborhood: 'Keong Saik / Chinatown, Singapore',
    address: '2/4 Keong Saik Rd, Singapore 089110',
    distance: '0.4 km',
    walkTime: '5 min walk',
    price: '$$',
    rating: 4.8,
    reviewCount: 2190,
    matchScore: 97,
    matchReason: 'Four-decade shophouse legend: spicy prawn head gravy poured over nest of crispy egg noodles, studded with jumbo wild sea prawns.',
    isOpen: true,
    openStatusText: 'Open Now · Closes 9:30 PM',
    heroImage: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'zichar',
    vibes: ['Michelin Bib Gourmand', 'Heritage Shophouse', 'Cantonese Classics', 'Lively Gathering'],
    dietary: ['Seafood & Pork Specialty'],
    hasOutdoor: false,
    michelinGuide: true,
    chefHighlight: 'Three generations boiling rich orange prawn broth daily with fresh prawn shells, belacan, and chili paste.',
    lat: 1.2808,
    lng: 103.8423,
    mapX: 29,
    mapY: 61,
    phone: '+65 6223 2005',
    hours: [
      { days: 'Tue - Sun', time: '12:00 PM – 2:15 PM, 5:00 PM – 9:00 PM' },
      { days: 'Mon', time: 'Closed' }
    ],
    popularDishes: ['Big Prawn Crispy Noodles (大虾生面)', 'Claypot Yong Tau Foo in Brown Sauce', 'Black Pepper Beef Hor Fun', 'Prawn Paste Chicken'],
    menuHighlights: [
      {
        id: 'ks-m1',
        name: 'Big Prawn Crispy Noodles (大虾生面)',
        description: 'Crispy deep-fried egg noodles smothered in thick spicy seafood prawn gravy, topped with colossal wild sea prawns.',
        price: 19.0,
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      }
    ],
    reviews: [
      {
        id: 'ks-r1',
        author: 'Wayne Choo',
        authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
        role: 'Keong Saik Local',
        rating: 5,
        date: 'Last week',
        text: 'The gravy clings onto the crispy noodles and softens them into savory sponges. The giant prawns are sweet and bouncy.',
        favoriteDish: 'Big Prawn Crispy Noodles'
      }
    ],
    availableSlots: ['5:30 PM', '6:30 PM', '7:45 PM', '8:30 PM']
  },

  // ==========================================
  // LATE NIGHT SUPPER & DESSERTS (深夜食堂/夜市)
  // ==========================================
  {
    id: 'sg-supper-1',
    name: 'Swee Choon Tim Sum Restaurant (瑞春点心)',
    tagline: 'Singapore\'s favorite late night dim sum institution since 1962: piping hot salted egg custard baos, mee suah kueh & siew mai',
    cuisine: 'Cantonese & Shanghai Dim Sum',
    venueType: 'supper',
    neighborhood: 'Jalan Besar / Little India, Singapore',
    address: '183-191 Jalan Besar, Singapore 208882',
    distance: '2.5 km',
    walkTime: 'Jalan Besar MRT 3 min',
    price: '$$',
    rating: 4.8,
    reviewCount: 4720,
    matchScore: 97,
    matchReason: 'The ultimate late-night supper sanctuary: bamboo steamers arriving at 2:00 AM with molten lava salted egg buns and crispy deep-fried mee suah cakes.',
    isOpen: true,
    openStatusText: 'Open Now · Closes 4:00 AM',
    heroImage: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'supper',
    vibes: ['Midnight Supper Ritual', 'Bustling Shophouses', 'Speedy Service', 'Comfort Food'],
    dietary: ['Pork & Seafood Broth', 'Vegetarian Dim Sum available'],
    hasOutdoor: false,
    michelinGuide: false,
    chefHighlight: 'Over 60 varieties of handcrafted dim sum steamed fresh to order across three interconnected heritage shophouses.',
    lat: 1.3079,
    lng: 103.8565,
    mapX: 58,
    mapY: 22,
    phone: '+65 6225 7788',
    hours: [
      { days: 'Wed - Mon', time: '9:00 AM – 3:00 PM, 6:00 PM – 4:00 AM' },
      { days: 'Tue', time: 'Closed' }
    ],
    popularDishes: ['Liu Sha Bao (Molten Salted Egg Bun)', 'Fried Mee Suah Kueh', 'Sichuan Spicy Wantons', 'Har Gao (Prawn Dumpling)', 'Beancurd Skin Roll with Prawn'],
    menuHighlights: [
      {
        id: 'sc-m1',
        name: 'Signature Molten Salted Egg Custard Bun (Liu Sha Bao)',
        description: 'Fluffy steamed buns bursting with rich, grainy, buttery golden salted egg yolk lava.',
        price: 5.6,
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      },
      {
        id: 'sc-m2',
        name: 'Swee Choon Mee Suah Kueh',
        description: 'Square cakes of vermicelli noodles pressed with Chinese mushrooms, deep-fried to a golden crust.',
        price: 4.8,
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      }
    ],
    reviews: [
      {
        id: 'sc-r1',
        author: 'Leon Goh',
        authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        role: 'Midnight Foodie',
        rating: 5,
        date: '2 days ago',
        text: 'Nothing beats biting into the hot Liu Sha Bao at 1:00 AM after a night out. The custard is golden, rich, and sweet-savory.',
        favoriteDish: 'Signature Molten Salted Egg Custard Bun'
      }
    ],
    availableSlots: ['8:00 PM', '10:30 PM', '12:00 AM', '1:30 AM', '2:45 AM']
  },
  {
    id: 'sg-supper-2',
    name: 'Springleaf Prata & Supper Haven',
    tagline: 'Crispy coin pratas, Murtabak burger creations, frothy pulled Teh Tarik & Milo Dinosaur tower',
    cuisine: 'Roti Prata, Murtabak & Mamak Supper',
    venueType: 'supper',
    neighborhood: 'Serangoon / Upper Thomson, Singapore',
    address: '1 Thong Soon Ave, Singapore 787431',
    distance: '5.2 km',
    walkTime: 'Springleaf MRT 2 min',
    price: '$',
    rating: 4.8,
    reviewCount: 2840,
    matchScore: 96,
    matchReason: 'Craving late-night flaky, buttery dough stretched and slapped by hand onto sizzling flat-tops, with spicy mutton curry and condensed milk dips.',
    isOpen: true,
    openStatusText: 'Open Now · Closes 12:00 AM',
    heroImage: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281781?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1621996346565-e3d5d6281781?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'supper',
    vibes: ['Late Night Chill', 'Mamak Feast', 'Sweet & Savory Prata', 'Casual Gatherings'],
    dietary: ['Halal Certified', 'Vegetarian Dhal Available'],
    hasOutdoor: true,
    michelinGuide: true,
    chefHighlight: 'Master prata chefs hand-flipping dough paper thin with butter ghee on heavy cast iron griddles.',
    lat: 1.3980,
    lng: 103.8182,
    mapX: 25,
    mapY: 10,
    phone: '+65 6458 8818',
    hours: [
      { days: 'Everyday', time: '8:00 AM – 12:00 AM' }
    ],
    popularDishes: ['Crispy Coin Prata Set', 'Murtaburger (Murtabak Beef Burger)', 'Plaster Prata with Runny Egg', 'Maggi Goreng Pattaya', 'Teh Tarik Halia'],
    menuHighlights: [
      {
        id: 'sl-m1',
        name: 'Crispy Coin Prata with Mutton Curry',
        description: 'Flaky bite-sized coin pratas pan-crisped in ghee with a side of rich, spiced mutton curry.',
        price: 5.8,
        image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281781?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      }
    ],
    reviews: [
      {
        id: 'sl-r1',
        author: 'Nurul Huda',
        authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        role: 'Verified Foodie',
        rating: 5,
        date: 'Last weekend',
        text: 'The coin prata is crunchy on the outside and layered like puff pastry inside. Dunk it in the hot dhal or curry for heaven.',
        favoriteDish: 'Crispy Coin Prata with Mutton Curry'
      }
    ],
    availableSlots: ['8:30 PM', '9:30 PM', '10:45 PM', '11:30 PM']
  },
  {
    id: 'sg-dessert-1',
    name: 'Ah Chew Desserts (阿秋甜品)',
    tagline: 'Traditional Chinese dessert master: Durian Mango Sago, steamed ginger egg custard & black sesame paste',
    cuisine: 'Traditional Cantonese Tong Sui (Desserts)',
    venueType: 'dessert',
    neighborhood: 'Bugis / Liang Seah, Singapore',
    address: '1 Liang Seah St, #01-10/11 Liang Seah Court, Singapore 189032',
    distance: '1.2 km',
    walkTime: 'Bugis MRT 2 min',
    price: '$',
    rating: 4.8,
    reviewCount: 3410,
    matchScore: 98,
    matchReason: 'Classic wooden bench shophouse: generous chunks of fresh mango, cooling pomelo pulp, coconut sago, and fragrant D24 durian purée.',
    isOpen: true,
    openStatusText: 'Open Now · Closes 12:30 AM',
    heroImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'dessert',
    vibes: ['Heritage Wood Decor', 'Sweet Tooth Paradise', 'Post-Dinner Hangout', 'Late Night Treats'],
    dietary: ['Vegetarian Friendly', 'Dairy-Free Options'],
    hasOutdoor: false,
    michelinGuide: false,
    chefHighlight: 'Traditional stone-ground black sesame and almond pastes cooked slowly in copper cauldrons.',
    lat: 1.2982,
    lng: 103.8568,
    mapX: 59,
    mapY: 33,
    phone: '+65 6339 8198',
    hours: [
      { days: 'Everyday', time: '12:30 PM – 12:30 AM' }
    ],
    popularDishes: ['Durian Mango Sago with Pomelo', 'Steamed Fresh Milk Egg Custard', 'Black Sesame Paste', 'Hashima with Red Dates', 'Tang Yuan in Ginger Soup'],
    menuHighlights: [
      {
        id: 'ac-m1',
        name: 'Durian Mango Sago with Pomelo',
        description: 'Chilled sweet mango puree, coconut milk, chewy sago, juicy tart pomelo sacs, and a scoop of pure D24 durian pulp.',
        price: 6.8,
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      }
    ],
    reviews: [
      {
        id: 'ac-r1',
        author: 'Vivian Neo',
        authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
        role: 'Bugis Dessert Fan',
        rating: 5,
        date: 'Yesterday',
        text: 'The best finish to any meal in Bugis. The balance of sweet mango, bitter pomelo, and creamy durian is legendary.',
        favoriteDish: 'Durian Mango Sago with Pomelo'
      }
    ],
    availableSlots: ['2:00 PM', '4:30 PM', '8:00 PM', '10:00 PM', '11:45 PM']
  },

  // ==========================================
  // CAFES & HERITAGE BAKERIES (咖啡馆/烘焙)
  // ==========================================
  {
    id: 'sg-cafe-1',
    name: 'Tiong Bahru Bakery (Eng Hoon)',
    tagline: 'Artisan French bakery in 1930s Art Deco enclave: caramelized Kouign Amann, flaky almond croissants & flat whites',
    cuisine: 'Artisan Bakery & Specialty Coffee',
    venueType: 'cafe',
    neighborhood: 'Tiong Bahru, Singapore',
    address: '56 Eng Hoon St, #01-70, Singapore 160056',
    distance: '1.4 km',
    walkTime: 'Outram Park MRT 8 min',
    price: '$$',
    rating: 4.8,
    reviewCount: 3950,
    matchScore: 97,
    matchReason: 'Crispy butter layers, caramelized Breton sugar crust, and fresh espresso served in Singapore\'s beloved conservation estate.',
    isOpen: true,
    openStatusText: 'Open Now · Closes 8:00 PM',
    heroImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'cafe',
    vibes: ['Art Deco Neighborhood', 'Morning Sun', 'Fresh Butter Scents', 'Cozy Cafe'],
    dietary: ['Vegetarian Pastries', 'Oat & Soy Milk Available'],
    hasOutdoor: true,
    michelinGuide: false,
    chefHighlight: 'Laminated with French AOP butter and baked fresh every 2 hours in hearth deck ovens.',
    lat: 1.2842,
    lng: 103.8328,
    mapX: 26,
    mapY: 53,
    phone: '+65 6220 3430',
    hours: [
      { days: 'Everyday', time: '7:30 AM – 8:00 PM' }
    ],
    popularDishes: ['Signature Kouign Amann', 'Almond Croissant', 'Pain au Chocolat', 'Truffle Mushroom Brioche', 'Oat Flat White'],
    menuHighlights: [
      {
        id: 'tbb-m1',
        name: 'Signature Kouign Amann',
        description: 'Breton layered pastry with French butter and sugar caramelized into a deep amber crystalline crust.',
        price: 5.8,
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      }
    ],
    reviews: [
      {
        id: 'tbb-r1',
        author: 'Charlotte Wong',
        authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        role: 'Tiong Bahru Resident',
        rating: 5,
        date: '2 days ago',
        text: 'The shattering crunch of the caramelized outer crust on the Kouign Amann is pure joy. Perfect morning coffee spot.',
        favoriteDish: 'Signature Kouign Amann'
      }
    ],
    availableSlots: ['8:30 AM', '10:00 AM', '11:45 AM', '2:30 PM', '4:30 PM']
  },

  // ==========================================
  // RESTAURANTS & FINE DINING (餐馆/餐厅)
  // ==========================================
  {
    id: 'sg-1',
    name: 'Rempah Botanica',
    tagline: 'Slow-simmered 36-ingredient Peranakan rempah, wild Buah Keluak wagyu & natural cellar',
    cuisine: 'Modern Peranakan & Straits Heritage',
    venueType: 'restaurant',
    neighborhood: 'Telok Ayer, Singapore',
    address: '112 Amoy St, Singapore 069932',
    distance: '0.2 km',
    walkTime: '3 min walk',
    price: '$$$',
    rating: 4.9,
    reviewCount: 870,
    matchScore: 98,
    matchReason: 'Direct hit on craving for earthy Buah Keluak nut richness, stone-ground lemongrass rempah, and heritage shophouse intimacy.',
    isOpen: true,
    openStatusText: 'Open Now · Closes 11:00 PM',
    heroImage: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'peranakan',
    vibes: ['Heritage Shophouse', 'Warm Ambient Glow', 'Natural Wine', 'Date Night'],
    dietary: ['Vegetarian Options', 'Gluten-Free Sambals', 'Halal-Sourced Poultry'],
    hasOutdoor: true,
    michelinGuide: true,
    chefHighlight: 'Chef Cheryl prepares her grandmother\'s signature black nut rempah over 5 days of slow processing.',
    lat: 1.2801,
    lng: 103.8475,
    mapX: 42,
    mapY: 52,
    phone: '+65 6224 8188',
    hours: [
      { days: 'Tue - Sun', time: '12:00 PM – 3:00 PM, 6:00 PM – 11:00 PM' },
      { days: 'Mon', time: 'Closed' }
    ],
    popularDishes: ['Wagyu Beef Rib Buah Keluak', 'Bakwan Kepiting', 'Heritage Kueh Salat', 'Nyonya Laksa', 'Ayam Buah Keluak'],
    menuHighlights: [
      {
        id: 'sg-m1',
        name: 'Wagyu Beef Rib Buah Keluak',
        description: '48-hour braised Australian Wagyu short rib in rich Indonesian black nut gravy with kaffir lime and blue pea rice.',
        price: 48,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      }
    ],
    reviews: [
      {
        id: 'sg-r1',
        author: 'Julian Lee',
        authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        role: 'Michelin Inspector Contributor',
        rating: 5,
        date: '3 days ago',
        text: 'The depth of the Buah Keluak is unparalleled in the city. The dark chocolate and earthy truffle notes merge seamlessly with tender Wagyu.',
        favoriteDish: 'Wagyu Beef Rib Buah Keluak'
      }
    ],
    availableSlots: ['6:30 PM', '7:15 PM', '8:00 PM', '8:45 PM']
  },
  {
    id: 'sg-2',
    name: 'Wok Hei Shophouse',
    tagline: 'High-heat wok alchemy, moonlight wagyu hor fun & signature caramel coffee pork ribs',
    cuisine: 'Elevated Zi Char & Modern Wok Mastery',
    venueType: 'restaurant',
    neighborhood: 'Keong Saik, Singapore',
    address: '28 Keong Saik Rd, Singapore 089135',
    distance: '0.4 km',
    walkTime: '5 min walk',
    price: '$$',
    rating: 4.9,
    reviewCount: 1320,
    matchScore: 97,
    matchReason: 'Mastery of intense wok hei breath, sizzling cast iron acoustics, and velvety raw egg yolk folded into charred rice noodles.',
    isOpen: true,
    openStatusText: 'Open Now · Closes 11:30 PM',
    heroImage: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'wokhei',
    vibes: ['Lively Buzz', 'Open Kitchen Flames', 'Craft Beers', 'Late Night'],
    dietary: ['Pork-Free Options', 'Vegetarian Char Kway Teow'],
    hasOutdoor: false,
    michelinGuide: true,
    chefHighlight: 'Custom jet burners generating 120,000 BTUs for unmistakable authentic smoky wok hei.',
    lat: 1.2808,
    lng: 103.8423,
    mapX: 28,
    mapY: 62,
    phone: '+65 6778 8780',
    hours: [
      { days: 'Everyday', time: '11:30 AM – 2:30 PM, 5:30 PM – 11:30 PM' }
    ],
    popularDishes: ['Moonlight Wagyu Hor Fun', 'Coffee Glazed Ribs', 'Salted Egg Yolk Calamari', 'Char Kway Teow'],
    menuHighlights: [
      {
        id: 'sg-m201',
        name: 'Moonlight Wagyu Hor Fun',
        description: 'Silky flat rice noodles seared with intense smokiness, sliced MB7 Wagyu beef, crowned with an organic raw egg yolk.',
        price: 28,
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      }
    ],
    reviews: [
      {
        id: 'sg-r201',
        author: 'Bryan Tan',
        authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
        role: 'Food Critic',
        rating: 5,
        date: '2 days ago',
        text: 'Breaking the yolk into the piping hot hor fun is pure gastronomic euphoria. Exceptional wok breath.',
        favoriteDish: 'Moonlight Wagyu Hor Fun'
      }
    ],
    availableSlots: ['5:45 PM', '6:30 PM', '7:45 PM', '8:30 PM']
  },
  {
    id: 'sg-3',
    name: 'Scaled by Ah Hua Kelong',
    tagline: 'Direct-from-kelong sea bass, roasted chili crab mantou & smoked clam butter',
    cuisine: 'Coastal Kelong Seafood & Farm-to-Table',
    venueType: 'restaurant',
    neighborhood: 'Bugis / Haji Lane, Singapore',
    address: '8 Haji Lane, Singapore 189201',
    distance: '0.9 km',
    walkTime: '11 min walk',
    price: '$$$',
    rating: 4.9,
    reviewCount: 590,
    matchScore: 94,
    matchReason: 'Direct connection to local Singapore kelong coastal farms: sweet mud crab folded with egg drop sambal and golden mantou.',
    isOpen: true,
    openStatusText: 'Open Now · Closes 10:30 PM',
    heroImage: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'seafood',
    vibes: ['Coastal Nautical', 'Shophouse Vibe', 'Craft IPA on Tap', 'Casual Warmth'],
    dietary: ['Pescatarian Paradise', 'Shellfish-Free Options'],
    hasOutdoor: false,
    michelinGuide: false,
    chefHighlight: 'Fish harvested daily from offshore fish farms off Pulau Ubin and Changi.',
    lat: 1.3005,
    lng: 103.8588,
    mapX: 62,
    mapY: 28,
    phone: '+65 9180 8123',
    hours: [
      { days: 'Wed - Sun', time: '12:00 PM – 2:30 PM, 5:30 PM – 10:30 PM' },
      { days: 'Mon - Tue', time: 'Closed' }
    ],
    popularDishes: ['Chili Crab Dip with Mantou', 'Whole Roasted Kelong Seabass', 'Black Pepper Crab', 'Lala Clams'],
    menuHighlights: [
      {
        id: 'sg-m301',
        name: 'Signature Chili Crab Dip with Crispy Mantou',
        description: 'Hand-picked Sri Lankan mud crab flesh simmered in thick sweet-savory egg drop chili reduction, fried bun dippers.',
        price: 32,
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      }
    ],
    reviews: [
      {
        id: 'sg-r301',
        author: 'Nadia Rahim',
        authorAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
        role: 'Verified Foodie',
        rating: 5,
        date: '5 days ago',
        text: 'Skip the messy crab cracking without losing a single drop of that legendary chili crab sauce magic.',
        favoriteDish: 'Signature Chili Crab Dip'
      }
    ],
    availableSlots: ['5:30 PM', '6:45 PM', '8:00 PM', '9:15 PM']
  },
  {
    id: 'sg-4',
    name: 'Thevar Spice Atelier',
    tagline: 'Modern South Indian culinary canvas, bone marrow roti, berbere spiced lobster',
    cuisine: 'Contemporary South Indian & Spice Artistry',
    venueType: 'restaurant',
    neighborhood: 'Keong Saik, Singapore',
    address: '9 Keong Saik Rd, Singapore 089117',
    distance: '0.4 km',
    walkTime: '6 min walk',
    price: '$$$$',
    rating: 4.9,
    reviewCount: 710,
    matchScore: 95,
    matchReason: 'Masterful layering of toasted spices, tangy tamarind reductions, and comforting charcoal-grilled parotta.',
    isOpen: true,
    openStatusText: 'Open Now · Closes 11:00 PM',
    heroImage: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281781?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1621996346565-e3d5d6281781?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'spice',
    vibes: ['Intimate Counter', 'High Energy', 'Craft Cocktails', 'Date Night'],
    dietary: ['Vegetarian Tasting Menu Available'],
    hasOutdoor: false,
    michelinGuide: true,
    chefHighlight: 'Chef Mano Thevar draws on his Penang Tamil heritage reimagined through progressive technique.',
    lat: 1.2804,
    lng: 103.8428,
    mapX: 32,
    mapY: 66,
    phone: '+65 6904 0838',
    hours: [
      { days: 'Tue - Sat', time: '5:30 PM – 11:00 PM' },
      { days: 'Sun - Mon', time: 'Closed' }
    ],
    popularDishes: ['Crispy Pork Vindaloo Roti', 'Spiced Lobster Madras Bisque', 'Chettinad Lamb Rump'],
    menuHighlights: [
      {
        id: 'sg-m401',
        name: 'Crispy Pork Vindaloo Roti',
        description: 'Tender spiced pulled pork vindaloo wrapped in flaky layered parotta with tangy pickled shallots.',
        price: 32,
        image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281781?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      }
    ],
    reviews: [
      {
        id: 'sg-r401',
        author: 'Devika Nair',
        authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        role: 'Verified Epicure',
        rating: 5,
        date: 'Last weekend',
        text: 'The pork vindaloo roti is nothing short of legendary. The acidity cuts cleanly through the rich savory crunch.',
        favoriteDish: 'Crispy Pork Vindaloo Roti'
      }
    ],
    availableSlots: ['6:00 PM', '7:30 PM', '8:45 PM']
  },
  {
    id: 'sg-5',
    name: '328 Katong Laksa Heritage',
    tagline: 'Rich coconut milk broth, sun-dried shrimp sambal & charcoal grilled mackerel otah',
    cuisine: 'Iconic Katong Laksa & Straits Snacks',
    venueType: 'hawker',
    neighborhood: 'Katong / East Coast, Singapore',
    address: '51 East Coast Rd, Singapore 428770',
    distance: '6.8 km',
    walkTime: 'Marine Parade MRT 3 min',
    price: '$',
    rating: 4.8,
    reviewCount: 2150,
    matchScore: 96,
    matchReason: 'Craving bold coconut fragrance, spicy dried shrimp sambal, cut thick vermicelli eaten solely with soup spoons, and smoky banana leaf otah.',
    isOpen: true,
    openStatusText: 'Open Now · Closes 9:30 PM',
    heroImage: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'hawker',
    vibes: ['Heritage Shophouse', 'No-Frills Legend', 'Casual Fast', 'Daytime Bustle'],
    dietary: ['Pork-Free Broth', 'Seafood Broth'],
    hasOutdoor: false,
    michelinGuide: true,
    chefHighlight: 'Broth simmered with fresh coconut cream, ground rempah, and aromatic laksa leaves (daun kesum).',
    lat: 1.3068,
    lng: 103.9038,
    mapX: 92,
    mapY: 46,
    phone: '+65 9732 8163',
    hours: [
      { days: 'Everyday', time: '10:00 AM – 9:30 PM' }
    ],
    popularDishes: ['Famous Katong Laksa', 'Charcoal Grilled Mackerel Otah', 'Fried Chicken Wings', 'Nasi Lemak Packet'],
    menuHighlights: [
      {
        id: 'sg-m501',
        name: 'Signature Katong Laksa Bowl',
        description: 'Cut thick rice noodles in rich spiced coconut gravy, sweet cockles, fishcake slices, peeled prawns, and house chili sambal.',
        price: 9.5,
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      }
    ],
    reviews: [
      {
        id: 'sg-r501',
        author: 'Cheryl Wee',
        authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
        role: 'East Coast Resident',
        rating: 5,
        date: '3 days ago',
        text: 'The broth has that legendary balance of rich santan and gritty dried shrimp. Eating with just the porcelain spoon is the only way.',
        favoriteDish: 'Signature Katong Laksa Bowl'
      }
    ],
    availableSlots: ['11:30 AM', '1:00 PM', '4:30 PM', '7:00 PM']
  },
  {
    id: 'sg-6',
    name: 'Boon Tong Kee Chicken Rice Atelier',
    tagline: 'Silky poached grain-fed chicken, aromatic ginger pandan rice & tangy lime chili',
    cuisine: 'Hainanese Chicken Rice & Cantonese Roasts',
    venueType: 'restaurant',
    neighborhood: 'Orchard & River Valley, Singapore',
    address: '425 River Valley Rd, Singapore 248324',
    distance: '2.4 km',
    walkTime: 'Great World MRT 4 min',
    price: '$$',
    rating: 4.8,
    reviewCount: 1840,
    matchScore: 95,
    matchReason: 'Classic comfort of tender gelatinous poached chicken breast and thigh bathed in superior soy sauce and sesame oil over gleaming chicken fat rice.',
    isOpen: true,
    openStatusText: 'Open Now · Closes 10:30 PM',
    heroImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'zichar',
    vibes: ['Family Friendly', 'Air-Conditioned Comfort', 'Speedy Service', 'Comfort Food'],
    dietary: ['Halal-sourced chicken', 'Gluten-Free Rice available'],
    hasOutdoor: false,
    michelinGuide: true,
    chefHighlight: 'Chicken slow-poached with sub-boiling precision and iced immediately for a crystal gelatin skin layer.',
    lat: 1.2952,
    lng: 103.8322,
    mapX: 30,
    mapY: 38,
    phone: '+65 6736 3213',
    hours: [
      { days: 'Everyday', time: '11:00 AM – 3:00 PM, 5:00 PM – 10:30 PM' }
    ],
    popularDishes: ['Signature Poached Chicken Rice', 'Crispy Beancurd with Mayo Dip', 'Imperial Pork Ribs'],
    menuHighlights: [
      {
        id: 'sg-m601',
        name: 'Signature Poached Chicken (Half)',
        description: 'Tender grain-fed chicken with delicate gelatin skin, drizzled with fragrant soy sauce and sesame broth.',
        price: 22,
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      }
    ],
    reviews: [
      {
        id: 'sg-r601',
        author: 'Gabriel Tan',
        authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
        role: 'Food & Travel Writer',
        rating: 5,
        date: 'Yesterday',
        text: 'The chicken is succulent, never dry. The rice grains are individually coated in savory chicken perfume without being greasy.',
        favoriteDish: 'Signature Poached Chicken Rice'
      }
    ],
    availableSlots: ['12:00 PM', '1:30 PM', '6:00 PM', '7:30 PM']
  },

  // ==========================================
  // REGIONAL HUBS (MALAYSIA)
  // ==========================================
  {
    id: 'my-1',
    name: 'Dewakan Ember Lab',
    tagline: 'Indigenous Malaysian terroir, fermented tempoyak, wild jungle herbs & wood-fired duck',
    cuisine: 'Modern Malaysian & Indigenous Foraged',
    venueType: 'restaurant',
    neighborhood: 'KLCC / Platinum Park, Kuala Lumpur',
    address: 'Platinum Park, 50 Persiaran KLCC, Kuala Lumpur 50088',
    distance: '315 km (KL Central)',
    walkTime: 'KLCC Station 4 min',
    price: '$$$$',
    rating: 4.9,
    reviewCount: 640,
    matchScore: 96,
    matchReason: 'Unmatched exploration of Malaysian heritage: fermented durian tempoyak depth, torch ginger flower florals, and embers from rambutan wood.',
    isOpen: true,
    openStatusText: 'Open Now · Closes 11:00 PM',
    heroImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'grill',
    vibes: ['Fine Dining Terroir', 'Skyline Panorama', 'Celebratory'],
    dietary: ['Halal Ingredients', 'Tasting Menu Dietary Adaptations'],
    hasOutdoor: false,
    michelinGuide: true,
    chefHighlight: 'Chef Darren Teoh forages with indigenous Orang Asli communities across peninsular Malaysia.',
    lat: 3.1578,
    lng: 101.7119,
    mapX: 82,
    mapY: 22,
    phone: '+60 3-6207 9008',
    hours: [
      { days: 'Wed - Sun', time: '6:00 PM – 11:00 PM' },
      { days: 'Mon - Tue', time: 'Closed' }
    ],
    popularDishes: ['Aged Perak Duck with Bario Rice', 'Kulim Nut River Prawn Broth', 'Tempoyak Fermented Sambal'],
    menuHighlights: [
      {
        id: 'my-m1',
        name: 'Aged Perak Duck with Bario Rice & Tempoyak',
        description: 'Dry-aged duck breast grilled over rambutan wood, fermented durian emulsion, highland black Bario rice porridge.',
        price: 92,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      }
    ],
    reviews: [
      {
        id: 'my-r1',
        author: 'Melissa Cheah',
        authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
        role: 'Gastronomy Editor',
        rating: 5,
        date: '4 days ago',
        text: 'A profound culinary love letter to Malaysia. The kulim nut broth possesses the earthy soul of white truffles.',
        favoriteDish: 'Aged Perak Duck with Bario Rice'
      }
    ],
    availableSlots: ['6:30 PM', '7:30 PM', '8:30 PM']
  },
  {
    id: 'my-2',
    name: 'Chocha Heritage Cellar',
    tagline: 'Restored pre-war shophouse, natural pet-nats, spiced duck noodles & vinyl sounds',
    cuisine: 'Natural Wine Bar & Contemporary Malaysian Tapas',
    venueType: 'cafe',
    neighborhood: 'Petaling Street / Chinatown, Kuala Lumpur',
    address: '156 Jalan Petaling, Chinatown, 50000 Kuala Lumpur',
    distance: '310 km (KL Chinatown)',
    walkTime: 'Pasar Seni MRT 4 min',
    price: '$$',
    rating: 4.8,
    reviewCount: 780,
    matchScore: 95,
    matchReason: 'Vibrant skin-contact amber wines paired with cincalok-cured fried chicken and breezy shophouse courtyards.',
    isOpen: true,
    openStatusText: 'Open Now · Closes 12:00 AM',
    heroImage: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'wine',
    vibes: ['Vintage Shophouse', 'Vinyl Jazz', 'Open Courtyard', 'Natural Wine'],
    dietary: ['Vegetarian Tapas'],
    hasOutdoor: true,
    michelinGuide: true,
    chefHighlight: 'Over 120 biodynamic and minimal-intervention labels sourced from small-scale growers.',
    lat: 3.1435,
    lng: 101.6982,
    mapX: 74,
    mapY: 34,
    phone: '+60 3-2022 1100',
    hours: [
      { days: 'Tue - Sun', time: '5:00 PM – 12:00 AM' }
    ],
    popularDishes: ['Cincalok Fried Chicken Wings', 'Hand-Cut Duck Confit Aglio Olio'],
    menuHighlights: [
      {
        id: 'my-m201',
        name: 'Cincalok Fried Chicken Wings',
        description: 'Malacca fermented krill paste marinade, calamansi lime glaze, crispy curry leaf dust.',
        price: 18,
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      }
    ],
    reviews: [
      {
        id: 'my-r201',
        author: 'Arlo Lim',
        authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        role: 'Sommelier',
        rating: 5,
        date: 'Last Friday',
        text: 'The sun filtering through the courtyard leaves while sipping a chilled pet-nat is an essential KL weekend ritual.',
        favoriteDish: 'Cincalok Fried Chicken Wings'
      }
    ],
    availableSlots: ['6:00 PM', '7:00 PM', '8:15 PM']
  },
  {
    id: 'my-3',
    name: 'George Town Heritage Roastery',
    tagline: 'Artisan charcoal-toasted pandan kaya brioche, soft kampung eggs & single-origin Liberica',
    cuisine: 'Artisan Heritage Kopitiam & Single-Origin Roastery',
    venueType: 'foodcourt',
    neighborhood: 'Beach Street, George Town, Penang',
    address: '120 Beach St, George Town, 10300 Penang, Malaysia',
    distance: '740 km (Penang)',
    walkTime: 'Chulia St 2 min',
    price: '$',
    rating: 4.9,
    reviewCount: 980,
    matchScore: 94,
    matchReason: 'Sensory comfort of fragrant pandan leaf curd, cultured salted butter melting over crisp charcoal toast, and runny golden yolk dip.',
    isOpen: true,
    openStatusText: 'Open Now · Closes 5:30 PM',
    heroImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'cafe',
    vibes: ['Heritage Shophouse', 'Morning Light', 'Specialty Coffee', 'Warm Nostalgia'],
    dietary: ['Vegetarian Friendly'],
    hasOutdoor: true,
    michelinGuide: false,
    chefHighlight: 'House-made coconut kaya slow-stirred for 8 hours in traditional copper pots over charcoal embers.',
    lat: 5.4164,
    lng: 100.3392,
    mapX: 88,
    mapY: 15,
    phone: '+60 4-261 8820',
    hours: [
      { days: 'Everyday', time: '7:30 AM – 5:30 PM' }
    ],
    popularDishes: ['Charcoal-Grilled Pandan Kaya Toast Set', 'Johor Liberica Cold Drip'],
    menuHighlights: [
      {
        id: 'my-m301',
        name: 'Charcoal-Grilled Pandan Kaya Toast Set',
        description: 'Thick sourdough toast grilled over binchotan, cultured French butter slab, house pandan kaya, two soft kampung eggs.',
        price: 8,
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
        isMustTry: true,
        dietaryBadge: 'Vegetarian'
      }
    ],
    reviews: [
      {
        id: 'my-r301',
        author: 'Freja Koh',
        authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        role: 'Penang Culinary Resident',
        rating: 5,
        date: 'Yesterday',
        text: 'The smoke on the bread combined with the silky pandan kaya is pure nostalgia elevated to fine art.',
        favoriteDish: 'Charcoal-Grilled Pandan Kaya Toast Set'
      }
    ],
    availableSlots: ['8:30 AM', '10:00 AM', '11:30 AM']
  },
  {
    id: 'my-4',
    name: 'Firesmith Hearth & Satay Bar',
    tagline: 'Mangrove wood-fired dry-aged wagyu skewers, charred pineapple sambal & craft cocktails',
    cuisine: 'Contemporary Charcoal Satay & Open Flame Hearth',
    venueType: 'restaurant',
    neighborhood: 'Bangsar, Kuala Lumpur',
    address: '32 Jalan Telawi 5, Bangsar, 59100 Kuala Lumpur',
    distance: '312 km (KL Bangsar)',
    walkTime: 'Bangsar LRT 10 min',
    price: '$$$',
    rating: 4.8,
    reviewCount: 520,
    matchScore: 93,
    matchReason: 'Mastery of open charcoal flame: lemongrass-glazed prime beef skewers, chunky roasted peanut sauce, and smoky mezcal sips.',
    isOpen: true,
    openStatusText: 'Open Now · Closes 11:30 PM',
    heroImage: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'grill',
    vibes: ['Open Charcoal Hearth', 'Lively Neighborhood', 'Craft Cocktails'],
    dietary: ['Pork-Free Kitchen', 'Halal-Certified Beef & Poultry'],
    hasOutdoor: true,
    michelinGuide: false,
    chefHighlight: 'Skewers rotated by hand over mangrove binchotan embers and basted with caramelized lemongrass honey.',
    lat: 3.1319,
    lng: 101.6705,
    mapX: 70,
    mapY: 42,
    phone: '+60 3-2287 4000',
    hours: [
      { days: 'Tue - Sun', time: '5:30 PM – 11:30 PM' }
    ],
    popularDishes: ['Dry-Aged Wagyu Satay Kerbau', 'Charred Pineapple Peanut Sambal'],
    menuHighlights: [
      {
        id: 'my-m401',
        name: 'Dry-Aged Wagyu Satay Skewers (6 pcs)',
        description: 'Australian MB7 Wagyu rump basted with lemongrass-shallot marinade, roasted over mangrove charcoal with chunky peanut dip.',
        price: 36,
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      }
    ],
    reviews: [
      {
        id: 'my-r401',
        author: 'Farhan Azman',
        authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        role: 'Verified Local',
        rating: 5,
        date: '2 weeks ago',
        text: 'The smoke penetration on the wagyu satay is unmatched. That charred pineapple sambal adds a sweet, tangy kick.',
        favoriteDish: 'Dry-Aged Wagyu Satay Skewers'
      }
    ],
    availableSlots: ['6:00 PM', '7:30 PM', '9:00 PM']
  }
];

export const CURRENT_USER_PROFILE: UserTasteProfile = {
  name: 'Tan Wayn',
  handle: '@tanwayn',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  level: 'Master Food Connoisseur',
  palateScore: 94,
  dna: [
    { label: 'Hawker Stalls & Food Courts (小贩与食阁)', percentage: 38, description: 'Affinity for authentic char kway teow, chicken rice, laksa & hawker wok hei.' },
    { label: 'Heritage Zi Char & Wok Hei (煮炒镬气)', percentage: 26, description: 'High-heat breath of the wok, moonlight hor fun, salted egg seafood & coffee ribs.' },
    { label: 'Malay & Peranakan Rempah (娘惹香料)', percentage: 20, description: 'Earthy Buah Keluak, stone-ground lemongrass sambal, blue pea nasi & rich rendang.' },
    { label: 'Kopitiam Kaya & Charcoal Toast (咖啡店)', percentage: 16, description: 'Nostalgic Kopi Gu You, pandan kaya toast, soft-boiled eggs & dim sum.' }
  ],
  stamps: [
    { cuisine: 'Hawker Centers (Maxwell & Old Airport Rd)', count: 24, icon: '🍢', accent: '#F4511E' },
    { cuisine: 'Zi Char & Seafood Wok Hei', count: 18, icon: '🔥', accent: '#EA580C' },
    { cuisine: 'Kopitiams & Food Courts', count: 16, icon: '🍲', accent: '#10B981' },
    { cuisine: 'Supper & Prata Havens', count: 12, icon: '🌙', accent: '#8B5CF6' }
  ]
};

export const INITIAL_USER_PROFILE: UserTasteProfile = CURRENT_USER_PROFILE;

export interface TastingGuide {
  id: string;
  title: string;
  subtitle: string;
  curator: string;
  spotsCount: number;
  image: string;
}

export const TASTING_GUIDES: TastingGuide[] = [
  {
    id: 'guide-1',
    title: 'The Ultimate Singapore Hawker Pilgrimage',
    subtitle: 'From Tian Tian Chicken Rice at Maxwell to Nam Sing Hokkien Mee at Old Airport Road.',
    curator: 'Maxwell & Old Airport Rd Masters',
    spotsCount: 8,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'guide-2',
    title: 'Wok Hei & Midnight Zi Char Crawl',
    subtitle: 'High-heat jet burners, Moonlight Hor Fun, salted egg squid, and KEK Seafood.',
    curator: 'Zi Char Guild of Singapore',
    spotsCount: 6,
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'guide-3',
    title: 'Heritage Kopitiam & Late Night Supper Trail',
    subtitle: 'Charcoal kaya butter toast, butter kopi gu you, and 2 AM molten dim sum.',
    curator: 'Nanyang Heritage Council',
    spotsCount: 7,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80'
  }
];
