import  './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
   <>  
    <Navbar title="TEXT INFO "/>
     <div className='container my-3 py-3'>
     <TextForm/>
     </div>
  
    </>

  );
}

export default App;
