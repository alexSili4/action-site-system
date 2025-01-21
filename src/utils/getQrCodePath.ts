import { PagePaths, SearchParamsKeys } from '@/constants';

const getQrCodePath = (code: string): string => {
  const qrCodePath = `${PagePaths.qr}?${SearchParamsKeys.code}=${code}`;

  return qrCodePath;
};

export default getQrCodePath;
