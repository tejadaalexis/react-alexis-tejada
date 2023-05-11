import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="container-fluid">
      <Header/>
      <ItemListContainer mensaje ="INDUMENTARIA CRIP"/>
      <Footer/>
    </div>
  ); 
}

export default App;
