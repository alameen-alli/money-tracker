import './App.css'

import React from 'react'

import Transaction from './components/Transaction'; 
import { useState } from 'react';
// import { response } from 'express';

function App() {

  const [item, setItem] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [description, setDescription] = useState("");

  function submitTransaction (e) {
    e.preventDefault();
    
    const url = process.env.REACT_APP_API_URL+'/transaction';
    const price = item.split(" ")[0];
    fetch (url, {
      method: 'POST',
      headers: {'Content-type' : 'application/json'},
      body: JSON.stringify({
        price,
        item:item.substring(price.length+1), 
        description, 
        dateTime
      })
    }).then(response => {
      response.json().then(json => {
        console.log('result', json);
        setItem('');
        setDescription('');
        setDateTime('');
      })
    })

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
        onChange={(e) => setItem(e.target.value)}
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
         item={"Bitcoin Investment"}
         description={"Gains from btc buying and selling"}
         price={"+$500"}
         datetime={"02/13/2023, 03:27"}
         transactionType={"credit"}
        />

        <Transaction
         item={"New Samsung TV"}
         description={"it was time for new TV"}
         price={"-$600"}
         datetime={"02/13/2023, 03:27"}
         transactionType={"debit"}
        />

        <Transaction
         item={"Iphone 13"}
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
