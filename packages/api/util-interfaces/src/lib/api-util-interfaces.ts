export interface Game {
  id:          number;
  name:        string;
  description: string;
  image:       string;
  price:       string;
  rating:      number;
  releaseDate: string;
  developer:   string;
  publisher:   string;
  tags:        string[];
}
