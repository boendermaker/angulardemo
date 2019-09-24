import { People } from '../models/people.model';

export interface AppState {
  readonly people: People[];
}