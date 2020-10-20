import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';
import Sidebar from './CommonComponents/Sidebar';
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import PropsAndState from './Pages/PropsAndState';
import LifeCycleMethods from './Pages/LifeCycleMethods';
import Container from './Pages/FunctionalComponents';
import HooksDemo from './Pages/Hooks';
import ReduxAndReducer from './Pages/ReduxAndReducer'
import FormHandling from './Pages/FormHandling';
import ToDoList from './Pages/ToDoList';
import WeatherApp from './Pages/WeatherApp/WeatherApp';
import ComponentDemo from './Pages/ComponentDemo/ComponentDemo';

function App() {
  
  return (
    <Router>
      <div className='main-div'>
        <Header />
        <div className='body '>
          <Sidebar />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/contactus' component={ContactUs}/>
            <Route path='/propsAndState' component={PropsAndState}/>
            <Route path='/lifeCycle' component={LifeCycleMethods}/>
            <Route path='/functionalComponents' component={Container}/>
            <Route path='/hooks' component={HooksDemo}/>
            <Route path='/redux' component={ReduxAndReducer}/>
            <Route path='/formHandling' component={FormHandling}/>
            <Route path='/todolist' component={ToDoList}/>
            <Route path='/weather' component={WeatherApp}/>
            <Route path='/componentdemo' component={ComponentDemo}/>
            
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
