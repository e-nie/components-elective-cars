import './App.css';
import Header from "./header/Header";
import MenuWrapper from "./Menu/MenuWrapper";
import Products from "./products/Products";
import FooterWrapper from "./footer/FooterWrapper";

function App() {

  return (
    <div className="App">
      <h1>App.js </h1>
      <Header/>
      <MenuWrapper/>
      <Products/>
      <hr/>
      <FooterWrapper/>
    </div>
  );
}

export default App;
