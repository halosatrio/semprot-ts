export interface DataParfum {
  id: string;
  slug: string;
  name: string;
  brand: string;
  type: string;
  concentrate: string;
  notes: {
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
  [key: string]: string | undefined;
}

// export interface DataByCategory {
//   [key: string]: DataMakan[];
// }
