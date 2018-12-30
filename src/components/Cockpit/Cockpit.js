import React from 'react';

import styles from './Cockpit.module.css';
import Aux from './../../hoc/Aux/Aux';

const cockpit = (props) => {

    let classes=[];
    let btnClass=styles.Button;
    if(props.showPersons){
        btnClass = [styles.Button,styles.Red].join(' ');
    }    
    if(props.persons.length<=2){
      classes.push(styles.red);
    }
    if(props.persons.length<=1){
      classes.push(styles.bold);
    //  console.log(classes);
    }

    return (
        <Aux>
            <h3>{props.title}</h3>
            <p className={classes.join(' ')}>How are you?</p>
            <button className= {btnClass} onClick={props.clicked}>Switch Name </button>
            <button onClick={props.login}>Login</button>
        </Aux>
    );
};


export default cockpit;