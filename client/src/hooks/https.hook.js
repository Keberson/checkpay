import {useState, useCallback} from 'react';
import {useAuth} from "./auth.hook";

export const useHTTP = (callback, deps) => {
    const {logout} = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setIsLoading(true);

        try {
            if (body) {
                body = JSON.stringify(body);
                headers['Content-Type'] = 'application/json';
            }

            const response = await fetch(url, {method, body, headers});
            const data = await response.json();

            if (response.status === 401 || data.isDeleted) {
                logout();
            }

            if (!response.ok) {
                throw new Error(data.message || 'Something goes wrong');
            }

            setIsLoading(false);

            return data;
        } catch (e) {
            setIsLoading(false);
            setError(e.message);
            throw e;
        }
    }, [logout]);

    const clearError = useCallback(() => setError(null), []);

    return { isLoading, request, error, clearError };
};