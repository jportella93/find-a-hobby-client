const demoHobbies = [
  {
    _id: 'demo-archery',
    name: 'Archery',
    description: 'Learn the basics of shooting safely and consistently.',
    links: { getStarted: 'https://www.usarchery.org/get-started' },
    pictures: {
      thumbnail: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=60',
      big: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=60',
    },
    tags: [
      { name: 'money', votes: 1, average: 15 },
      { name: 'fit', votes: 1, average: 55 },
      { name: 'creative', votes: 1, average: 30 },
    ],
  },
  {
    _id: 'demo-bread',
    name: 'Sourdough',
    description: 'Bake your first loaf and keep a starter alive.',
    links: { getStarted: 'https://www.kingarthurbaking.com/learn/guides/sourdough' },
    pictures: {
      thumbnail: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=600&q=60',
      big: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=1200&q=60',
    },
    tags: [
      { name: 'money', votes: 1, average: 10 },
      { name: 'fit', votes: 1, average: 10 },
      { name: 'creative', votes: 1, average: 80 },
    ],
  },
  {
    _id: 'demo-bouldering',
    name: 'Bouldering',
    description: 'Climb short routes; improve strength and technique.',
    links: { getStarted: 'https://www.rei.com/learn/expert-advice/bouldering.html' },
    pictures: {
      thumbnail: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=600&q=60',
      big: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=1200&q=60',
    },
    tags: [
      { name: 'money', votes: 1, average: 5 },
      { name: 'fit', votes: 1, average: 85 },
      { name: 'creative', votes: 1, average: 10 },
    ],
  },
  {
    _id: 'demo-guitar',
    name: 'Guitar',
    description: 'Start with chords, rhythm, and a simple practice routine.',
    links: { getStarted: 'https://www.justinguitar.com/' },
    pictures: {
      thumbnail: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=600&q=60',
      big: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=1200&q=60',
    },
    tags: [
      { name: 'money', votes: 1, average: 35 },
      { name: 'fit', votes: 1, average: 10 },
      { name: 'creative', votes: 1, average: 55 },
    ],
  },
  {
    _id: 'demo-gardening',
    name: 'Gardening',
    description: 'Grow herbs or greens in a small space.',
    links: { getStarted: 'https://www.rhs.org.uk/advice/beginners-guide' },
    pictures: {
      thumbnail: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=600&q=60',
      big: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=60',
    },
    tags: [
      { name: 'money', votes: 1, average: 20 },
      { name: 'fit', votes: 1, average: 35 },
      { name: 'creative', votes: 1, average: 45 },
    ],
  },
  {
    _id: 'demo-photography',
    name: 'Photography',
    description: 'Composition, light, and a few easy editing basics.',
    links: { getStarted: 'https://www.adobe.com/creativecloud/photography/discover/photography-basics.html' },
    pictures: {
      thumbnail: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=600&q=60',
      big: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1200&q=60',
    },
    tags: [
      { name: 'money', votes: 1, average: 45 },
      { name: 'fit', votes: 1, average: 10 },
      { name: 'creative', votes: 1, average: 45 },
    ],
  },
  {
    _id: 'demo-running',
    name: 'Running',
    description: 'Build consistency with an easy, beginner-friendly plan.',
    links: { getStarted: 'https://www.nhs.uk/live-well/exercise/couch-to-5k-week-by-week/' },
    pictures: {
      thumbnail: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&w=600&q=60',
      big: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&w=1200&q=60',
    },
    tags: [
      { name: 'money', votes: 1, average: 5 },
      { name: 'fit', votes: 1, average: 90 },
      { name: 'creative', votes: 1, average: 5 },
    ],
  },
  {
    _id: 'demo-drawing',
    name: 'Drawing',
    description: 'Start with shapes, shading, and daily prompts.',
    links: { getStarted: 'https://drawabox.com/' },
    pictures: {
      thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=60',
      big: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=60',
    },
    tags: [
      { name: 'money', votes: 1, average: 20 },
      { name: 'fit', votes: 1, average: 5 },
      { name: 'creative', votes: 1, average: 75 },
    ],
  },
  {
    _id: 'demo-cycling',
    name: 'Cycling',
    description: 'Explore your city and improve endurance.',
    links: { getStarted: 'https://www.britishcycling.org.uk/knowledge/article/izn20151123-Starting-Out---Getting-started-0' },
    pictures: {
      thumbnail: 'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=600&q=60',
      big: 'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=1200&q=60',
    },
    tags: [
      { name: 'money', votes: 1, average: 10 },
      { name: 'fit', votes: 1, average: 80 },
      { name: 'creative', votes: 1, average: 10 },
    ],
  },
  {
    _id: 'demo-coding',
    name: 'Coding',
    description: 'Build tiny projects and learn by shipping.',
    links: { getStarted: 'https://www.freecodecamp.org/learn/' },
    pictures: {
      thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&q=60',
      big: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=60',
    },
    tags: [
      { name: 'money', votes: 1, average: 70 },
      { name: 'fit', votes: 1, average: 5 },
      { name: 'creative', votes: 1, average: 25 },
    ],
  },
];

export default demoHobbies;
