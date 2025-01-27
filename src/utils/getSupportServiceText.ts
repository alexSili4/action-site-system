import { IGetSupportServiceTextProps } from '@/types/types';

const getSupportServiceText = ({
  hotLinePhone,
  hotLineWorkHours,
}: IGetSupportServiceTextProps): string => {
  const defaultText =
    'Якщо Вам не вдалося зареєструвати акційний код зверніться на гарячу лінію';
  const shouldShowPhoneAndWorkHours =
    Boolean(hotLinePhone) && Boolean(hotLineWorkHours);

  const text = shouldShowPhoneAndWorkHours
    ? `${defaultText}  за телефоном ${hotLinePhone} (${hotLineWorkHours})`
    : defaultText;

  return text;
};

export default getSupportServiceText;
