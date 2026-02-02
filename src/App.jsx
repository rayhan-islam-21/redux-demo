

//step 1: install redux and react-redux and react thunk
//step 2: constant define
//step 3: action create
//step 4: reducer create
//step 5: store create
//step 6: provide the store to app
//step 7: use the store in component
import React from 'react';
import { useSelector } from 'react-redux';

const App = () => {

  const store = useSelector(state => state);
  console.log(store);
                                                                                                                                                                                                                                                
  

  return (
    <div>
      <h1>React Redux App</h1>
    </div>
  );
};
``
export default App;    n                                                                                                                                                                             