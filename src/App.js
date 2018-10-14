import React, { Component } from 'react';
import './App.css';
// import Radium, { StyleRoot} from 'radium';
import Prs from './Person/Person';

class App extends Component {

  state ={
    persons: [
      {id:'fewdf',name:'Prakash',age:20},
      {id:'ccxcd',name:'Prakash1',age:21},
      {id:'ewrqwe',name:'Prakash2',age:22},
    ],
    otherName: 'Testing2',
    showPerson: false
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
    this.setState({showPerson : !this.state.showPerson})
    
  }

  deletePersonHandler = (indexPerson) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(indexPerson,1);
    this.setState({persons:persons});
  }


  render() {

    let persons = null;
    const style ={
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border: '1px solid blue',
      padding: '8px',
      // cursor: 'pointer',
      // ':hover':{
      //   backgroundColor:'lightgreen',
      //   color:'black',
      // }
    }

    if(this.state.showPerson){
      persons = (
        <div>
           {this.state.persons.map( (person,index) => {
             return <Prs name = {person.name} 
                         age = {person.age} 
                         click = {() =>this.deletePersonHandler(index)} 
                         key = {person.id}
                         changed ={(event) => {this.switchNameHandler(event,person.id)}}/> 
           })}
        </div>
      );
      style.backgroundColor='red';
      // style[':hover'] = {
      //   backgroundColor:'salmon',
      //   color:'black'
      // }
    }

    let classes=[];

    if(this.state.persons.length<=2){
      classes.push('red');
    }
    if(this.state.persons.length<=1){
      classes.push('bold');
      console.log(classes);
    }

    return (
      // <StyleRoot>    
      <div className="App">
       <h1>Hello</h1>
       <p className={classes.join(' ')}>How are you?</p>

       <button  style ={style} onClick={this.switchToggle}>Switch Name </button>
        {persons}
       <h2>Test : {this.state.otherName}</h2>
      </div>
      // </StyleRoot>
    );

  }
}

export default App;
