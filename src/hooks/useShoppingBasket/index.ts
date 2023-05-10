import { ShoppingBasketProduct, UpdateShoppingBasket } from '@Types/index';
import shoppingBasketState from '../../atoms/shoppingBasketState';
import { useRecoilState } from 'recoil';

const useShoppingBasket = () => {
  const [shoppingBasket, setShoppingBasket] = useRecoilState<ShoppingBasketProduct[]>(shoppingBasketState);

  const getQuantity = (productId: number) => {
    const shoppingItem = shoppingBasket.find((item) => item.product.id === productId);

    if (shoppingItem) return shoppingItem.quantity;

    return 0;
  };

  const updateShoppingBasket: UpdateShoppingBasket = (product, quantity) => {
    const shoppingItem = shoppingBasket.find((item) => item.product.id === product.id);

    if (!shoppingItem) {
      const newShoppingItem = {
        id: Date.now(),
        quantity,
        product,
      };
      setShoppingBasket([...shoppingBasket, newShoppingItem]);
      return;
    }

    setShoppingBasket((prev) => {
      return prev.map((item) => {
        if (item.product.id !== shoppingItem.product.id) return item;
        return {
          id: shoppingItem.id,
          quantity,
          product,
        };
      });
    });
  };

  return { shoppingBasket, updateShoppingBasket, getQuantity };
};

export default useShoppingBasket;
