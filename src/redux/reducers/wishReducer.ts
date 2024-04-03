import { ImageDataAction, SingleImgData } from "../../interface";

export const wishListData = (initialState: SingleImgData[] = [], action: ImageDataAction) => {
  console.warn('Everytime reducer called', action); 
  // let wishArr = [];
  switch(action.type){
    case 'ADD_TO_WISHLIST':
      console.warn('add reducer called', action);
      // wishArr.push(action.wishDataPayload)
      // console.log(initialState)
      // console.log(action.wishDataPayload)

      // const updatedWishDisplay  = !action.wishDataPayload.wishDisplay
      // action.wishDataPayload.wishDisplay = updatedWishDisplay;

      // console.log(wishArr)
      // console.log( [action.wishDataPayload, ...initialState]) 
    return [action.wishDataPayload, ...initialState]

    case 'REMOVE_FROM_WISHLIST':
    console.warn('remove reducer called', action);
    const remainingItems: SingleImgData[] = initialState.filter((item: SingleImgData)=> item.id !== action.wishDataPayload.id)
    // console.log(remainingItems)
    // console.log(initialState)
    // initialState.length = initialState.length - 1;
    return [...remainingItems]

    default:
      return []
  }
}