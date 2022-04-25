import React from 'react';
import ReactDOM from 'react-dom';
import Lineupenemy from './Lineupenemy';
import Lineup from './Lineup';
import Battlearena from './Battlearena';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/battlearena' element={<Battlearena />} />
      </Routes>

      <Link to="/battlearena"> Go to battle arena</Link>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

{/* // If you want to start measuring performance in your app, pass a function */}
{/* // to log results (for example: reportWebVitals(console.log)) */}
{/* // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals */}
