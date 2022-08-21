import React, { useState } from 'react';

const FunctionComponent = () => {

    const [count, setCount] = useState(0);

    const handleButtonClick = () => {  
        console.log(`Function component.Button clicked! Incrementing counter.`);
        setCount(count+1);
      };      

    const handleScroll = () => {  

        if (count > 0) 
        {
            console.log(`Function component. Scrolling! Reset counter to zero.`);
            setCount(0);
        }

        return () => window.removeEventListener("scroll", handleScroll);
      };      

      window.addEventListener("scroll", handleScroll, { passive: true });

    return (
        <div style={{ height: '20vh' }} onScroll={handleScroll}>
          <div>
            <div>Function component. Click count: {count}</div>
            <button
                  type="button"
                  onClick={handleButtonClick}
                >
                  {"Click me to increase the counter!"}
            </button>
            <div>Scroll the page to reset the counter</div>
          </div>
        </div>
      );};

export default FunctionComponent;