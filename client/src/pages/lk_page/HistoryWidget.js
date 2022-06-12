import React, {useContext, useCallback, useEffect, useState} from "react";
import PropTypes from "prop-types";
import './historyWidget.css'
import Title from "../../components/Title";
import HistoryWidgetRow from "./HistoryWidgetRow";
import {useHTTP} from "../../hooks/https.hook";
import {AuthContext} from "../../context/auth.context";
import {Spinner} from "react-spinner-animated";
import {toast} from "react-toastify";

function HistoryWidget({isNeedRefresh, setIsNeedRefresh}) {
    const {token, userID} = useContext(AuthContext);
    const {request, isLoading} = useHTTP();
    const [data, setData] = useState([]);

    const deleteRow = useCallback(async (id) => {
        setData(data.filter(value => value.id !== id));
        const res = await request(`/api/lk/history/${userID}`, 'DELETE', {idRow: id}, {
            authorization: `Bearer ${token}`
        });
        toast.success(res.message);
        setIsNeedRefresh(true);
    }, [request, token, data, userID, setIsNeedRefresh]);

    const getUserHistory = useCallback(async () => {
        setData((await request(`/api/lk/history/${userID}`, 'GET', null, {
            authorization: `Bearer ${token}`
        })).data);
        setIsNeedRefresh(false);
    }, [request, token, userID, setIsNeedRefresh]);

    useEffect(() => {
        getUserHistory();
    }, [getUserHistory, isNeedRefresh]);

    return (
        <div className="main__widget widget_history">
            {
                isLoading ?
                    <Spinner center={false} width="25%" height="25%"/>
                    :
                    <>
                        <div className="history__titles-wrapper">
                            <Title classes="history__title" value="Date" size={5}/>
                            <Title classes="history__title" value="Type" size={5}/>
                            <Title classes="history__title" value="Category" size={5}/>
                            <Title classes="history__title" value="Amount" size={5}/>
                            <Title classes="history__title" value="Comment" size={5}/>
                        </div>
                        {data.map(((value) => {
                            return <HistoryWidgetRow key={value.id} data={value} deleteMethod={deleteRow}/>
                        }))}
                    </>
            }
        </div>
    );
}

HistoryWidget.propTypes = {
    isNeedRefresh: PropTypes.bool.isRequired,
    setIsNeedRefresh: PropTypes.func.isRequired
}

export default HistoryWidget;
