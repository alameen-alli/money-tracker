import './App.css'

import React from 'react'

import Transaction from './components/Transaction'; 
import { useState } from 'react';

function App() {

  const [item, setItem] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [description, setDescription] = useState("");
  function submitTransaction () {
    
  }

  return (
    <div className="App">
      <main>
      <h1>$400<span>.00</span></h1>
      <form onSubmit={submitTransaction}>
        <div className="basic">
        <input 
        type="text" 
        placeholder="Add new item"
        value={item}
        onchange={(e) => setItem(e.target.value)}
        />

        <input 
        type="datetime-local"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
        />
        </div>
        <div className="description">
        <input 
        type="text" 
        placeholder="Description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        </div>
        <button type="submit">Add new transaction</button>
      </form>
      <div className="transactions">
        <Transaction
         name={"Bitcoin investment"}
         description={"Gains from btc buying and selling"}
         price={"+$500"}
         datetime={"02/13/2023, 03:27"}
         transactionType={"credit"}
        />

        <Transaction
         name={"New Samsung TV"}
         description={"it was time for new TV"}
         price={"-$600"}
         datetime={"02/13/2023, 03:27"}
         transactionType={"debit"}
        />

        <Transaction
         name={"Iphone 13"}
         description={"Sale of my Iphone 13"}
         price={"+$900"}
         datetime={"02/13/2023, 03:27"}
         transactionType={"credit"}
        />
      </div>
      </main>
    </div>
  );
}

export default App;
