import { Action } from '@ngrx/store'
import { People } from '../models/people.model'
import * as PeopleActions from '../store/people.action'

const initialState: People = {
    id: 0,
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
        case PeopleActions.GET_PEOPLEDATA:
            return [...state, action.payload]
        case PeopleActions.GET_PEOPLEITEM:
            return state;
        default:
            return state;
    }
}