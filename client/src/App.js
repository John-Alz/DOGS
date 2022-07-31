import { Route } from "react-router-dom";
import AddDog from "./components/AddDog/AddDog";
import DogId from "./components/DogDetail/DogDetail";
import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";


function App() {
  return (
    <div>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/dogs" component={NavBar}/>
      <Route exact path="/dogs" component={Home} />
      <Route exact path="/detail/:id" component={DogId} />
      <Route exact path="/addDog" component={AddDog} />
    </div>
  );
}

export default App;
