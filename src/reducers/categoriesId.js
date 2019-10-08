import {
    ADD_PAINTING_CATEGORY,
} from '../constants/actionTypes';

const categoriesId = (state = 6, action) => {
    switch(action.type) {
        case ADD_PAINTING_CATEGORY:
            return state + 1;
        default:
            return state;
    }
};

export default categoriesId;
