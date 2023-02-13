
function App() {
  return (
    <div className="App">
      <main>
      <h1>$400.00</h1>
      <form>
        <div className="basic">
        <input type="text" placeholder="Add new item"/>
        <input type="datetime-local"/>
        </div>
        <div className="description">
        <input type="text" placeholder="decription"/>
        </div>
        <button type="submit">Add new transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="description">it was time for new TV</div>
          </div>
          <div className="right">
            <div className="price">$500</div>
            <div className="datetime">02/13/2023, 03:27</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="description">it was time for new TV</div>
          </div>
          <div className="right">
            <div className="price">$500</div>
            <div className="datetime">02/13/2023, 03:27</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="description">it was time for new TV</div>
          </div>
          <div className="right">
            <div className="price">$500</div>
            <div className="datetime">02/13/2023, 03:27</div>
          </div>
        </div>
      </div>
      </main>
    </div>
  );
}

export default App;
