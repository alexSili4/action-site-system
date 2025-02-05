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

const usePromotionDetailsPage = (): IUsePromotionDetailsPage => {
  const [conditions, setConditions] = useState<Conditions>([]);
  const [otherPrizes, setOtherPrizes] = useState<Prizes>([]);
  const [wheelPrizes, setWheelPrizes] = useState<Prizes>([]);
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
    isShowRegCodeLink,
  }: IPromotionDetailsPageOutletContext = useOutletContext();
  const isFinishedPromotion = getIsFinishedPromotion(promotion?.v_status);

  const filteredShops = filterShopsByPromoDateEnd(shops);

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
    const getPromotionOtherPrizes = async (
      promotionId: string
    ): Promise<void> => {
      try {
        const presentPrizes = await promotionsService.getPresentPrizes(
          promotionId
        );

        setOtherPrizes(presentPrizes);
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
    wheelPrizes,
    faqs,
    winners,
    shops: filteredShops,
    promotion,
    shouldShowPromotionDetails,
    isFinishedPromotion,
    isShowRegCodeLink,
  };
};

export default usePromotionDetailsPage;
