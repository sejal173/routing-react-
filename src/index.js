import ReactDOM from 'react-dom/client';
import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';
import About from './views/About/About';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App(){
  const path = window.location.pathname

  switch(path){
    case "/":
      return<Home/>
    case "/Contact":
      return<Contact/>
    case "/About":
      return<About/>

    default:
      return <h1>Galat path hai</h1>  
  }
}

root.render(
  <>
      <App/>
     
      
     

  </>
)