import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart'
import Default from './components/Default'
import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStates from './contexts/GlobalStates';
import Modal from './components/Modal'

const App = props => {
  return (
    <GlobalStates>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal/>
      </Router>
      </GlobalStates>
  );
}

export default App;
 // const DemoContext = React.createContext;
  // const [state, dispatch] = useReducer(ProductListReducer, initialValue)
  // const { products } = state;
  // // console.log(products)
  // const showProducts = (products) => {
  //   console.log("ddd")
  //   dispatch({
  //     type: 'showAll',
  //     value: products
  //   })
  // }