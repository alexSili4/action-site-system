import { FC } from 'react';
import PromotionWinnersTable from '@/components/PromotionWinnersTable';
import {
  Container,
  PromotionWinnersTableWrap,
  ContentWrap,
  ElementWrap,
  RegisterCodeLink,
} from './PromotionWinners.styled';
import PromotionSectionTitle from '../PromotionSectionTitle';
import { PagePaths } from '@/constants';

const PromotionWinners: FC = () => {
  return (
    <Container>
      <PromotionSectionTitle title='Переможці' />
      <ContentWrap>
        <ElementWrap>
          <div>
            <div>datePicker</div>
            <RegisterCodeLink to={PagePaths.code}>
              registerCodeLink
            </RegisterCodeLink>
          </div>
        </ElementWrap>
        <ElementWrap isTable>
          <PromotionWinnersTableWrap>
            <PromotionWinnersTable />
          </PromotionWinnersTableWrap>
        </ElementWrap>
        <ElementWrap>
          <RegisterCodeLink to={PagePaths.code}>
            registerCodeLink
          </RegisterCodeLink>
        </ElementWrap>
      </ContentWrap>
    </Container>
  );
};

export default PromotionWinners;
