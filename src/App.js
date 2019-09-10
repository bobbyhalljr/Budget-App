import React, { useState, useEffect } from 'react';

import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Alert from './components/Alert';
import uuid from 'uuid/v4';

import './App.css';

// const initialExpenses = [
//   { id: uuid(), charge: 'rent', amount: 700 },
//   { id: uuid(), charge: 'car payment', amount: 400 },
//   { id: uuid(), charge: 'credit card bill', amount: 1200 }
// ]

const initialExpenses = localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : [];

function App() {
  
  // All expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses);
  // single expense
  const [charge, setCharge] = useState('')
  // Single amount
  const [amount, SetAmount] = useState('');
  // Alert
  const [alert, setAlert] = useState({ show: false })
  // Edit
  const [edit, setEdit] = useState(false);
  // Id
  const [id, setId] = useState(0)

  useEffect(() => {
    console.log('Called')

    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

  // ***************** Functionality **********************

  // Add Charge
  const handleCharge = e => {
    setCharge(e.target.value)
  }

  // Add Amount
  const handleAmount = e => {
    let amount = e.target.value;
    if(amount === ''){
      SetAmount(amount)
    } else {
      SetAmount(parseInt(amount));
    }
  }

  // Handle Alert
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text })
    setTimeout(() => {
      setAlert({ show: false })
    }, 5000)
  }

  // Handle Submit
  const handleSubmit = e => {
    e.preventDefault();
    if(charge !== '' && amount > 0){
      if(edit){
        let tempExpenses = expenses.map(item => {
          return item.id === id ? {...item, charge, amount} : item;
        })
        setExpenses(tempExpenses)
        setEdit(false)
      } else {
        const singleExpense = { id: uuid(), charge, amount };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: 'success', text: 'item added' })
      }

      // set charge to empty string
      setCharge('')

      // set amount back to zero
      SetAmount('')
    } else {
      handleAlert({ type: 'danger', text: 'charge can not be empty, and amount must be bigger than zero' })
    }
  }

  // Handle Delete
  const handleDelete = id => {
    let tempExpenses = expenses.filter(item => item.id !== id);
    setExpenses(tempExpenses);
    handleAlert({ type: 'danger', text: 'Item Deleted' })
  }

  // Clear All Items
  const clearItems = id => {
    setExpenses([]);
  } 

  // Handle Edit
  const handleEdit = id => {
    let expense = expenses.find(item => item.id === id);
    let { charge, amount } = expense;
    setCharge(charge);
    SetAmount(amount);
    setEdit(true);
    setId(id);
  }

  return (
    <>
    {alert.show && <Alert
                    type={alert.type}
                    text={alert.text} />}
      <div className="App">
        <h1>Budget App</h1>
        <div className='total'>
          <h2>Total Spending: </h2>
          <h3 className='total'>
            $ {expenses.reduce((acc, curr) => {
                  return (acc += curr.amount);
                }, 0)}
          </h3>
        </div>
        <div className='expense-form'>
          <ExpenseForm
            handleSubmit={handleSubmit}
            charge={charge}
            handleCharge={handleCharge}
            amount={amount}
            handleAmount={handleAmount}
            edit={edit}
          />
        </div>
        <div className='expense-list'>
          <ExpenseList 
            expenses={expenses} 
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            clearItems={clearItems}
          />
        </div>
      </div>
    </>
  );
}

export default App;
