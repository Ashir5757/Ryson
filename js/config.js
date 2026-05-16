/**
 * ============================================================
 *  MONAL VIEW GUEST HOUSE — CONTENT CONFIGURATION
 * ============================================================
 *  Edit this file to update ALL text, images, links & data.
 *  Images go in the images/ subfolders (hero, rooms, gallery, about).
 * ============================================================
 */
const SITE = {

  brand: {
    name: "Monal View",
    subtitle: "Guest House",
    initials: "MV",
    phone: "0311 1234567",
    phone2: "051 1234567",
    email: "info@monalviewguesthouse.com",
    address: "Murree Road, Rawalpindi",
    mapLink: "https://maps.google.com/?q=Murree+Road+Rawalpindi",
    social: {
      facebook:  "https://facebook.com",
      instagram: "https://instagram.com",
      twitter:   "https://twitter.com",
      youtube:   "https://youtube.com",
    },
  },

  nav: [
    { label: "Home",      href: "#home" },
    { label: "Rooms",     href: "#rooms" },
    { label: "Amenities", href: "#amenities" },
    { label: "Gallery",   href: "#gallery" },
    { label: "Nearby",    href: "#nearby" },
    { label: "About Us",  href: "#about" },
    { label: "Contact",   href: "#contact" },
  ],

  hero: {
    tag:       "Premium Stay 1 Minute from Monal",
    headline:  "Luxury Comfort at a Prime Rawalpindi Location",
    location:  "Located on Murree Road, Rawalpindi",
    badge:     "1 MIN\nTO MONAL",
    // Place images in images/hero/
    images: [
      "images/hero/hero1.png",
      "images/hero/hero2.png",
      "images/hero/hero3.png",
    ],
    btn1: { label: "Book Now",      href: "#booking" },
    btn2: { label: "Explore Rooms", href: "#rooms" },
  },

  rooms: {
    tag:   "FEATURED ROOMS",
    title: "Elegant Rooms. Exceptional Comfort.",
    // Place images in images/rooms/
    items: [
      { name: "Deluxe Room",    price: "PKR 9,500 / night",  desc: "Stylish and cozy room with modern amenities for a relaxing stay.", img: "images/rooms/deluxe.png",    link: "#rooms" },
      { name: "Executive Room", price: "PKR 12,500 / night", desc: "Spacious room with premium interiors and city views.",             img: "images/rooms/executive.png", link: "#rooms" },
      { name: "Family Suite",   price: "PKR 16,500 / night", desc: "Perfect for families with extra space and added comfort.",         img: "images/rooms/family.png",    link: "#rooms" },
      { name: "Premium Suite",  price: "PKR 20,500 / night", desc: "Luxury suite with separate lounge and elegant amenities.",         img: "images/rooms/premium.png",   link: "#rooms" },
    ],
  },

  amenities: {
    tag: "PREMIUM AMENITIES",
    items: [
      { svg: "wifi",    label: "Free Wi-Fi" },
      { svg: "users",   label: "Family Rooms" },
      { svg: "car",     label: "Car Parking" },
      { svg: "clock",   label: "24/7 Service" },
      { svg: "bell",    label: "Room Service" },
      { svg: "wind",    label: "Heating / AC" },
      { svg: "eye",     label: "Scenic Terrace" },
      { svg: "shield",  label: "Security" },
    ],
  },

  about: {
    tag:  "ABOUT US",
    headline: "Premium Stay in the Heart of Rawalpindi",
    desc: "Monal View Guest House offers a refined blend of comfort, convenience and warm hospitality. Located on Murree Road, Rawalpindi, we are just 1 minute away from Monal — placing you close to the city's best dining, attractions and business hubs.",
    // Place image in images/about/
    img: "images/about/about.png",
    highlights: [
      { svg: "map-pin", title: "Prime Location",   text: "1 minute to Monal on Murree Road, Rawalpindi." },
      { svg: "bed",     title: "Luxury Comfort",   text: "Well-appointed rooms with premium amenities." },
      { svg: "road",    title: "Easy Access",      text: "Direct access from Murree Road." },
      { svg: "smile",   title: "Guest Experience", text: "24/7 service with a focus on your comfort." },
    ],
  },

  gallery: {
    tag: "GALLERY",
    btnLabel: "View Full Gallery",
    // Place images in images/gallery/
    images: [
      { src: "images/gallery/g1.png", alt: "Hotel Exterior" },
      { src: "images/gallery/g2.png", alt: "Lobby" },
      { src: "images/gallery/g3.png", alt: "Deluxe Room" },
      { src: "images/gallery/g4.png", alt: "Executive Room" },
      { src: "images/gallery/g5.png", alt: "Family Suite" },
      { src: "images/gallery/g6.png", alt: "Premium Suite" },
      { src: "images/gallery/g7.png", alt: "Restaurant" },
      { src: "images/gallery/g8.png", alt: "Terrace View" },
    ],
  },

  nearby: {
    tag:     "OUR LOCATION",
    headline: "Close to Everything That Matters",
    desc:    "Stay just 1 minute from Monal and enjoy easy access to Rawalpindi's finest places.",
    badge:   "1 min to Monal · Murree Road",
    mapLink: "https://maps.google.com/?q=Murree+Road+Rawalpindi",
    mapBtn:  "Get Directions",
    distances: [
      { time: "1 min",   label: "Monal\nMurree Road" },
      { time: "5 mins",  label: "Bahria Town\nPhase 7" },
      { time: "10 mins", label: "Saddar\nRawalpindi" },
      { time: "15 mins", label: "Rawalpindi\nRing Road" },
      { time: "20 mins", label: "Jinnah Park\nRawalpindi" },
    ],
  },

  testimonials: {
    tag:   "GUESTS LOVE US",
    title: "What Our Guests Say",
    items: [
      { text: "\"Excellent stay! The location is unbeatable — just 1 minute to Monal. Rooms are clean, staff is courteous and the service is outstanding!\"", name: "Ali Raza",    city: "Lahore",     stars: 5 },
      { text: "\"Perfect place for family stay. Spacious rooms, peaceful environment, and very easy access from Murree Road. Highly recommended!\"",           name: "Sara Khan",   city: "Islamabad",  stars: 5 },
      { text: "\"A premium experience in Rawalpindi. Everything was superb from cleanliness to hospitality. Will definitely stay again.\"",                     name: "Usman Malik", city: "Karachi",    stars: 5 },
    ],
  },

  footer: {
    tagline: "Premium Stay 1 Minute from Monal",
    copyright: "© 2025 Monal View Guest House. All Rights Reserved.",
    usefulLinks: [
      { label: "Terms & Conditions",  href: "#" },
      { label: "Privacy Policy",      href: "#" },
      { label: "Cancellation Policy", href: "#" },
      { label: "FAQs",                href: "#" },
    ],
  },
};
