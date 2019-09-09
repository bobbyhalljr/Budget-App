import React from 'react';
import { MdDelete, MdCreate } from 'react-icons/md'

const ExpenseItem = ({ 
    expense: { id, charge, amount },
    handleDelete,
    handleEdit
 }) => {
    return (
        <>
        <li className='item'>
            <div className='info'>
                <span className='expense'>{charge}</span>
                <span className='amount'>{amount}</span>
            </div>
            <div>
                <button 
                    className='btn edit-btn'
                    aria-label='edit-button'
                    onClick={() => handleEdit(id)}
                >
                    <MdCreate />
                </button>
                <button 
                    className=' btn delete-btn'
                    aria-label='delete button'
                    onClick={() => handleDelete(id)}    
                >
                    <MdDelete />
                </button>
            </div>
        </li>
        </>
    )
}

export default ExpenseItem;