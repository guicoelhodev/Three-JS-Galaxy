import { ITools } from "@/types/types";

type ILanguages = { [Key in ITools]: { icon: string; title: string; id: ITools } };

export const languages: ILanguages = {
  react: {
    icon: "logos:react",
    title: 'React JS',
    id: 'react'
  },
  typescript: {
    icon: "devicon:typescript",
    title: 'Typescript',
    id: 'typescript'
  },
  threejs: {
    icon: "skill-icons:threejs-dark",
    title: 'Three JS',
    id: 'threejs'
  },
  graphql: {
    icon: "logos:graphql",
    title: 'GraphQL',
    id: 'graphql'
  },
  tailwindcss: {
    icon: "devicon:tailwindcss",
    title: 'Tailwind',
    id: 'tailwindcss'
  },
  reactQuery: {
    icon: "logos:react-query-icon",
    title: 'React Query',
    id: 'reactQuery'
  },
  nodejs: {
    icon: "vscode-icons:file-type-node",
    title: 'Node JS',
    id: 'nodejs'
  },
  firebase: {
    icon: "logos:firebase",
    title: 'Firebase',
    id: 'firebase'
  },
  supabase: {
    icon: "devicon:supabase",
    title: 'Supabase',
    id: 'supabase'
  },
  nextjs: {
    icon: "teenyicons:nextjs-solid",
    title: 'Next JS',
    id: 'nextjs'
  },
  nuxt: {
    icon: "skill-icons:nuxtjs-dark",
    title: 'Nuxt JS',
    id: 'nuxt'
  }
}
