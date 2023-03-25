import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div className="App">
        <Header text='Header'/>
        <Counter/>
        <Footer hello='привет'/>
    </div>
  );
}

export default App;
