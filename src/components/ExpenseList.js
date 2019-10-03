import React from 'react';

import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ 
    expenses,
    handleDelete, 
    handleEdit,
    clearItems 
}) => {
    return (
        <>
        <ul>
            {expenses.map(expense => {
                return (
                    <div className='expense-item'>
                        <ExpenseItem
                            key={expense.id} 
                            expense={expense}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                            clearItems={clearItems}
                        />
                    </div>
                )
            })}
        </ul>
        {expenses.length > 0 && (
            <button onClick={clearItems} className=' btn clear-btn'>
                Clear Expenses
            </button>
        )}   
        </>
    )
}

export default ExpenseList;