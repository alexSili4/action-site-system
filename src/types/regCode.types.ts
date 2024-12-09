export interface IRegCodeFormData {
  codePart1: string;
  codePart2: string;
  codePart3: string;
  acceptedTerms: boolean;
}

export interface ISentCertificateFormData {
  name: string;
  email: string;
  sendCertificate: boolean;
}
