/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';
import { buyItem, emptyCart } from '../store';
import Shop from '../Components/Shop';

const mapStateToProps = (state) => ({
  products: state.shop.products,
  cart: state.shop.cart,
});

const mapDispatchToProps = (dispatch) => ({
  onAddItemToCart: (item) => {
    dispatch(buyItem(item));
  },
  onEmptyCart: () => {
    dispatch(emptyCart());
  },
});

const ShopContainer = connect(mapStateToProps, mapDispatchToProps)(Shop);

export default ShopContainer;
