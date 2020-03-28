import React from 'react';

const Scroll = (scroll) => {
    return (
        <div style={{overflowY:"scroll", border: "1px solid black", height: "800px"}}>
            {scroll.children}
        </div>
    );


};

export default Scroll;