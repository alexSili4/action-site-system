import { PagePaths } from '@/constants';
import { NumberOrNull } from '@/types/types';

const getCertificateDetailsPath = (id: NumberOrNull): string =>
  `${PagePaths.userCertificate}/${id}`;

export default getCertificateDetailsPath;
