import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Demo from './Demo.js';
import Services from './Services.js'
import Contact from './Contact.js'
import Testimonal from './Testimonal.js'
import Header from './Header.js'

function App() {
  return (
    <div className="App">
    <Header/>
    <Demo/>
    <Services/>
    <Contact/>
    <Testimonal/>
    </div>
  );
}

export default App;
