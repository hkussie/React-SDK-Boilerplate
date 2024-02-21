import React from 'react';
import VINDecoder from './components/VINDecoder';
import Years from './components/Years';

function App() {
  return (
    <div>
      <h2>Vehicle Information</h2>
      <VINDecoder vin={process.env.REACT_APP_VIN_EXAMPLE} />
      <Years options={{ make: 'toyota', model: 'Camery' }} />
    </div>
  );
}

export default App;
