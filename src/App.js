import logo from './logodhop.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopify</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>


  
  const data = [
    {
      id :1,
      name : "iPhone 9",
      text : "Apple",
      img: "",
      price : "$549"
      
      
    },
    {
      id :2,
      name : "iPhone X",
      text : "Apple",
      img: "",
      price : "899$"
      
      
    },
    {
      id :3,
      name : "Samsung Universe 9",
      text : "Вкусные и свежие чебуреки",
      img: "",
      price : "1249$"
      
      
    },


  ]
  return(
    <div className = "App">
      {data.map((product)=>(
        <Cards
        key={product.id}
        rest={product}
        />
      ))}
    </div>

    
  )

    </div>
  );

}


export default App;
