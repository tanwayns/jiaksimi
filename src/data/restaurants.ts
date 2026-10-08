import { Restaurant, UserTasteProfile } from '../types/restaurant';

export const RESTAURANTS_DATA: Restaurant[] = [
  {
    id: 'sg-1',
    name: 'Rempah Botanica',
    tagline: 'Slow-simmered 36-ingredient Peranakan rempah, wild Buah Keluak wagyu & natural cellar',
    cuisine: 'Modern Peranakan & Straits Heritage',
    neighborhood: 'Telok Ayer, Singapore',
    address: '112 Amoy St, Singapore 069932',
    distance: '0.2 km',
    walkTime: '3 min walk',
    price: '$$$',
    rating: 4.9,
    reviewCount: 870,
    matchScore: 98,
    matchReason: 'Direct hit on your craving for earthy Buah Keluak nut richness, stone-ground lemongrass rempah, and heritage shophouse intimacy.',
    isOpen: true,
    openStatusText: 'Open Now · Closes 11:00 PM',
    heroImage: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=80'
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
    popularDishes: ['Wagyu Beef Rib Buah Keluak', 'Bakwan Kepiting', 'Heritage Kueh Salat', 'Nyonya Laksa', 'Ayam Buah Keluak', 'Blue Pea Rice'],
    menuHighlights: [
      {
        id: 'sg-m1',
        name: 'Wagyu Beef Rib Buah Keluak',
        description: '48-hour braised Australian Wagyu short rib in rich Indonesian black nut gravy with kaffir lime and blue pea rice.',
        price: 48,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      },
      {
        id: 'sg-m2',
        name: 'Tiger Prawn Boston Bay Bakwan Kepiting',
        description: 'Hand-minced pork and blue swimmer crab meatballs simmered in clear bamboo shoot and white pepper broth.',
        price: 26,
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      },
      {
        id: 'sg-m3',
        name: 'Heritage Kueh Salat with Pandan Curd',
        description: 'Silky pandan coconut custard over glutinous rice naturally tinted with butterfly pea flower.',
        price: 16,
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
        dietaryBadge: 'Vegetarian'
      }
    ],
    reviews: [
      {
        id: 'sg-r1',
        author: 'Julian Lee',
        authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        role: 'Michelin Inspector Contributor · Singapore',
        rating: 5,
        date: '3 days ago',
        text: 'The depth of the Buah Keluak is unparalleled in the city. The dark chocolate and earthy truffle notes merge seamlessly with tender Wagyu. Pair with an Austrian Grüner Veltliner.',
        favoriteDish: 'Wagyu Beef Rib Buah Keluak'
      },
      {
        id: 'sg-r2',
        author: 'Siti Aminah',
        authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        role: 'Verified Foodie · 112 Reviews',
        rating: 5,
        date: 'Last week',
        text: 'Eating in this Amoy Street shophouse feels like stepping into a romantic tropical salon. The kueh salat is textbook perfection.',
        favoriteDish: 'Heritage Kueh Salat'
      }
    ],
    availableSlots: ['6:30 PM', '7:15 PM', '8:00 PM', '8:45 PM']
  },
  {
    id: 'sg-2',
    name: 'Wok Hei Shophouse',
    tagline: 'High-heat wok alchemy, moonlight wagyu hor fun & signature caramel coffee pork ribs',
    cuisine: 'Elevated Zi Char & Modern Wok Mastery',
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
      'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80'
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
    popularDishes: ['Moonlight Wagyu Hor Fun', 'Coffee Glazed Ribs', 'Salted Egg Yolk Calamari', 'Char Kway Teow', 'Wok Hei Seafood Hor Fun', 'Har Cheong Gai'],
    menuHighlights: [
      {
        id: 'sg-m201',
        name: 'Moonlight Wagyu Hor Fun',
        description: 'Silky flat rice noodles seared with intense smokiness, sliced MB7 Wagyu beef, crowned with a rich organic raw egg yolk.',
        price: 28,
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      },
      {
        id: 'sg-m202',
        name: 'Signature Coffee Glazed Ribs',
        description: 'Prime pork ribs caramelized in aromatic Nanyang kopi glaze with toasted white sesame and chili threads.',
        price: 24,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      },
      {
        id: 'sg-m203',
        name: 'Salted Egg Yolk Calamari Crisp',
        description: 'Fresh squid tossed in creamy wok-fried golden egg yolk, bird\'s eye chili, and crispy curry leaves.',
        price: 22,
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      }
    ],
    reviews: [
      {
        id: 'sg-r201',
        author: 'Bryan Tan',
        authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
        role: 'Singapore Food Critic',
        rating: 5,
        date: '2 days ago',
        text: 'The wok hei aroma hits you before the plate lands on your table. Breaking the yolk into the piping hot hor fun is pure gastronomic euphoria.',
        favoriteDish: 'Moonlight Wagyu Hor Fun'
      }
    ],
    availableSlots: ['5:45 PM', '6:30 PM', '7:45 PM', '8:30 PM', '9:15 PM']
  },
  {
    id: 'sg-3',
    name: 'Scaled by Ah Hua Kelong',
    tagline: 'Direct-from-kelong sea bass, roasted chili crab mantou & smoked clam butter',
    cuisine: 'Coastal Kelong Seafood & Farm-to-Table',
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
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=80'
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
    popularDishes: ['Chili Crab Dip with Mantou', 'Whole Roasted Kelong Seabass', 'Black Pepper Crab', 'Lala Clams in Shaoxing Broth', 'Salted Egg Prawns'],
    menuHighlights: [
      {
        id: 'sg-m301',
        name: 'Signature Chili Crab Dip with Crispy Mantou',
        description: 'Hand-picked Sri Lankan mud crab flesh simmered in thick sweet-savory egg drop chili reduction, fried bun dippers.',
        price: 32,
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      },
      {
        id: 'sg-m302',
        name: 'Whole Roasted Kelong Seabass',
        description: 'Crispy skin seabass with fermented black bean butter, charred spring onions, and Shaoxing wine jus.',
        price: 42,
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      }
    ],
    reviews: [
      {
        id: 'sg-r301',
        author: 'Nadia Rahim',
        authorAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
        role: 'Verified Foodie · 68 Reviews',
        rating: 5,
        date: '5 days ago',
        text: 'You skip the messy crab cracking without losing a single drop of that legendary chili crab sauce magic. The crispy mantou buns are piping hot.',
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
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'spice',
    vibes: ['Intimate Counter', 'High Energy', 'Craft Cocktails', 'Date Night'],
    dietary: ['Vegetarian Tasting Menu Available', 'Dairy Adaptations'],
    hasOutdoor: false,
    michelinGuide: true,
    chefHighlight: 'Chef Mano Thevar draws on his Penang Tamil heritage reimagined through progressive European technique.',
    lat: 1.2804,
    lng: 103.8428,
    mapX: 32,
    mapY: 66,
    phone: '+65 6904 0838',
    hours: [
      { days: 'Tue - Sat', time: '5:30 PM – 11:00 PM' },
      { days: 'Sun - Mon', time: 'Closed' }
    ],
    popularDishes: ['Crispy Pork Vindaloo Roti', 'Spiced Lobster Madras Bisque', 'Chettinad Lamb Rump', 'Heirloom Tomato Rasam', 'Bone Marrow Parotta'],
    menuHighlights: [
      {
        id: 'sg-m401',
        name: 'Crispy Pork Vindaloo Roti',
        description: 'Tender spiced pulled pork vindaloo wrapped in flaky layered parotta with tangy pickled shallots.',
        price: 32,
        image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281781?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      },
      {
        id: 'sg-m402',
        name: 'Spiced Lobster Madras Curry Bisque',
        description: 'Charred rock lobster tail, Madras curry leaf butter emulsion, heirloom tomato rasam reduction.',
        price: 54,
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      }
    ],
    reviews: [
      {
        id: 'sg-r401',
        author: 'Devika Nair',
        authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        role: 'Verified Epicure · Singapore',
        rating: 5,
        date: 'Last weekend',
        text: 'The pork vindaloo roti is nothing short of legendary. The acidity cuts cleanly through the rich savory crunch. Sit at the chef counter!',
        favoriteDish: 'Crispy Pork Vindaloo Roti'
      }
    ],
    availableSlots: ['6:00 PM', '7:30 PM', '8:45 PM']
  },
  {
    id: 'sg-5',
    name: '328 Katong Laksa Heritage',
    tagline: 'Rich coconut milk broth, sun-dried dried shrimp sambal & charcoal grilled mackerel otah',
    cuisine: 'Iconic Katong Laksa & Straits Snacks',
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
      'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'peranakan',
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
    popularDishes: ['Famous Katong Laksa', 'Charcoal Grilled Mackerel Otah', 'Fried Chicken Wings', 'Nasi Lemak Packet', 'Prawn Laksa'],
    menuHighlights: [
      {
        id: 'sg-m501',
        name: 'Signature Katong Laksa Bowl',
        description: 'Cut thick rice noodles in rich spiced coconut gravy, sweet cockles, fishcake slices, peeled prawns, and house chili sambal.',
        price: 9.5,
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      },
      {
        id: 'sg-m502',
        name: 'Charcoal-Grilled Mackerel Otah',
        description: 'Fresh Spanish mackerel paste pounded with kaffir lime leaves and chili rempah, grilled in fresh banana leaf.',
        price: 3.5,
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
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
        text: 'The broth has that legendary balance of rich santan and gritty dried shrimp. No chopsticks needed—slurping it with the porcelain spoon is the only way.',
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
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'wokhei',
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
    popularDishes: ['Signature Poached Chicken Rice', 'Crispy Beancurd with Mayo Dip', 'Imperial Pork Ribs', 'Poached Chinese Spinach with Trio Eggs'],
    menuHighlights: [
      {
        id: 'sg-m601',
        name: 'Signature Poached Chicken (Half / Whole)',
        description: 'Tender grain-fed chicken with delicate gelatin skin, drizzled with fragrant soy sauce and sesame broth.',
        price: 22,
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      },
      {
        id: 'sg-m602',
        name: 'Fragrant Chicken Fat Rice with Trio Sauce',
        description: 'Gleaming jasmine rice infused with chicken stock, pandan, and ginger. Served with garlic chili, dark soy, and minced ginger.',
        price: 2.2,
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
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
    availableSlots: ['12:00 PM', '1:30 PM', '6:00 PM', '7:30 PM', '8:45 PM']
  },
  {
    id: 'my-1',
    name: 'Dewakan Ember Lab',
    tagline: 'Indigenous Malaysian terroir, fermented tempoyak, wild jungle herbs & wood-fired duck',
    cuisine: 'Modern Malaysian & Indigenous Foraged',
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
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'grill',
    vibes: ['Fine Dining Terroir', 'Skyline Panorama', 'Low Intervention Wine', 'Celebratory'],
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
    popularDishes: ['Aged Perak Duck with Bario Rice', 'Kulim Nut River Prawn Broth', 'Tempoyak Fermented Sambal', 'Torched Sabah Lobster'],
    menuHighlights: [
      {
        id: 'my-m1',
        name: 'Aged Perak Duck with Bario Rice & Tempoyak',
        description: 'Dry-aged duck breast grilled over rambutan wood, fermented durian emulsion, highland black Bario rice porridge.',
        price: 92,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      },
      {
        id: 'my-m2',
        name: 'Langit Kulim Nut Broth with River Prawn',
        description: 'Truffle-scented jungle kulim nut dashi, charred Sabah giant river prawn, torch ginger flower oil.',
        price: 46,
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      }
    ],
    reviews: [
      {
        id: 'my-r1',
        author: 'Melissa Cheah',
        authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
        role: 'Southeast Asia Gastronomy Editor',
        rating: 5,
        date: '4 days ago',
        text: 'A profound culinary love letter to Malaysia. The kulim nut broth possesses the earthy soul of white truffles yet belongs purely to these ancient rainforests.',
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
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'wine',
    vibes: ['Vintage Shophouse', 'Vinyl Jazz', 'Open Courtyard', 'Natural Wine'],
    dietary: ['Vegetarian Tapas', 'Biodynamic Wine Curation'],
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
    popularDishes: ['Cincalok Fried Chicken Wings', 'Hand-Cut Duck Confit Aglio Olio', 'Pet-Nat Natural Wine', 'Kerabu Prawn Salad', 'Charred Kailan with Salted Fish'],
    menuHighlights: [
      {
        id: 'my-m201',
        name: 'Cincalok Fried Chicken Wings',
        description: 'Malacca fermented krill paste marinade, calamansi lime glaze, crispy curry leaf dust.',
        price: 18,
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      },
      {
        id: 'my-m202',
        name: 'Hand-Cut Duck Confit Aglio Olio',
        description: 'Shredded slow-cooked duck, salted mustard greens, bird\'s eye chili, toasted garlic oil.',
        price: 24,
        image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281781?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      }
    ],
    reviews: [
      {
        id: 'my-r201',
        author: 'Arlo Lim',
        authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        role: 'Kuala Lumpur Sommelier',
        rating: 5,
        date: 'Last Friday',
        text: 'The sun filtering through the courtyard leaves while sipping a chilled Jura pet-nat is an essential KL weekend ritual.',
        favoriteDish: 'Cincalok Fried Chicken Wings'
      }
    ],
    availableSlots: ['6:00 PM', '7:00 PM', '8:15 PM', '9:30 PM']
  },
  {
    id: 'my-3',
    name: 'George Town Heritage Roastery',
    tagline: 'Artisan charcoal-toasted pandan kaya brioche, soft kampung eggs & single-origin Liberica',
    cuisine: 'Artisan Heritage Kopitiam & Single-Origin Roastery',
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
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'cafe',
    vibes: ['Heritage Shophouse', 'Morning Light', 'Specialty Coffee', 'Warm Nostalgia'],
    dietary: ['Vegetarian Friendly', 'Dairy & Oat Milk Options'],
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
    popularDishes: ['Charcoal-Grilled Pandan Kaya Toast Set', 'Johor Liberica Cold Drip', 'Soft Boiled Kampung Eggs', 'Traditional Kopi O', 'Hainanese Butter Cake'],
    menuHighlights: [
      {
        id: 'my-m301',
        name: 'Charcoal-Grilled Pandan Kaya Toast Set',
        description: 'Thick sourdough toast grilled over binchotan, cultured French butter slab, house pandan kaya, two soft kampung eggs.',
        price: 8,
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
        isMustTry: true,
        dietaryBadge: 'Vegetarian'
      },
      {
        id: 'my-m302',
        name: 'Johor Liberica Cold Drip with Condensed Coconut Milk',
        description: 'Single-origin Malaysian Liberica cold brewed for 18 hours, notes of jackfruit, dark chocolate, and creamy coconut.',
        price: 7,
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
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
        text: 'The smoke on the bread combined with the silky pandan kaya is pure nostalgia elevated to fine art. Dipping the crunchy toast into the dark soy pepper eggs is bliss.',
        favoriteDish: 'Charcoal-Grilled Pandan Kaya Toast Set'
      }
    ],
    availableSlots: ['8:30 AM', '10:00 AM', '11:30 AM', '2:00 PM']
  },
  {
    id: 'my-4',
    name: 'Firesmith Hearth & Satay Bar',
    tagline: 'Mangrove wood-fired dry-aged wagyu skewers, charred pineapple sambal & craft cocktails',
    cuisine: 'Contemporary Charcoal Satay & Open Flame Hearth',
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
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'grill',
    vibes: ['Open Hearth Fires', 'Tropical Cocktails', 'Lively Patio', 'Social Dining'],
    dietary: ['Halal Beef & Poultry', 'Gluten-Free Peanut Sauce'],
    hasOutdoor: true,
    michelinGuide: false,
    chefHighlight: 'Skewers grilled over a 2-meter custom mangrove charcoal pit with house lemongrass oil basting.',
    lat: 3.1319,
    lng: 101.6705,
    mapX: 70,
    mapY: 42,
    phone: '+60 3-2287 4000',
    hours: [
      { days: 'Tue - Sun', time: '5:00 PM – 11:30 PM' }
    ],
    popularDishes: ['Dry-Aged Wagyu Satay Kerbau', 'Charcoal Grilled Satay Skewers', 'Smoked Bone Marrow & Roti Canai', 'Peanut Dip', 'Charred Pineapple Sambal'],
    menuHighlights: [
      {
        id: 'my-m401',
        name: 'Dry-Aged Wagyu Satay Kerbau (6 skewers)',
        description: 'Prime wagyu marinated in galangal, shallots, and palm sugar, grilled over mangrove charcoal with warm chunky peanut dip.',
        price: 36,
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      },
      {
        id: 'my-m402',
        name: 'Smoked Bone Marrow & Roti Canai',
        description: 'Charred bone marrow topped with crispy shallots, curry leaf gremolata, and flaky handmade roti canai.',
        price: 28,
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
        isMustTry: true
      }
    ],
    reviews: [
      {
        id: 'my-r401',
        author: 'Daniel Fernandez',
        authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        role: 'KL Lifestyle & Food Critic',
        rating: 5,
        date: '4 days ago',
        text: 'The best satay execution in Bangsar. The wagyu fat renders over the glowing embers creating that intoxicating lemongrass caramelized glaze.',
        favoriteDish: 'Dry-Aged Wagyu Satay'
      }
    ],
    availableSlots: ['6:15 PM', '7:30 PM', '8:45 PM', '10:00 PM']
  }
];

export const INITIAL_USER_PROFILE: UserTasteProfile = {
  name: 'Tanway S.',
  handle: '@tanways',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  level: 'Curator Level 4 · Straits Epicure',
  palateScore: 98,
  dna: [
    { label: 'Wok Hei & Charcoal Embers', percentage: 96, description: 'Drawn to intense high-heat smokiness, charred hor fun, and binchotan grills' },
    { label: 'Rempah & Wild Fermentation', percentage: 94, description: 'Obsessed with Buah Keluak, stone-ground aromatics, and fermented tempoyak' },
    { label: 'Tropical Acid & Calamansi', percentage: 90, description: 'Sambal belacan balances, Assam pedas broths, and torch ginger flower accents' },
    { label: 'Natural Wines in Shophouses', percentage: 86, description: 'Prefers pet-nats and orange skin-contact wines in restored heritage spaces' }
  ],
  stamps: [
    { cuisine: 'Modern Peranakan', count: 18, icon: '🌺', accent: '#F4511E' },
    { cuisine: 'Wok Hei Zi Char', count: 24, icon: '🥢', accent: '#FF6E40' },
    { cuisine: 'KL Indigenous Grill', count: 12, icon: '🥩', accent: '#10B981' },
    { cuisine: 'Penang Kopitiam', count: 15, icon: '☕', accent: '#ac2d00' },
    { cuisine: 'Kelong Coastal Seafood', count: 11, icon: '🦀', accent: '#b02e00' }
  ]
};

export const TASTING_GUIDES = [
  {
    id: 'guide-1',
    title: 'The Great Telok Ayer & Amoy Shophouse Trail',
    subtitle: 'Heritage architectural facades harboring cutting-edge Peranakan rempah & natural wine cellars',
    spotsCount: 5,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    curator: 'By Savor Singapore Editorial · 4 min read'
  },
  {
    id: 'guide-2',
    title: 'KL Petaling Street & Chinatown Renaissance',
    subtitle: 'From century-old kopitiams to natural wine cellars and modern Malaysian open hearths',
    spotsCount: 6,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    curator: 'By Savor Malaysia Curators · 5 min read'
  },
  {
    id: 'guide-3',
    title: 'Midnight Wok Hei & Heritage Claypot Crawl',
    subtitle: 'Moonlight hor fun, sizzling coffee ribs, and charcoal-fired claypots after 10 PM',
    spotsCount: 6,
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
    curator: 'By Straits Food Hunters · 3 min read'
  }
];
