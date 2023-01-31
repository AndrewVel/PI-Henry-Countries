import "./App.css";
import { Route } from "react-router-dom";
//Importar componentes
import InitialPage from "./components/InitialPage/InitialPage";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import Activity from "./components/Activity/Activity";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={InitialPage} />
      <Route path="/home" component={Home} />
      <Route path="/detail/:id" component={Detail} />
      <Route path="/activity/" component={Activity} />
    </div>
  );
}

export default App;
