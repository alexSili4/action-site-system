import { PagePaths, SearchParamsKeys } from '@/constants';
import { IGetRegisterCodeLinkProps } from '@/types/types';

const getRegisterCodeLink = ({
  promotionId,
  cityId,
}: IGetRegisterCodeLinkProps): string =>
  `${PagePaths.code}/${promotionId}?${SearchParamsKeys.cityId}=${cityId}`;

export default getRegisterCodeLink;
