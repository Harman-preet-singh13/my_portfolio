import React, {useState} from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import "./style.css"
import Button from '@mui/material/Button';

const BacktoTop = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <div className='center'>
    <Button className='backtotop'>
     <KeyboardArrowUpIcon onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} />
    </Button>
    </div>
  );
}
  
export default BacktoTop;