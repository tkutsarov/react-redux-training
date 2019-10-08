import { combineReducers } from 'redux';

import paintingsCategoriesList from './paintingsCategoriesList';
import categoriesId from './categoriesId';


const rootReducer = combineReducers({
    paintingsCategoriesList,
    categoriesId
});

export default rootReducer;
