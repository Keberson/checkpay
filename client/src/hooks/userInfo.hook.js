import {useCallback, useState} from "react";
import {useHTTP} from "./https.hook";

export const useUserInfo = (token, userID) => {
    const {request} = useHTTP();

    const [userInfo, setUserInfo] = useState({
        name: '',
        surname: '',
        country: '',
        username: '',
        email: '',
        password: ''
    });

    const getUserInfo = useCallback(async () => {
        const data = (await request(`/api/lk/info/${userID}`, 'GET', null, {
            authorization: `Bearer ${token}`
        })).data;

        setUserInfo({
            name: (data.name) ? data.name : 'No data available',
            surname: (data.surname) ? data.surname : 'No data available',
            country: (data.country) ? data.country : 'No data available',
            username: data.username,
            email: data.email,
            password: ''
        })

        return userInfo;
    }, [request, token, userID]);

    return {userInfo, setUserInfo, getUserInfo};
};