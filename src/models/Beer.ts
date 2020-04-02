export interface Beer {
  id: number;
  name?: string;
  tagline?: string;
  description?: string;
  image?: string;
  abv?: number;
  ibu?: number;
  src?: number;
  ingredients?: object;
  food?: object[];
}
