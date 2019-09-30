import axios from 'axios';
import { addNewPaintingCategory } from '../actions/index';

const getPictureCategories = () => {
    return (dispatch, getState) => {
        // return axios.get('some/url')
        //     .then(response => dispatch(addNewPaintingCategory({id: 5, name: "From Thunk"})));
        dispatch(addNewPaintingCategory({id: 5, name: "From Thunk"}))
    }
};

export default getPictureCategories;
