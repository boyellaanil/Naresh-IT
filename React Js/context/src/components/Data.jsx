import React,{useContext} from 'react'
import { themeContext } from './context/theme/ThemeContext';

const Data = () => {
    let {theme,toggleTheme}=useContext(themeContext);
  return (
    <div>
        <button onClick={toggleTheme}>
          {theme?"light":"dark"}
          </button>
    </div>
  );
};

export default Data