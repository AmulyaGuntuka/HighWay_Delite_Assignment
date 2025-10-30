export interface Slot {
  _id: string;
  date: string;
  time: string;
  capacity: number;
  price: number;
}

export interface Experience {
  _id: string;
  title: string;
  shortDescription: string;
  description: string;
  images: string[];        // ✅ plural array
  location: string;
  tags: string[];          // ✅ added
  price: number;          // optional, since slot has price
  slots: Slot[];
}
