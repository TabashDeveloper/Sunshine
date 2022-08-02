//import './App.css';
import Home from './pages/Index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from "jquery";
function App() {
  return (
    <div className="page-wrapper">
      <Home/>
      <ToastContainer />
    </div>
  );
}

export default App;
