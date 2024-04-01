export const addWishList = (data) => {
  console.warn('action called....', data);
  return {
    type: "ADD_TO_WISHLIST",
    wishDataPayload: data
  }
}

export const removeWishList = (data) => {
  console.warn('action called....', data);
  return {
    type: "REMOVE_FROM_WISHLIST",
    wishDataPayload: data
  }
}