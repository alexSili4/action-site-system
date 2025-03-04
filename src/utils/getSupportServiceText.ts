import { IGetSupportServiceTextProps } from '@/types/types';

const getSupportServiceText = ({
  hotLinePhone,
  hotLineWorkHours,
}: IGetSupportServiceTextProps): string => {
  const defaultText =
    'Якщо Вам не вдалося зареєструвати акційний код, зверніться на "Гарячу лінію"';
  const shouldShowPhoneAndWorkHours =
    Boolean(hotLinePhone) && Boolean(hotLineWorkHours);
  const additionalInfo = `за телефоном ${hotLinePhone} (Графік роботи "Гарячої лінії": з понеділка по неділю ${hotLineWorkHours})`;

  const text = shouldShowPhoneAndWorkHours
    ? `${defaultText} ${additionalInfo}`
    : defaultText;

  return text;
};

export default getSupportServiceText;
