import React, { Component } from 'react';

import styles from './App.module.css';
// import Radium, { StyleRoot} from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Layout from '../hoc/Layout/Layout';
import BurgerBuilder from '../containers/BurgerBuilder/BurgerBuilder';
import Aux from '../hoc/Aux/Aux';
import withClass from '../hoc/withClass';
import Blog from '../containers/Blog/Blog';

export const AuthContext = React.createContext(false);

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] Inside Constructor',props);
  }

  //Discourage to use
  componentWillMount(){
    console.log('[App.js] Inside componentWillMount');
  }

  componentDidMount(){
    console.log('[App.js] Inside componentDidMount');
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('[UPDATE App.js] Inside shouldComponentUpdate',nextProps , nextState);
    return true; 
  }
  //Discourage to use
  componentWillUpdate(nextProps,nextState){
    console.log('[UPDATE App.js] Inside componentWillUpdate',nextProps,nextState); 
  }

  static getDerivedStateFromProps(nextProps,prevState){
    console.log('[UPDATE App.js] Inside getDerivedStateFromProps',nextProps,prevState); 
    return prevState;
  }

  getSnapshotBeforeUpdate(){
    console.log('[UPDATE App.js] Inside getSnapshotBeforeUpdate'); 
  }

  componentDidUpdate(){
    console.log('[UPDATE App.js] Inside componentDidUpdate');
  }

  //Discourage to use - ComponentWillReceiveProps

  state ={
    persons: [
      {id:'fewdf',name:'Prakash',age:20},
      {id:'ccxcd',name:'Prakash1',age:21},
      {id:'ewrqwe',name:'Prakash2',age:22},
    ],
    otherName: 'Testing2',
    showPersons: false,
    toggleClicked: 0,
    authenticated: false
  }

  switchNameHandler = (event,id) =>{
   // console.log('Test');
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    // persons: [
    //   {name:newName,age:20},
    //   {name:'Prakash1',age:21},
    //   {name:'Prakash2',age:876},
    // ]
   })

  } 

  // switchInputHandler = (event) => {
  //   this.setState({
  //     persons: [
  //       {name:event.target.value,age:20},
  //       {name:'Prakash1',age:21},
  //       {name:'Prakash2',age:876},
  //     ]
  //    })
  // }

  switchToggle =() =>{
    this.setState( (prevState,props) => {
        return{
          showPersons : !this.state.showPersons,
          toggleClicked : prevState.toggleClicked+1
        }
    });
    
  }

  deletePersonHandler = (indexPerson) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(indexPerson,1);
    this.setState({persons:persons});
  }

  loginHandler = () =>{
    this.setState({authenticated:true});
  }


  render() {
    console.log('[App.js] Inside render');
    let persons = null;
    // const style ={
    //   backgroundColor:'green',
    //   color:'white',
    //   font:'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   // cursor: 'pointer',
    //   // ':hover':{
    //   //   backgroundColor:'lightgreen',
    //   //   color:'black',
    //   // }
    // }

    if(this.state.showPersons){
      persons = <Persons 
          persons = {this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.switchNameHandler} 
      //    isAuthenticated = {this.state.authenticated}
          />
      //style.backgroundColor='red';
      // style[':hover'] = {
      //   backgroundColor:'salmon',
      //   color:'black'
      // }
    }

    return (
      // <StyleRoot>    
      <Aux>
        <Layout>
           <BurgerBuilder/>
        </Layout>
        <Cockpit 
            title = {this.props.title}
            showPersons ={this.state.showPersons}
            persons = {this.state.persons}
            clicked = {this.switchToggle}
            login = {this.loginHandler}
            />
        <Blog />
        <AuthContext.Provider value={this.state.authenticated}>{persons}</AuthContext.Provider>
        
       <h2>Test : {this.state.otherName}</h2>
       </Aux>
      // </StyleRoot>
    );

  }
}

export default withClass(App,styles.App);
