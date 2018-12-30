import React,{Component} from 'react';
import PropTypes from 'prop-types';
//import Radium from 'radium';

import styles from './Person.module.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux/Aux';
import { AuthContext } from '../../../containers/App';

class Person extends Component{
    // constructor(props){
    //     super(props);
    //    // console.log('[Person.js] Inside Constructor',props);
    //   }
    
    //   componentWillMount(){
    //  //   console.log('[Person.js] Inside componentWillMount');
    //   }
    
      componentDidMount(){
      //  console.log('[Person.js] Inside componentDidMount');
        if(this.props.position === 0){
            this.inputElement.focus();
        }    
      }

    //   componentWillUnmount(){
    //   //  console.log('[Person.js] Inside componentWillUnmount');
    //   }
    

    render() {
       // console.log('[Person.js] Inside render');
        return ( 
            <Aux>
               <AuthContext.Consumer>
               { auth => auth ? <p>I'm authenticated</p>:null }
               </AuthContext.Consumer> 
                <p onClick={this.props.click}>Hello !I am inside Person. Name: {this.props.name} Age:{this.props.age}</p> 
                <p>{this.props.children}</p>
                <input
                    ref={(inp)=> {this.inputElement = inp}} 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}/>
            </Aux>
        )

    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person,styles.Person);