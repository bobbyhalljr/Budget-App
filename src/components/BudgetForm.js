import React from 'react';

const BudgetForm = () => {

    return (
        <div>
            <form>
                <input
                    className='value'
                    id='value'
                    name='value'
                    placeholder='Amount'
                    type='number'
                 />

                <input 
                    className='desc'
                    id='desc'
                    name='desc'
                    placeholder='Description'
                    type='text'
                />
                <button>Add</button>
            </form>
        </div>
    )
}

export default BudgetForm;