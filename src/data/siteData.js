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
  'All',
  'Group Rides',
  'Marilaque',
  'Night Rides',
  'Tambike',
  'Events',
]

export const galleryItems = [
  ...Array.from({ length: 25 }, (_, index) => ({
    title: `Unit ${String(index + 1).padStart(2, '0')}`,
    category: 'The Units',
    image: `/images/gallery-${String(index + 1).padStart(2, '0')}.jpg`,
  })),
]

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
