import React from 'react';
import './App.css';

import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
// import './components/FooterComponents/Footer';

const App = () => {
  return (
    <div className="main-content">
      <ImageThumbnail />
      <div>
        <HeaderContainer />
        <CardContainer />
      </div>
    </div>
  );
};

export default App;
