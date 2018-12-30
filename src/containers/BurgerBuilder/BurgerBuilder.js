import React ,{Component} from 'react';
import axios from '../../axios-orders';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';

class BurgerBuilder extends Component{
    state={
        purchasing:false,
        // loading:false,
        // error: true
    }

    componentDidMount(){
      //  console.log("Inside Burger Builder",this.props.ings);
        this.props.onInitIngredients();
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
                    .map(igKey => {
                        return ingredients[igKey];
                    })
                    .reduce((sum,el)=>{
                        return sum + el;
                    },0);
        return  sum>0;
    }

    // addIngredientHandler = (type) => {
    //     const oldCount =this.props.ings.ingName.ingredients[type];
    //     const updatedCount =oldCount + 1;
    //     const updatedIngredients = {
    //         ...this.props.ings.ingName.ingredients
    //     };
    //     updatedIngredients[type] = updatedCount;
    //     const priceAddition =INGREDIENT_PRICES[type];
    //     const oldPrice = this.props.ings.ingName.totalPrice;
    //     const newPrice = oldPrice + priceAddition;
    //     this.setState({totalPrice:newPrice , ingredients : updatedIngredients}); 
    //     this.updatePurchaseState(updatedIngredients); 
    // }
 

    // removeIngredientHandler = (type) => {
    //     const oldCount =this.props.ings.ingName.ingredients[type];
    //     if(oldCount<=0){
    //         return;
    //     }
    //     const updatedCount =oldCount - 1;
    //     const updatedIngredients = {
    //         ...this.props.ings.ingName.ingredients
    //     };
    //     updatedIngredients[type] = updatedCount;
    //     const priceDeduction =INGREDIENT_PRICES[type];
    //     const oldPrice = this.props.ings.ingName.totalPrice;
    //     const newPrice = oldPrice - priceDeduction;
    //     this.setState({totalPrice:newPrice , ingredients : updatedIngredients});  
    //     this.updatePurchaseState(updatedIngredients);
    // }

    purchaseHandler = () =>{
        if(this.props.isAuthenticated){
            this.setState({purchasing:true});
        }else{
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }
        
    }

    purchaseCancelHandler = () =>{
        this.setState({purchasing:false});
    }

    purchaseContinueHandler = () => {
    // const queryParams = [];
    // for(let i in this.props.ings.ingName.ingredients){
    //     queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.props.ings.ingName.ingredients[i]));
    // }
    // queryParams.push('price='+ this.props.ings.ingName.totalPrice);
    // const queryString = queryParams.join('&');
        this.props.onInitPurchase();
        this.props.history.push('/checkout');
        // {
        //     pathname:'/checkout',
        //     search: '?' +queryString
        // });
    }

    render(){
        const disabledInfo = {
            ...this.props.ings
        };
        for(let key in disabledInfo){
            disabledInfo[key]= disabledInfo[key] <= 0
        }
        let orderSummary = null;
        let burger = this.props.error ? <p>Ingredients can't be loaded!</p> :<Spinner/>;
        if(this.props.ings){
            burger  =   (
                <Aux>
                    <Burger ingredients ={this.props.ings}/>
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        ordered={this.purchaseHandler}
                        isAuth= {this.props.isAuthenticated}
                        price = {this.props.price}/>
                </Aux>
            );
            orderSummary =  <OrderSummary 
                ingredients= {this.props.ings} 
                price={this.props.price}
                purchaseCancelled= {this.purchaseCancelHandler}
                purchaseContinued= {this.purchaseContinueHandler}/>

        }
        // if(this.state.loading){
        //     orderSummary = <Spinner/>;
        // }
       
        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings : state.burgerBuilder.ingredients,
        price : state.burgerBuilder.totalPrice,
        error : state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null
    };
}
 
const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: ()=> dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder,axios));
