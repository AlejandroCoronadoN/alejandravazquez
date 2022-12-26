import React from 'react';
import {GlobalState} from './context';

// importing MyRouts where we located all of our theme
import MyRouts from './routers/routes'

function App() {
  return (
    <GlobalState>
      <div>
        <MyRouts />
      </div>
    </GlobalState>
  );
}

export default App;
