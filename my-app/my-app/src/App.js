import logo from './frutas.png';
import './App.css';

function App() {
  const frutas = ['Manzana', 'Pera', 'Banano', 'Sandia'];
  return (
    <div className="App">
      <header className="App-header">
        <h2>Frutas</h2>
        <ul>
          {frutas.map((fruta,index)=>(<li key={index}>{fruta}</li>))}
        </ul>
        <br/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
