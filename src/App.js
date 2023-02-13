
function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
