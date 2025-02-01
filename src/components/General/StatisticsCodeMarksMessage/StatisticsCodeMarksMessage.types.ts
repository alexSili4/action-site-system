export interface IProps {
  marks: number;
  mobSize: number;
  deskSize: number;
  isCabinetPage?: boolean;
  isCodeDetailsPage?: boolean;
  isRegisterCodePage?: boolean;
}

export interface IStyledContainerProps {
  isRegisterCodePage: boolean;
  isCodeDetailsPage: boolean;
}

export interface IStyledImageProps {
  mobSize: number;
  deskSize: number;
}
