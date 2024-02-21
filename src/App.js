import React from 'react';
import VINDecoder from './components/VINDecoder';

function App() {
  return (
    <div>
      <h2>Vehicle Information</h2>
      <VINDecoder vin={process.env.REACT_APP_VIN_EXAMPLE} />
    </div>
  );
}

export default App;
