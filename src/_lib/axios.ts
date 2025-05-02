'use client';

import axios from 'axios';
/*
base do axios para consumir alguma API
*/
export const api = axios.create({
    baseURL: process.env.ALGUMA_COISA,
});
