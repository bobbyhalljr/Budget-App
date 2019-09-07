import React from 'react';

import AvailableBudget from './components/AvailableBudget';
import BudgetForm from './components/BudgetForm';
import CalcBudget from './components/CalcBudget';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Budget App</h1>
      <div>
        <AvailableBudget />
        <BudgetForm />
        <CalcBudget />
      </div>
    </div>
  );
}

export default App;
