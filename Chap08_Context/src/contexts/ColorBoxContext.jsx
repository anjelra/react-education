import { createContext } from 'react';

const ColorBoxContext = createContext({
  color: '',
  contextName: 'ColorBox Context 01'
});

export default ColorBoxContext;