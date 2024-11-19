import promotionsService from '@/services/promotions.service';
import operationWrapper from './operationWrapper';
import { IPromotion, Promotions } from '@/types/promotion.types';
import { IGetPromotionsOperationProps } from '@/types/promotionsStore.types';

const getPromotionsOperation = async ({
  set,
  data,
}: IGetPromotionsOperationProps): Promise<Promotions | undefined> => {
  const response = await promotionsService.getPromotions(data);

  // TODO delete
  const fakePromotion: IPromotion = {
    name: 'promotion',
    action_type: 1,
    conditions_text: '',
    coverage_type: 'base',
    date_from: 1,
    date_to: 2,
    hot_line_email: '',
    hot_line_phone: '',
    hot_line_text: '',
    hot_line_text_2: '',
    hot_line_work_hours: '',
    id: 2,
    legal_text: '',
    logo: '',
    logo_partner: '',
    main_banner_dt: '',
    main_banner_mob: '',
    rules_pdf: '',
    second_banner_dt: '',
    second_banner_mob: '',
    third_banner_dt: '',
    third_banner_mob: '',
  };
  set({
    items: [...response, fakePromotion],
    isLoaded: true,
  });

  return response;
};

export const getPromotions = operationWrapper(getPromotionsOperation);
