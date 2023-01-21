import "./App.css";
import { Route } from "react-router-dom";
//Importar componentes
import InitialPage from "./components/InitialPage/InitialPage";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={InitialPage} />
      <Route path="/home" component={Home} />
    </div>
  );
}

export default App;
