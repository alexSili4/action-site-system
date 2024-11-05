export interface IRegCodeFormData {
  codePart1: string;
  codePart2: string;
  codePart3: string;
}

export interface IRegUserFormData {
  name: string;
  sendCertificate: boolean;
  email: string;
  confirmEmailCode: string;
  acceptedTerms: boolean;
}
