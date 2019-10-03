import React from 'react';

const ExpenseForm = ({ 
    charge,
    amount,
    handleCharge,
    handleAmount,
    handleSubmit,
    edit
 }) => {

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                <label htmlFor='expense'></label>
                    <input
                        className='charge'
                        id='charge'
                        name='charge'
                        value={charge}
                        placeholder='e.g. rent, car payment'
                        type='text'
                        onChange={handleCharge}
                    />

                    <label htmlFor='amount'></label>
                    <input 
                        className='amount'
                        id='amount'
                        name='amount'
                        placeholder='e.g. $100'
                        type='number'
                        value={amount}
                        onChange={handleAmount}
                    />
                </div>
                <button type='submit' className='btn add__btn'>
                    {edit ? 'edit' : 'Add Expense'}
                </button>
            </form>
        </div>
    )
}

export default ExpenseForm;