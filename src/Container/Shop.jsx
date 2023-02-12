/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';
import Shop from '../Components/Shop';

const mapStateToProps = (state) => ({
  products: state.shop.products,
  cart: state.shop.cart,
});

const mapDispatchToProps = (dispatch) => ({
  onAddItemToCart: (item) => {
    dispatch({ type: 'BUY_ITEM', payload: item });
  },
  onEmptyCart: () => {
    dispatch({ type: 'EMPTY_CART' });
  },
});

const ShopContainer = connect(mapStateToProps, mapDispatchToProps)(Shop);

export default ShopContainer;
