export type AutocompleteHotel = {
  id: number;
  name: string;
};

export type AutocompleteHotels = AutocompleteHotel[];

export type Hotel = {
  id: number;
  name: string;
  address: string;
  photo: string;
};

export type Options = {
  showName: boolean;
  fontColor: string;
  showBgImage: boolean;
  showAddress: boolean;
};
