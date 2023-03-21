export interface DataParfum {
  id: string;
  slug: string;
  name: string;
  brand: string;
  type: string;
  concentrate: string;
  notes:
    | string
    | {
        top: string;
        middle: string;
        base: string;
      };
  longevity: string;
  sillage: string;
  projection: string;
  image: string;
  link: string;
}

export interface Brands {
  id: string;
  name: string;
  slug: string;
}

// export interface DataByCategory {
//   [key: string]: DataMakan[];
// }
