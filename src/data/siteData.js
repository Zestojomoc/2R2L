export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'marilaque', label: 'Marilaque' },
  { id: 'spot', label: 'Our Spot' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
]

export const groupInfo = {
  name: '2R2L',
  tagline: 'TOO RISKY TO LEAN',
  intro:
    'It started with a shared passion for motorcycles and grew into something more—a brotherhood built on the road. We ride not only because we share the same hobby, but because every ride gives us a chance to build friendships, create memories, and form connections that go beyond motorcycles.',
  story:
    'Different people, different bikes, one road. Every ride brings us together, strengthens the bond, and reminds us that it is not just about where we are going—it is about who we ride with.',
  mission: '',
}

export const stats = [
  { label: 'Established', value: '2026' },
  { label: 'Members', value: '82+' },
  { label: 'Rides', value: '100+' },
  { label: 'Distance', value: '∞' },
]

export const marilaqueStops = [
  {
    id: 'checkpoint-1',
    name: 'Antipolo',
    label: '01',
    description:
      'The route begins here with the rolling approach into the Marilaque climb, where the group settles into the rhythm of the ride.',
    note: 'The start of the road, the build-up, and the first real pull of the mountain run.',
  },
  {
    id: 'checkpoint-2',
    name: 'Inarawan',
    label: '02',
    description:
      'A classic stretch on the route where the road tightens, the view opens up, and the ride starts to feel cinematic.',
    note: 'A favorite stop for quick checks, photos, and the first real mountain feel.',
  },
  {
    id: 'checkpoint-3',
    name: 'Kawa Falls',
    label: '03',
    description:
      'One of the more memorable points along the route, known for the scenery, the bends, and the sense of riding deeper into the mountain.',
    note: 'A scenic checkpoint where the road and the landscape become the story.',
  },
  {
    id: 'checkpoint-4',
    name: 'Baticulan / Pililia',
    label: '04',
    description:
      'This part of the route carries the long, flowing mountain energy and is often where the group settles into pace and trust.',
    note: 'The road slows down, the rhythm sharpens, and the ride becomes a shared experience.',
  },
  {
    id: 'checkpoint-5',
    name: 'Marilaque End',
    label: '05',
    description:
      'The finish stretch brings the full journey together—long bends, strong concentration, and the sense of having conquered the route as a group.',
    note: 'The road ends, but the memory keeps going.',
  },
]

export const galleryCategories = [
  { id: 'units', label: 'UNITS' },
  { id: 'tambike', label: 'TAMBIKE' },
  { id: 'crossmeet', label: 'CROSSMEET' },
]

const buildGallerySection = (categoryKey, categoryLabel, startIndex, length) =>
  Array.from({ length }, (_, index) => {
    const imageNumber = startIndex + index

    return {
      id: `${categoryKey}-${String(imageNumber).padStart(2, '0')}`,
      title: `${categoryLabel} ${String(imageNumber).padStart(2, '0')}`,
      category: categoryLabel,
      image: `/images/gallery-${String(imageNumber).padStart(2, '0')}.jpg`,
    }
  })

export const gallerySections = {
  units: buildGallerySection('units', 'Unit', 1, 10),
  tambike: [
    { id: 'tambike-01', title: 'Tambike 01', category: 'Tambike', image: '/images/tambike1.jpg' },
    { id: 'tambike-02', title: 'Tambike 02', category: 'Tambike', image: '/images/tambike2.jpg' },
    { id: 'tambike-03', title: 'Tambike 03', category: 'Tambike', image: '/images/tambike3.jpg' },
    { id: 'tambike-04', title: 'Tambike 04', category: 'Tambike', image: '/images/tambike4.jpg' },
  ],
  crossmeet: [
    { id: 'crossmeet-01', title: 'Crossmeet 01', category: 'Crossmeet', image: '/images/C1.jpg' },
    { id: 'crossmeet-02', title: 'Crossmeet 02', category: 'Crossmeet', image: '/images/C2.jpg' },
    { id: 'crossmeet-03', title: 'Crossmeet 03', category: 'Crossmeet', image: '/images/C3.jpg' },
    { id: 'crossmeet-04', title: 'Crossmeet 04', category: 'Crossmeet', image: '/images/C4.jpg' },
    { id: 'crossmeet-05', title: 'Crossmeet 05', category: 'Crossmeet', image: '/images/C5.jpg' },
    { id: 'crossmeet-06', title: 'Crossmeet 06', category: 'Crossmeet', image: '/images/C6.jpg' },
    { id: 'crossmeet-07', title: 'Crossmeet 07', category: 'Crossmeet', image: '/images/C7.jpg' },
    { id: 'crossmeet-08', title: 'Crossmeet 08', category: 'Crossmeet', image: '/images/C8.jpg' },
    { id: 'crossmeet-09', title: 'Crossmeet 09', category: 'Crossmeet', image: '/images/C9.jpg' },
    { id: 'crossmeet-10', title: 'Crossmeet 10', category: 'Crossmeet', image: '/images/C10.jpg' },
    { id: 'crossmeet-11', title: 'Crossmeet 11', category: 'Crossmeet', image: '/images/C11.jpg' },
    { id: 'crossmeet-12', title: 'Crossmeet 12', category: 'Crossmeet', image: '/images/C12.jpg' },
    { id: 'crossmeet-13', title: 'Crossmeet 13', category: 'Crossmeet', image: '/images/C13.jpg' },
  ],
}

export const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61590643385237', platform: 'facebook' },
]

export const contactInfo = [
  {
    label: 'Email',
    value: 'Add your email',
    href: '#',
  },
  {
    label: 'Phone',
    value: 'Add your contact number',
    href: '#',
  },
  {
    label: 'Meetup Spot',
    value: 'Add your usual venue',
    href: '#',
  },
]
