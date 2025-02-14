import { useEffect, useState } from 'react';
import promotionsService from '@/services/promotions.service';
import { Conditions } from '@/types/condition.types';
import { Prizes } from '@/types/prize.types';
import { FAQs } from '@/types/faqs.types';
import { IUsePromotionDetailsPage } from '@/types/hooks.types';
import { WinnersByDates } from '@/types/winner.types';
import { Shops } from '@/types/shop.types';
import usePromotion from './usePromotion';
import useDynamicId from './useDynamicId';
import useServiceUnavailablePageNavigate from './useServiceUnavailablePageNavigate';
import { AxiosError } from 'axios';
import { IPromotionDetailsPageOutletContext } from '@/types/types';
import { useOutletContext } from 'react-router-dom';
import { filterShopsByPromoDateEnd, getIsFinishedPromotion } from '@/utils';
import { BigPrizes } from '@/types/bigPrize.types';

const usePromotionDetailsPage = (): IUsePromotionDetailsPage => {
  const [conditions, setConditions] = useState<Conditions>([]);
  const [otherPrizes, setOtherPrizes] = useState<Prizes>([]);
  const [otherBigPrizes, setOtherBigPrizes] = useState<BigPrizes>([]);
  const [wheelPrizes, setWheelPrizes] = useState<Prizes>([]);
  const [wheelBigPrizes, setWheelBigPrizes] = useState<BigPrizes>([]);
  const [faqs, setFaqs] = useState<FAQs>([]);
  const [winners, setWinners] = useState<WinnersByDates>([]);
  const [shops, setShops] = useState<Shops>([]);
  const promotionId = useDynamicId();
  const { promotion, isNotFoundError } = usePromotion();
  const navigate = useServiceUnavailablePageNavigate();
  const shouldShowPromotionDetails = !isNotFoundError;
  const {
    updateLegalText,
    updateIsFinishedPromotion,
    updateShowPromotionsWinnersNavLink,
    updateShowPromotionsPrizesNavLink,
    isShowRegCodeLink,
    showPromotionsWinnersNavLink,
    showPromotionsPrizesNavLink,
  }: IPromotionDetailsPageOutletContext = useOutletContext();
  const isFinishedPromotion = getIsFinishedPromotion(promotion?.v_status);

  const filteredShops = filterShopsByPromoDateEnd(shops);

  useEffect(() => {
    const isWheelActionType = promotion?.action_type === 1;

    if (!isWheelActionType) {
      updateShowPromotionsPrizesNavLink(true);
    }
  }, [promotion, winners]);

  useEffect(() => {
    const isWinners = Boolean(winners.length);
    const isWheelActionType = promotion?.action_type === 1;

    if (!isWheelActionType) {
      updateShowPromotionsWinnersNavLink(isWinners);
    }
  }, [promotion, winners]);

  useEffect(() => {
    updateIsFinishedPromotion(isFinishedPromotion);
  }, [isFinishedPromotion]);

  useEffect(() => {
    if (promotion) {
      updateLegalText(promotion.legal_text);
    }
  }, [promotion, updateLegalText]);

  useEffect(() => {
    const getPromotionConditions = async (
      promotionId: string
    ): Promise<void> => {
      try {
        const response = await promotionsService.getConditions(promotionId);
        setConditions(response);
      } catch (error) {
        let errorMessage: string = '';

        if (error instanceof AxiosError) {
          errorMessage = error.response?.data.message;
        }

        navigate({ isError: true, errorMessage });
      }
    };

    getPromotionConditions(promotionId);
  }, [promotionId]);

  useEffect(() => {
    const getPromotionWheelPrizes = async (
      promotionId: string
    ): Promise<void> => {
      try {
        const response = await promotionsService.getWheelPrizes(promotionId);
        setWheelPrizes(response);
      } catch (error) {
        let errorMessage: string = '';

        if (error instanceof AxiosError) {
          errorMessage = error.response?.data.message;
        }

        navigate({ isError: true, errorMessage });
      }
    };

    getPromotionWheelPrizes(promotionId);
  }, [promotionId]);

  useEffect(() => {
    const getPromotionWheelBigPrizes = async (
      promotionId: string
    ): Promise<void> => {
      try {
        const response = await promotionsService.getWheelBigPrizes(promotionId);
        setWheelBigPrizes(response);
      } catch (error) {
        let errorMessage: string = '';

        if (error instanceof AxiosError) {
          errorMessage = error.response?.data.message;
        }

        navigate({ isError: true, errorMessage });
      }
    };

    getPromotionWheelBigPrizes(promotionId);
  }, [promotionId]);

  useEffect(() => {
    const getPromotionOtherPrizes = async (
      promotionId: string
    ): Promise<void> => {
      try {
        const response = await promotionsService.getPresentPrizes(promotionId);

        setOtherPrizes(response);
      } catch (error) {
        let errorMessage: string = '';

        if (error instanceof AxiosError) {
          errorMessage = error.response?.data.message;
        }

        navigate({ isError: true, errorMessage });
      }
    };

    getPromotionOtherPrizes(promotionId);
  }, [promotionId]);

  useEffect(() => {
    const getPromotionOtherBigPrizes = async (
      promotionId: string
    ): Promise<void> => {
      try {
        const response = await promotionsService.getPresentBigPrizes(
          promotionId
        );

        setOtherBigPrizes(response);
      } catch (error) {
        let errorMessage: string = '';

        if (error instanceof AxiosError) {
          errorMessage = error.response?.data.message;
        }

        navigate({ isError: true, errorMessage });
      }
    };

    getPromotionOtherBigPrizes(promotionId);
  }, [promotionId]);

  useEffect(() => {
    const getPromotionFaqs = async (promotionId: string): Promise<void> => {
      try {
        const response = await promotionsService.getFAQs(promotionId);
        setFaqs(response);
      } catch (error) {
        let errorMessage: string = '';

        if (error instanceof AxiosError) {
          errorMessage = error.response?.data.message;
        }

        navigate({ isError: true, errorMessage });
      }
    };

    getPromotionFaqs(promotionId);
  }, [promotionId]);

  useEffect(() => {
    const getPromotionWinners = async (promotionId: string): Promise<void> => {
      try {
        const response = await promotionsService.getWinners(promotionId);
        setWinners(response);
      } catch (error) {
        let errorMessage: string = '';

        if (error instanceof AxiosError) {
          errorMessage = error.response?.data.message;
        }

        navigate({ isError: true, errorMessage });
      }
    };

    getPromotionWinners(promotionId);
  }, [promotionId]);

  useEffect(() => {
    const getPromotionShops = async (promotionId: string): Promise<void> => {
      try {
        const response = await promotionsService.getShops(promotionId);
        setShops(response);
      } catch (error) {
        let errorMessage: string = '';

        if (error instanceof AxiosError) {
          errorMessage = error.response?.data.message;
        }

        navigate({ isError: true, errorMessage });
      }
    };

    getPromotionShops(promotionId);
  }, [promotionId]);

  return {
    conditions,
    otherPrizes,
    otherBigPrizes,
    wheelPrizes,
    wheelBigPrizes,
    faqs,
    winners,
    shops: filteredShops,
    promotion,
    shouldShowPromotionDetails,
    isFinishedPromotion,
    isShowRegCodeLink,
    showPromotionsWinnersNavLink,
    showPromotionsPrizesNavLink,
  };
};

export default usePromotionDetailsPage;
