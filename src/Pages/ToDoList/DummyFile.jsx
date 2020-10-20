import React from 'react';

const Dummy = () => {
    return(
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <div style={{ width: '30%' }}>
                Add task:
                <input type='text'/>
                <div><input type='checkbox' /> Shopping</div>
                <div><input type='checkbox' /> Buy vegetables</div>
                <div><input type='checkbox' /> Call John</div>
                <div><input type='checkbox' /> Check Report</div>
                
            </div>
        </div>
        
    );
}

export default Dummy;