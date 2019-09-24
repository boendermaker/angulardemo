import { Action } from '@ngrx/store'
import { People } from '../models/people.model'
import * as PeopleActions from '../store/people.action'

const initialState: People = {
    name: '', 
    height: 0, 
    mass: 0, 
    hair_color: '',
    skin_color: '', 
    eye_color: '', 
    birth_year: '', 
    gender: '', 
    homeworld: '', 
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    created: new Date(),
    edited: new Date(),
    url: '',
}

export function reducer(state: People[] = [initialState], action: PeopleActions.Actions) {

    switch(action.type) {
        case PeopleActions.SET_PEOPLE:
            return action.payload;
        default:
            return state;
    }
}