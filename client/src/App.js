import "./App.css";
import { Route } from "react-router-dom";
//Importar componentes
import InitialPage from "./components/InitialPage/InitialPage";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import Activity from "./components/Activity/Activity";
import CreateActivity from "./components/Activity/CRUD/Create/CreateActivity";
import UpdateActivity from "./components/Activity/CRUD/Update/UpdateActivity";
import Me from "./components/About/About";

import axios from "axios";
axios.defaults.baseURL = "https://pi-countries-andrewvel.up.railway.app";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={InitialPage} />
      <Route path="/home" component={Home} />
      <Route path="/detail/:id" component={Detail} />
      <Route exact path="/activity/" component={Activity} />
      <Route exact path="/activity/create/" component={CreateActivity} />
      <Route exact path="/activity/update/:id" component={UpdateActivity} />
      <Route exact path="/me" component={Me} />
    </div>
  );
}

export default App;
