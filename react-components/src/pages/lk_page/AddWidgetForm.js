import React, {useState} from "react";

function AddWidgetForm() {
    const categoryList = ['Different', 'Transport', 'Food and Products', 'Clothes and Shoes', 'Entertainments', 'HCS'];

    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [comment, setComment] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        // TODO(keberson): отправка данных на сервер
    }

    return (
        <form className="home-add__form" onSubmit={submitForm}>
            <div className="home-add__input-wrapper">
                <input type="date"
                       className="home-add__input"
                       placeholder="Date"
                       value={date}
                       onChange={(e) => setDate(e.target.value) }
                       required
                />
            </div>
            <div className="home-add__input-wrapper">
                <select className="home-add__input"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                >
                    <option disabled>Category</option>
                    { categoryList.map((value => {
                        return <option key={value} value={value}>{value}</option>
                    }))}
                </select>
            </div>
            <div className="home-add__input-wrapper">
                <input type="number"
                       className="home-add__input"
                       placeholder="Amount"
                       min={0}
                       value={amount}
                       onChange={(e) => setAmount(e.target.value)}
                       required
                />
            </div>
            <div className="home-add__input-wrapper">
                <input type="text"
                       className="home-add__input"
                       placeholder="Comment"
                       value={comment}
                       onChange={(e) => setComment(e.target.value)}
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

export default AddWidgetForm;
