import React from 'react';
import './App.css';

import Header from './header';
import NavigationRoutes from './navigationRoutes';
// import AdvertisementPanelAndStats from './silversys/advertisementPanel';

function App() {
  return (
    <div>
      <Header />
      <>
        {/* <div className="dashboard-header">
          <AdvertisementPanelAndStats />
        </div> */}
        <NavigationRoutes />
      </>
    </div>
  );
}

export default App;
