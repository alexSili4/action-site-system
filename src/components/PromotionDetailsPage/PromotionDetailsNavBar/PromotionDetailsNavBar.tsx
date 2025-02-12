import { PromotionDetailsPageSections, Symbols } from '@/constants';
import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, List, ListItem } from './PromotionDetailsNavBar.styled';
import { getTranslatedPromotionDetailsPageSectionName } from '@/utils';
// components
import LinkWithQuery from '@GeneralComponents/LinkWithQuery';
import { IProps } from './PromotionDetailsNavBar.types';

const PromotionDetailsNavBar: FC<IProps> = ({
  showPromotionsWinnersNavLink,
  showPromotionsPrizesNavLink,
}) => {
  const sectionIds = Object.values(PromotionDetailsPageSections);
  const { state, hash } = useLocation();

  return (
    <Container>
      <List>
        {sectionIds.map((sectionId) => {
          const title = getTranslatedPromotionDetailsPageSectionName(sectionId);
          const isActive = sectionId === hash.split(Symbols.hash)[1];
          const path = `${Symbols.hash}${sectionId}`;

          const isWinnersSection =
            sectionId === PromotionDetailsPageSections.winners;
          const isPrizesSection =
            sectionId === PromotionDetailsPageSections.prizes;

          const shouldHideWinnersSection =
            isWinnersSection && !showPromotionsWinnersNavLink;
          const shouldHidePrizesSection =
            isPrizesSection && !showPromotionsPrizesNavLink;
          const shouldHideNavLink =
            shouldHidePrizesSection || shouldHideWinnersSection;

          return (
            !shouldHideNavLink && (
              <ListItem key={sectionId} isActive={isActive}>
                <LinkWithQuery to={path} state={state}>
                  {title}
                </LinkWithQuery>
              </ListItem>
            )
          );
        })}
      </List>
    </Container>
  );
};

export default PromotionDetailsNavBar;
