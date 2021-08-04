export const addItemToCart = (product) => {
  const currentCart = JSON.parse(localStorage.getItem('carrinho'));
  let futureCart = [];
  const alreadyInCart = currentCart.some((item) => product.id === item.id);
  if (alreadyInCart) {
    currentCart.map((item) => {
      if (item.id === product.id && item.quantity < item.available_quantity) {
        item.quantity += 1;
        return item;
      }
      return item;
    });
    futureCart = [...currentCart];
  } else {
    product.quantity = 1;
    futureCart = [...currentCart, product];
  }
  localStorage.setItem('carrinho', JSON.stringify(futureCart));
};

export const removeItemFromCart = (product) => {
  const currentCart = JSON.parse(localStorage.getItem('carrinho'));
  currentCart.map((item) => {
    if (item.id === product.id && item.quantity > 0) {
      item.quantity -= 1;
      return item;
    }
    return item;
  });
  localStorage.setItem('carrinho', JSON.stringify(currentCart));
};

export const deleteItemFromCart = (product) => {
  const currentCart = JSON.parse(localStorage.getItem('carrinho'));
  const futureCart = currentCart.filter((item) => item.id !== product.id);
  localStorage.setItem('carrinho', JSON.stringify(futureCart));
};

export const getTotalItems = () => {
  const currentCart = JSON.parse(localStorage.getItem('carrinho'));
  if(currentCart) {
    const totalItems = currentCart.reduce((acc, cur) => {
      acc += cur.quantity;
      return acc;
    }, 0);
    return totalItems;
  }
  return 0;
};
