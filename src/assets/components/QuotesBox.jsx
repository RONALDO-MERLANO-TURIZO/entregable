import React from 'react';

const QuotesBox = ({card, card2}) => {
    return (
    <div className="App" style={{color: colors[ChangeColors]}}>
        <i class='bx bxs-quote-alt-left bx-lg'>
        </i>
        <div className="text">
         <h4>{quotes[isChange].quote}<p>{quotes[isChange].author}</p></h4>
        </div>
        <div>
         <i class='bx bx-chevrons-right bx-lg' onClick={alert}></i>
        </div>
        
    </div>
    );
};

export default QuotesBox;