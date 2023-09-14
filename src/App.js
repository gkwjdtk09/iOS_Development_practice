import logo from './logo.svg';
import './App.css';
//import Potato from './Potato';
function Food(props){
  return <h3>I like { props.fav }</h3>
}
function App() {
  return (
    <div className="App">
      <h2>안녕하세요</h2>
      <Food fav="떡볶이"/>
      <Food fav="쫄면"/>
    </div>
  );
}

export default App;
