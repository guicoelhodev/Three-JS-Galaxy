import { TCarouselContent } from '@/types'

export const projectList: TCarouselContent = [
  {
    bg: ['#e6f3ff', '#739df0', '#28348c'],
    color: {
      primary: '#28348c',
      secondary: '#28348c',
    },
    image: new URL('@/assets/png/react_music.png', import.meta.url).href,
    data: {
      link: 'https://react-music-xi.vercel.app',
      title: 'React Music',
      description:
        'This project is a web app that simulates a music player. This project was created with react and typescript, using vite.js as bundler tool and styled components, using deezer API',
    },
  },
  {
    bg: ['#E5F0D9', '#C1EAC3', '#9AD9A5'],
    color: {
      primary: '#529801',
      secondary: '#6FCF0E',
    },
    image: new URL('@/assets/png/bulbassaur.png', import.meta.url).href,
    data: {
      link: 'https://pokedex-v3.vercel.app',
      title: 'Pokedex',
      description:
        'A pokedex created with pokeApi and typescript. This project was created with react and typescript, using vite.js as bundler tool and styled components with react Query',
    },
  },
  {
    bg: ['#e4efff', '#90bbf9', '#1873ff'],
    color: {
      primary: '#1873ff',
      secondary: '#1e5ebb',
    },
    image: new URL('@/assets/png/discord.png', import.meta.url).href,
    data: {
      link: 'https://discord-clone-guicoelhodev.vercel.app/',
      title: 'Discord UI - clone',
      description:
        'This project was created with vue, using nuxt 3 and tailwind. For animation was used gsap',
    },
  },
  {
    bg: ['#ffeeee', '#ff8d8c', '#ff5454'],
    color: {
      primary: '#ff5454',
      secondary: '#c52b2a',
    },
    image: new URL('@/assets/png/take_a_note.png', import.meta.url).href,
    data: {
      link: 'https://take-a-note-client.vercel.app',
      title: 'Take a note',
      description:
        'This project was created based on notion app, was created with nuxt 3 and tailwind. In backend was used supabase with graphQL',
    },
  },
  {
    bg: ['#dbfff2', '#7cffd0', '#1fb07c'],
    color: {
      primary: '#1fb07c',
      secondary: '#24bb84',
    },
    image: new URL('@/assets/png/social_dev.png', import.meta.url).href,
    data: {
      link: 'https://social-dev-sandy.vercel.app/',
      title: 'Social Dev',
      description:
        'This project was created to simulate a real social network. This project was created with react and typescript.This project ended up being discontinued. But You can access it by logging in with your LinkedIn or GitHub. ',
    },
  },
]
