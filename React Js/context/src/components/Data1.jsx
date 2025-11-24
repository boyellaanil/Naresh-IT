import React,{useContext} from 'react'
import { themeContext } from './context/theme/ThemeContext';

const Data1 = () => {
    let {theme,dark,light,toggleTheme}=useContext(themeContext);
  return (
    <div style={theme ? dark : light}>
        <button onClick={toggleTheme}>
          {theme?"light":"dark"}
          </button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Eveniet quidem sapiente, excepturi atque alias quod impedit saepe 
            aperiam porro sint voluptate in vitae ab ipsa, dolor corrupti tempore aliquid debitis.</p>
    </div>
  );
};

export default Data1