import React from 'react';
import Overview from './overview';
import NavBar from './navbar';

const Dashboard = () => {
    return (
        <>
        <div className='parent-div'>
        <NavBar/>
            <Overview/>
        </div>
        </>
    );
}

export default Dashboard;
