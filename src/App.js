import React, { useState } from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Splash from './Pages/Splash';
import Editor from './Pages/Editor';

function app(){
    return (
      <>
        <Routes>
          <Route 
          path = '/' 
          element = {<Splash />} 
          />
          <Route 
          path = '/editor' 
          element = {<Editor />} />
        </Routes>
      </>
    );
  }

export default app;
