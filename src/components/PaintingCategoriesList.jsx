import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PaintingCategory from './PaintingCategory';
import { addNewPaintingCategory, removePaintingCategory } from '../actions';

const PaintingCategoriesList = ({paintingCategories, addCategory, removeCategory}) => {
    const addNewCategory = () => {
        const dummyCategories = ['trees', 'deserts', 'lakes', 'sunsets', 'forests', 'snow', 'cottages', 'cities'];
        const rand = dummyCategories[Math.floor(Math.random() * dummyCategories.length)];

        const newCategory = {
            id: paintingCategories.length + 1,
            name: rand
        };

        addCategory(newCategory);
    };

    const removeExistingCategory = categoryId => removeCategory(categoryId);

    return <React.Fragment>
        <ul>
            {
                paintingCategories.map((category, index) =>
                    <PaintingCategory key={index}
                                      category={category}
                                      removeCategory={removeExistingCategory}
                    />
                )
            }
        </ul>
        <button className="add-btn" onClick={addNewCategory}>Add category</button>
    </React.Fragment>;
};

PaintingCategoriesList.defaultProps = {
    paintingCategories: []
};

PaintingCategoriesList.propTypes = {
    paintingCategories: PropTypes.array,
    addCategory: PropTypes.func,
    removeCategory: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
    return {
        paintingCategories: state.paintingsCategoriesList
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addCategory: category => dispatch(addNewPaintingCategory(category)),
        removeCategory: categoryId => dispatch(removePaintingCategory(categoryId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PaintingCategoriesList);
