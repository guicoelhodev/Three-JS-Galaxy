

export type ITools = 'typescript' | 'react' | 'nextjs' | 'reactQuery' | 'tailwindcss' | 'nuxt'; 
export type ICarouselItem = {
  title: string;
  description: string;
  imagePath: string;
  link: string;
  languages: ITools[];
}