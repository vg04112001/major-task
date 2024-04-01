export const wishListData = (initialState=[], action) => {
  console.warn('reducer called', action);
  // let wishArr = [];
  switch(action.type){
    case 'ADD_TO_WISHLIST':
      // wishArr.push(action.wishDataPayload)
      // console.log(initialState)
      // console.log(action.wishDataPayload)

      const updatedWishDisplay  = !action.wishDataPayload.wishDisplay
      action.wishDataPayload.wishDisplay = updatedWishDisplay;

      // console.log(wishArr)
      // console.log( [action.wishDataPayload, ...initialState]) 
    return [action.wishDataPayload, ...initialState]

    case 'REMOVE_FROM_WISHLIST':
    const remainingItems = initialState.filter((item)=> item.id !== action.wishDataPayload.id)
    // console.log(remainingItems)
    return [...remainingItems]

    default:
      return []
  }
}