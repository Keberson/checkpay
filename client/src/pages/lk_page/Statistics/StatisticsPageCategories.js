import React from "react";
import PropTypes from "prop-types";
import Title from "../../../components/Title";
import CategoriesElement from "./CategoriesElement";
import Link from "../../../components/Link";
import StatisticsPageAnalyticsRow from "./StatisticsPageAnalyticsRow";

const categoryList = [
    {
        id: 1,
        name: 'Different',
        isActive: false
    }, {
        id: 2,
        name: 'Transport',
        isActive: false
    }, {
        id: 3,
        name: 'Food and Products',
        isActive: false
    }, {
        id: 4,
        name: 'Clothes and Shoes',
        isActive: false
    }, {
        id: 5,
        name: 'Entertainments',
        isActive: false
    }, {
        id: 6,
        name: 'HCS',
        isActive: false
    }
]

function StatisticsPageCategories({ activeCategory, setActiveCategory, expenses }) {
    categoryList.map((value => {
        value.isActive = value.name === activeCategory;
        return value;
    }));

    return (
        <div className="statistics-widget__row statistics-row_categories">
            <Title classes="statistics-widget__title" value="Categories" size={2}/>
            <div className="statistics-categories-wrapper">
                <ul className="statistics-categories">
                    {categoryList.map((value => {
                        return <CategoriesElement key={value.name}
                                                  category={value}
                                                  onClickCallback={setActiveCategory}/>
                    }))}
                </ul>
                <Link classes="statistics-categories__arrow" link="#" onClickCallback={() => {
                    categoryList.map((value) => {
                        if (value.name === activeCategory) {
                            setActiveCategory(categoryList[(value.id) % categoryList.length].name)
                        }

                        return value;
                    })
                }}
                >
                    <svg className="statistics-categories__arrow-icon" width="19" height="8" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L9.25836 6L17.5167 1" stroke="#233446" strokeWidth="2"/>
                    </svg>
                </Link>
            </div>
            <div className="statistics-analysis-wrapper">
                <StatisticsPageAnalyticsRow type="Expenses" value={expenses} />
            </div>
        </div>
    );
}

StatisticsPageCategories.propTypes = {
    activeCategory: PropTypes.string.isRequired,
    setActiveCategory: PropTypes.func.isRequired,
    expenses: PropTypes.number.isRequired
};

export default StatisticsPageCategories;
