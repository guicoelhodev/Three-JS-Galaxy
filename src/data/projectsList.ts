import { TCarouselContent } from '@/types'

export const projectList: TCarouselContent = [
 
  {
    bg: ['#e6f3ff', '#739df0', '#28348c'],
    color: {
      primary: '#28348c', secondary: '#28348c'
    },
    image: new URL('@/assets/png/react_music.png', import.meta.url).href,
    data: {
      link: 'https://react-music-xi.vercel.app',
      title: 'React Music',
      description: 'This project is a web app that simulates a music player. This project was created with react and typescript, using vite.js as bundler tool and styled components, using deezer API'
    }
  },
 {
    bg: ['#E5F0D9', '#C1EAC3', '#9AD9A5'],
    color: {
      primary: '#529801', secondary: '#6FCF0E'
    },
    image: new URL('@/assets/png/bulbassaur.png', import.meta.url).href,
    data: {
      link: 'https://pokedex-v3.vercel.app',
      title: 'Pokedex',
      description: 'A pokedex created with pokeApi and typescript. This project was created with react and typescript, using vite.js as bundler tool and styled components with react Query'
    }
  },
  {
    bg: ['#e4efff', '#90bbf9', '#1873ff'],
    color: {
      primary: '#1873ff', secondary: '#1e5ebb'
    },
    image: new URL('@/assets/png/discord.png', import.meta.url).href,
    data: {
      link: 'https://discord-clone-guicoelhodev.vercel.app/',
      title: 'Discord UI - clone',
      description: 'This project was created with vue, using nuxt 3 and tailwind. For animation was used gsap'
    }
  }
]