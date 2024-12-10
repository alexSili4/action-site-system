import { PagePaths, SearchParamsKeys } from '@/constants';
import { IGetRegisterCodeLinkProps } from '@/types/types';

const getRegisterCodeLink = ({
  promotionId,
  cityId,
}: IGetRegisterCodeLinkProps): string => {
  const generalCodeLink = `${PagePaths.code}/${promotionId}`;
  const targetCodeLink = cityId
    ? `${generalCodeLink}?${SearchParamsKeys.cityId}=${cityId}`
    : generalCodeLink;

  return targetCodeLink;
};

export default getRegisterCodeLink;
