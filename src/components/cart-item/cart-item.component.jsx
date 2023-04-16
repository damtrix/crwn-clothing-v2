import {
  CartItemContainer,
  Img,
  ItemDetails,
  Name,
  Price,
} from './cart-item.styles';

const CartItem = ({ cartitem }) => {
  const { name, imageUrl, price, quantity } = cartitem;
  return (
    <CartItemContainer>
      <Img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name className='name'>{name}</Name>
        <Price>
          {quantity} * ${price}
        </Price>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
