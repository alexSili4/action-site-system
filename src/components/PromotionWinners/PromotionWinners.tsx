import { FC } from 'react';
import PromotionWinnersTable from '@/components/PromotionWinnersTable';
import {
  Container,
  ContentWrap,
  ElementWrap,
  ControlsWrap,
} from './PromotionWinners.styled';
import PromotionSectionTitle from '@/components/PromotionSectionTitle';
import { PagePaths, PromotionDetailsPageSections, theme } from '@/constants';
import RegisterCodeLink from '@/components/RegisterCodeLink';
import PromotionPrizeDrawsDatePicker from '@/components/PromotionPrizeDrawsDatePicker';
import { IProps } from './PromotionWinners.types';

const PromotionWinners: FC<IProps> = ({ winners }) => {
  return (
    <Container id={PromotionDetailsPageSections.winners}>
      <PromotionSectionTitle title='Переможці' />
      <ContentWrap>
        <ElementWrap>
          <ControlsWrap>
            <PromotionPrizeDrawsDatePicker />
            <RegisterCodeLink to={PagePaths.code} isHiddenOnMobile />
          </ControlsWrap>
        </ElementWrap>
        <ElementWrap marginTop={theme.spacing(8)} isTable>
          <PromotionWinnersTable winners={winners} />
        </ElementWrap>
        <ElementWrap marginTop={theme.spacing(12)} isHiddenOnDesk>
          <RegisterCodeLink to={PagePaths.code} />
        </ElementWrap>
      </ContentWrap>
    </Container>
  );
};

export default PromotionWinners;
