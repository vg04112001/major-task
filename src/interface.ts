export interface SingleServiceItem {
  id: string;
  title: string;
  text: string;
  icon: JSX.Element;
}

export interface SingleFormData {
  fname: string;
  lname: string;
  email: string;
  subject: string;
  message: string;
}

export interface SingleImgData {
  id: number;
  imgPath: string;
  title: string;
  desc: string[];
  wishDisplay: boolean;
}

// export type ImageDataState = {
//   wishes: SingleImgData[]
// }

export type ImageDataAction = {
  type: string
  wishDataPayload: SingleImgData
}

export type DispatchType = (args: ImageDataAction) => ImageDataAction