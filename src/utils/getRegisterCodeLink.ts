import { PagePaths, SearchParamsKeys } from '@/constants';
import { IGetRegisterCodeLinkProps } from '@/types/types';

const getRegisterCodeLink = ({
  code,
  cityId,
}: IGetRegisterCodeLinkProps): string => {
  const generalCodeLink = `${PagePaths.code}?${SearchParamsKeys.promocode}=${code}`;
  const targetCodeLink = cityId
    ? `${generalCodeLink}?${SearchParamsKeys.cityId}=${cityId}`
    : generalCodeLink;

  return targetCodeLink;
};

export default getRegisterCodeLink;
