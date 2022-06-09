import React, {useState, useContext} from "react";
import PropTypes from "prop-types";
import Title from "../../components/Title";
import AddWidgetForm from "./AddWidgetForm";
import {toast} from "react-toastify";
import {AuthContext} from "../../context/auth.context";
import {useHTTP} from "../../hooks/https.hook";
import {Spinner} from "react-spinner-animated";

function AddWidget({setIsNeedRefresh}) {
    const {token, userID} = useContext(AuthContext);
    const {request, isLoading} = useHTTP();
    const typeList = [{
        id: 1,
        title: 'Income',
        specialClass: ''
    }, {
        id: 2,
        title: 'Expenditure',
        specialClass: ''
    }, {
        id: 3,
        title: 'Planned',
        specialClass: ''
    }]

    const [form, setForm] = useState({
        type: 'Income',
        date: '',
        category: '',
        amount: '',
        comment: undefined
    });

    typeList.map((value) => {
        if (value.title === form.type) {
            value.specialClass = 'add__title_active';
        } else {
            value.specialClass = '';
        }

        return value;
    });

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            const data = await request(`/api/lk/add/${userID}`, 'POST', {...form}, {
                authorization: `Bearer ${token}`
            });

            setIsNeedRefresh(true);
                toast.info(data.message);
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div className="home-main__widget home-widget_add">
            {isLoading ?
                <Spinner center={false} width="25%" height="25%"/> :
                <>
                    <div className="home-add__titles-wrapper">
                        {typeList.map((value) => {
                            return (
                                <span key={value.title}
                                      className={`home-add__title ${value.specialClass}`}
                                      onClick={() => setForm({...form, type: value.title})}
                                >
                            <Title classes="home-add__title" value={value.title} size={1}/>
                        </span>);
                        })}
                        <span className="home-add__expand-wrapper"
                              onClick={() => {
                                  typeList.map((value) => {
                                      if (value.title === form.type) {
                                          setForm({...form, type: typeList[(value.id + 1) % typeList.length].title})
                                      }

                                      return value;
                                  });
                              }}
                        >
                    <svg className="home-add__expand" width="19" height="8" viewBox="0 0 19 8" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.4834 1L9.74176 6L18.0001 1" stroke="#233446" strokeWidth="2"/>
                    </svg>
                </span>
                    </div>
                    <div className="home-add__inputs-wrapper">
                        <AddWidgetForm form={form} setForm={setForm} submitForm={submitForm}/>
                    </div>
                </>
            }

        </div>
    );
}

AddWidget.propTypes = {
    setIsNeedRefresh: PropTypes.func.isRequired
}

export default AddWidget;
