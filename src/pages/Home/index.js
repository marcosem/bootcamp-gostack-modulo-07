import React, { Component } from 'react';
import { connect } from 'react-redux'; // connect this component to redux state
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions'; // importing both functions by using *

import { ProductList, AddToCartButton } from './styles';

// move export defult to ouside fo class to be able to use connect from redux
// export default class Home extends Component {
class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    // Avoit to call function inside the render, it is better to do like this way inside the componentDidMount
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  // Function handleAddProduct receives the product as argument
  // Every component connected to redux receives a property called "this.props.dispatch"
  // it basically works to do actions to redux

  handleAddProduct = product => {
    // changed this after mapDispatchToProps being added to the end of this module
    // const { dispatch } = this.props;
    const { addToCart } = this.props;

    // changed this after mapDispatchToProps being added to the end of this module
    // dispatch(CartActions.addToCard(product));
    addToCart(product);
  };

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>

            <AddToCartButton onClick={() => this.handleAddProduct(product)}>
              <div>
                <MdAddShoppingCart size={16} color="#fff" /> 3
              </div>
              <span>ADD TO CART</span>
            </AddToCartButton>
          </li>
        ))}
      </ProductList>
    );
  }
}

// Convert Redux actions to properties
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

// first argument is mapStateToProps, the second is mapDispatchToProps
export default connect(
  null,
  mapDispatchToProps
)(Home);
