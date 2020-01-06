import React, { useEffect, useState } from 'react';

const App = props => {
  const [state, setState] = useState(props);
  const {name, price} = state;

  // return()(描画された)後によばれる
  useEffect(() => {
    console.log('あああああ');
  });

  useEffect(() => {
    console.log('いいいいい');
  }, []);

  const renderPeriod = () => {
    console.log('kakaka');
    return '。';
  };

  return (
    <>
      <p>現在の{state.name}は、{state.price}円です{renderPeriod()}</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input value={state.name} onChange={e => setState({...state, name: e.target.value})}/>
    </>
  );
};

App.defaultProps = {
  name: 'ももち',
  price: 1000
};

export default App;
