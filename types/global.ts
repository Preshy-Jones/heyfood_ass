export type Tag = {
  _id: string;
  title: string;
  iconUrl: string;
};

export type Restaurant = {
  _id: string;
  title: string;
  tags: Tag[];
  ratings: {
    rating: number;
  }[];
  sectionTag: string;
};
