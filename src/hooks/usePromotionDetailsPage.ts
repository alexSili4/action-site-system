import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PagePaths } from '@/constants';
import promotionsService from '@/services/promotions.service';
import { Conditions } from '@/types/condition.types';
import { Prizes } from '@/types/prize.types';
import { FAQs } from '@/types/faqs.types';
import { IUsePromotionDetailsPage } from '@/types/hooks.types';
import { WinnersByDates } from '@/types/winner.types';
import { Shops } from '@/types/shop.types';

const usePromotionDetailsPage = (): IUsePromotionDetailsPage => {
  const [conditions, setConditions] = useState<Conditions>([]);
  const [prizes, setPrizes] = useState<Prizes>([]);
  const [faqs, setFaqs] = useState<FAQs>([]);
  const [winners, setWinners] = useState<WinnersByDates>([]);
  const [shops, setShops] = useState<Shops>([]);

  const promotionId = useParams()[PagePaths.dynamicParam] ?? '';

  useEffect(() => {
    const getPromotionConditions = async (
      promotionId: string
    ): Promise<void> => {
      try {
        const response = await promotionsService.getConditions(promotionId);
        setConditions(response);
      } catch (error) {
        // TODO error handler
      }
    };

    getPromotionConditions(promotionId);
  }, [promotionId]);

  useEffect(() => {
    const getPromotionPrizes = async (promotionId: string): Promise<void> => {
      try {
        const response = await promotionsService.getPrizes(promotionId);
        setPrizes(response);
      } catch (error) {
        // TODO error handler
      }
    };

    getPromotionPrizes(promotionId);
  }, [promotionId]);

  useEffect(() => {
    const getPromotionFaqs = async (promotionId: string): Promise<void> => {
      try {
        const response = await promotionsService.getFAQs(promotionId);
        setFaqs(response);
      } catch (error) {
        // TODO error handler
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
        // TODO error handler
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
        // TODO error handler
      }
    };

    getPromotionShops(promotionId);
  }, [promotionId]);

  return { conditions, prizes, faqs, winners, shops };
};

export default usePromotionDetailsPage;
