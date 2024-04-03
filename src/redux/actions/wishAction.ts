import { SingleImgData } from "../../interface";

export const addWishList = (data: SingleImgData) => {
  console.warn('add action called....', data);
  return {
    type: "ADD_TO_WISHLIST",
    wishDataPayload: data
  }
}

export const removeWishList = (data: SingleImgData) => {
  console.warn('remove action called....', data);
  return {
    type: "REMOVE_FROM_WISHLIST",
    wishDataPayload: data
  }
}