import React from 'react';
import Homepage from '../components/Homepage/Homepage';
import NewsDetail from '../components/NewsPages/NewsDetail';

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Homepage />,
    },
    {
        path: "/newsdetail",
        exact: true,
        main: () => <NewsDetail/>
    }
]