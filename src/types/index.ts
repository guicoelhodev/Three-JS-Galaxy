export type TCarouselContent = TCarouselItem[];

export type TCarouselItem = {
  bg: string[];
  color: {
    primary: string;
    secondary: string;
  }
  image: string;
  data: {
    title: string;
    description: string;
    link: string;
  }
}