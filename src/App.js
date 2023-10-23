import logo from './logo.svg';
import './App.css';

let pessoas = [
  { COD: "001", NOME: "Aimée" },
  { COD: "002", NOME: "Cassi" },
  { COD: "003", NOME: "Malluh" },
];

function MyTitle() {
  return <h1>DinDin</h1>;
}

function MyTable() {
  return (
    <table>
      <tr>
        <td>COD</td>
        <td>NOME</td>
      </tr>
      {pessoas.map((Pessoa) => (
        <tr>
          <td>{Pessoa.COD}</td>
          <td>{Pessoa.NOME}</td>
        </tr>
      ))}
    </table>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyTitle />
        <MyTable />
      </header>
    </div>
  );
}

export default App;
