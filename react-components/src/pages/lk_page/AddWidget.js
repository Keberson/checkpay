import React, {useState} from "react";
import Link from "../../components/Link";
import Title from "../../components/Title";
import AddWidgetForm from "./AddWidgetForm";

function AddWidget() {
    const typeList = [{
        id: 1,
        title: 'Income',
        link: '#',
        specialClass: ''
    }, {
        id: 2,
        title: 'Expenditure',
        link: '#',
        specialClass: ''
    }, {
        id: 3,
        title: 'Planned',
        link: '#',
        specialClass: ''
    }]

    const [typeAdd, setTypeAdd] = useState('Income');

    typeList.map((value) => {
        if (value.title === typeAdd) {
            value.specialClass = 'add__title_active';
        } else {
            value.specialClass = '';
        }
    });

    return (
        <div className="home-main__widget home-widget_add">
            <div className="home-add__titles-wrapper">
                { typeList.map((value) => {
                    return (
                        <Link key={value.title}
                              classes="home-add__title"
                              specialClasses={value.specialClass}
                              link={value.link}
                              onClickCallback={() => setTypeAdd(value.title)}
                        >
                            <Title classes="home-add__title" value={value.title} size={1}/>
                        </Link>);
                })}
                <Link classes="home-add__expand-wrapper"
                      link='#'
                      onClickCallback={() => {
                          typeList.map((value) => {
                              if (value.title === typeAdd) {
                                  setTypeAdd(typeList[(value.id + 1) % typeList.length].title);
                              }
                          });
                      }}
                >
                    <svg className="home-add__expand" width="19" height="8" viewBox="0 0 19 8" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.4834 1L9.74176 6L18.0001 1" stroke="#233446" strokeWidth="2"/>
                    </svg>
                </Link>
            </div>
            <div className="home-add__inputs-wrapper">
                <AddWidgetForm />
            </div>
        </div>
    );
}

export default AddWidget;
