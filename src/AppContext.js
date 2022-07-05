import { useState, createContext } from 'react';

const AppContext = createContext([{}, () => {}]);

const AppProvider = (props) => {
  const [state, setState] = useState({
    title: 'Welcome',
  });
  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
