import React from 'react';
import Approval from './approval';
import NavBar from './navbar';

const Approvalpage = () => {
    return (
        <>
        <div className='parent-div'>
            <NavBar/>
            <Approval/>
        </div>
        </>
    );
}

export default Approvalpage;
