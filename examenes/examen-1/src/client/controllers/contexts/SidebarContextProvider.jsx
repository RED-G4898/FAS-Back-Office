import React from 'react';

const SidebarContext = React.createContext();

const SidebarContextProvider = props => {
  const [options, setOptions] = React.useState([]);

  const value = {
    options,
    setOptions
  };

  return (
    <SidebarContext.Provider value={value}>
      {props.children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarContextProvider };