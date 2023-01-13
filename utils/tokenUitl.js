import {get, set} from 'js-cookie';

export const getToken = () => get('token');

export const setToken = token => set('token', token);
