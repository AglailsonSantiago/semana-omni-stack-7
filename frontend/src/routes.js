import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Feed from './pages/Feed';
import New from './pages/New';

function RoutesFunction(){
    return (
        <Routes>
            <Route path='/' exact element={<Feed/>}/>
            <Route path='/new' exact element={<New/>}/>
        </Routes> 
    );
}

export default RoutesFunction;