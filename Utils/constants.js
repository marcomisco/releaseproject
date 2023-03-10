export const API_URL = 'https://api.rawg.io/api/games';
export const KEY_URL = '?key=2516c1a213f748d4b2f1ef169998a412';

export const initialFilters = {
  page: 1,
  search: '',
  ordering: '',
  platforms: '4',
};

export const sort = [
  { title: 'Relevance', dataValue: '' },
  { title: 'High Rating', dataValue: '-rating' },
  { title: 'Low Rating', dataValue: 'rating' },
  { title: 'New Release', dataValue: '-released' },
  { title: 'Old Release', dataValue: 'released' },
];

export const platforms = [
  { title: 'PC', dataValue: '4' },
  { title: 'PlayStation', dataValue: '18,167,16' },
  { title: 'XBox', dataValue: '1,186,14' },
  { title: 'Nintendo', dataValue: '7,8,9' },
  { title: 'MacOS', dataValue: '5' },
];
