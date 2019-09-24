import {
    ADD_PAINTING_CATEGORY,
    REMOVE_PAINTING_CATEGORY
} from '../constants/actionTypes';

const paintingsCategoriesList = (state = [], action) => {
    switch(action.type) {
        case ADD_PAINTING_CATEGORY:
            return [
                ...state,
                action.payload.category
            ];
        case REMOVE_PAINTING_CATEGORY:
            return state.filter((category, index) => category.id !== action.payload.categoryId);
        default:
            return state;
    }
};

export default paintingsCategoriesList;
