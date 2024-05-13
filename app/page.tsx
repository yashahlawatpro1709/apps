import React from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Main2 from './components/Main2';
import Searchbox from './components/Searchbox';
import Connect1 from './components/Connect1';
import Applications from './components/Applications';
import Data1 from './components/Data1';
import Large from './components/Large';
import Enterprise2 from './components/Enterprise2';


const Page = () => {
  return (
    <div>
     <Navbar/>
     <Main/>
     <Main2/>
     <Searchbox/>
     <Connect1/>
     <Applications/>
     <Data1/>
     <Large/>
     <Enterprise2/>
    </div>
  );
};

export default Page;
