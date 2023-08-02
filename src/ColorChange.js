import React, { useState } from 'react'
import Color from 'color';

const ColorChange = () => {

    const [colorName, setColorName] = useState('')
    const [isTextColorWhite, setIsTextColorWhite] = useState(false);

    const getHexValue = () => {
        if (colorName) {
            try {
                return Color(colorName).hex();
            } catch (error) {
                return '';
            }
        }
        return '';
    };

    const colorbox = {
        width: '200px',
        height: '200px',
        margin: '100px',
        position: 'absolute',
        top: '-2%',
        left: '35%',
        // transform: 'translate(-50%, -50%)',
        backgroundColor: colorName,
        color: isTextColorWhite ? 'white' : 'black',
        border: '2px solid black',
        boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.3)', 
        
    };

    const handleButtonChange = () => {
        setIsTextColorWhite(!isTextColorWhite);
    };

    return (
   <div >
    <h1>SWAK's COLOR CHANGER APP</h1>
      <form action="colorchange"  className='colorform' onSubmit={(e) => e.preventDefault()} >
           
           <div style={colorbox}>
               {colorName ? (
                   <div>
                       <div>{colorName}</div>
                       <div>{getHexValue()}</div>
                   </div>
               ) : (
                   'Empty Value'
               )}
           </div><br></br><br></br>
           <input type="text"
               autoFocus
               id="changecolor"
               placeholder='Add color name'
               value={colorName}
               onChange={(e) => setColorName(e.target.value)} /><br></br>
           <br></br>

           <button onClick={() => handleButtonChange()}> Toggle Text Color </button>
       </form>
   </div>
       

    )
}

export default ColorChange