import React from 'react';
import './App.scss';

import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';
// import './components/FooterComponents/Footer';

const App = () => {
  return (
    <div className="main-content">
      <ImageThumbnail />
      <div>
        <HeaderContainer />
        <CardContainer />
        <Footer />
      </div>
    </div>
  );
};

export default App;
