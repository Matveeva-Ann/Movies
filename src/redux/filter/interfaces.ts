import { Movie } from '../../types/movie';

export enum FilterType {
  Containing = 'Containing',
  Contextual = 'Contextual',
}

export interface Filter {
  type: FilterType;
  fieldName: keyof Movie;
  value: string | [];
}
