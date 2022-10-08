import react,{Component } from 'react';
import './App.css';
import './AllStyle.css';
import Todos from './component/Todos';
import { ReactDOM } from 'react-dom';
import Header from './component/header';
import Menu from './component/menu';





class App extends Component {
  render(){
        return ( 
        <div className='container'> 
          <Header/>
          <Menu/>
          
        </div>);
    }
  }
  

export default App;
