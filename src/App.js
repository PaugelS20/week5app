import './App.css';
import { Greeting } from './Greeting';

const App = () => {
  const styles = {
    container: {
      padding: 20,
      backgroundColor: new Date().getSeconds() % 2 == 0 ? "lightyellow" : "blue"
    }
  }
  return (
  <div style={styles.container}> 
      <Greeting name="React" favoriteNumber={37} favoriteColors={["red","blue","brass"]}/>
      <Greeting name="Sam" favoriteNumber={100}/>
      <Greeting name="Matt" favoriteNumber={27}/>
      <Greeting name="Amy" favoriteNumber={45}/>
  </div>

  );
}
export default App;
