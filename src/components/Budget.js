import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = (props) => {
    const { budget } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input
                required='required'
                type='number'
                id='budget'
                onChange={(event) => budget(event.target.value)}>
            </input>
        </div>
    );
};
export default Budget;