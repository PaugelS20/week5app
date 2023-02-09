import './App.css';
import { Greeting } from './Greeting';

const App = () => {
  return (
  <> 
      <Greeting name="React" favoriteNumber={37} favoriteColors={["red","blue","brass"]}/>
      <Greeting name="Sam" favoriteNumber={100}/>
      <Greeting name="Matt" favoriteNumber={27}/>
      <Greeting name="Amy" favoriteNumber={45}/>
  </>

  );
}

export default App;
