import './App.css';

function App() {
  return (
    <div className="App">
      Ciao!!! Sono il componente di default
      <PrimoComponente/> {/* richiamo la funzione PrimoComponente */}
    </div>
  );
}

export default App;

function PrimoComponente(){
  return(
    <p>Sono il primo componente non di default</p>
    )
}