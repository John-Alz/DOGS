import { Route, Switch } from "react-router-dom";
import AddDog from "./components/AddDog/AddDog";
import DogId from "./components/DogDetail/DogDetail";
import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";
import NotFound from "./components/NotFound/NotFound";


function App() {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/dogs" component={Home} />
      <Route exact path="/detail/:id" component={DogId} />
      <Route exact path="/addDog" component={AddDog} />
      <Route exact path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
