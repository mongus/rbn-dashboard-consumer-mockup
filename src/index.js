import React, {Suspense} from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import Spinner from "./components/Spinner";
import {BrowserRouter} from "react-router-dom";

render(
    <Suspense fallback={<Spinner/>}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>,
    document.getElementById('root')
);
