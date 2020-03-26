import React from 'react';

export const ThemeContext = React.createContext({
  name: 'default',
  changeName: (name: string) => {}
});
