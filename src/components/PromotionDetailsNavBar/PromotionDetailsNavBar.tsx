import { PromotionDetailsPageSections, Symbols } from '@/constants';
import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import LinkWithQuery from '../LinkWithQuery';
import { Container, List, ListItem } from './PromotionDetailsNavBar.styled';
import { getTranslatedPromotionDetailsPageSectionName } from '@/utils';

const PromotionDetailsNavBar: FC = () => {
  const sectionIds = Object.values(PromotionDetailsPageSections);
  const { state, hash } = useLocation();

  return (
    <Container>
      <List>
        {sectionIds.map((sectionId) => {
          const title = getTranslatedPromotionDetailsPageSectionName(sectionId);
          const isActive = sectionId === hash.split(Symbols.hash)[1];
          const path = `${Symbols.hash}${sectionId}`;

          return (
            <ListItem key={sectionId} isActive={isActive}>
              <LinkWithQuery to={path} state={state}>
                {title}
              </LinkWithQuery>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default PromotionDetailsNavBar;
