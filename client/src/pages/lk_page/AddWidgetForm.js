import React from "react";
import PropTypes from "prop-types";

function AddWidgetForm({form, setForm, submitForm, type}) {
    const categoryList = ['Different', 'Transport', 'Food and Products', 'Clothes and Shoes', 'Entertainments', 'HCS'];

    return (
        <form className="home-add__form" onSubmit={submitForm}>
            <div className="home-add__input-wrapper">
                {type !== 'Expenditure' &&
                    <input type="month"
                           className="home-add__input"
                           placeholder="Date"
                           value={form.date}
                           onChange={(e) => setForm({...form, date: e.target.value})}
                           required
                    />

                }
                {type === 'Expenditure' &&
                    <input type="date"
                           className="home-add__input"
                           placeholder="Date"
                           value={form.date}
                           onChange={(e) => setForm({...form, date: e.target.value})}
                           required
                    />}
            </div>
            <div className="home-add__input-wrapper">
                <select className="home-add__input"
                        value={form.category}
                        onChange={(e) => setForm({...form, category: e.target.value})}
                        required
                        disabled={type !== 'Expenditure'}
                >
                    <option disabled>Category</option>
                    {categoryList.map((value => {
                        return <option key={value} value={value}>{value}</option>
                    }))}
                </select>
            </div>
            <div className="home-add__input-wrapper">
                <input type="number"
                       className="home-add__input"
                       placeholder="Amount"
                       min={0}
                       value={form.amount}
                       onChange={(e) => setForm({...form, amount: e.target.value})}
                       required
                />
            </div>
            <div className="home-add__input-wrapper">
                <input type="text"
                       className="home-add__input"
                       placeholder="Comment"
                       value={form.comment}
                       onChange={(e) => setForm({...form, comment: e.target.value})}
                />
            </div>
            <div className="home-add__button-wrapper">
                <input type="submit"
                       className="home-add__button button"
                       value="Add"
                />
            </div>
        </form>
    );
}

AddWidgetForm.propTypes = {
    form: PropTypes.objectOf(PropTypes.any).isRequired,
    setForm: PropTypes.func.isRequired,
    submitForm: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired
}

export default AddWidgetForm;
