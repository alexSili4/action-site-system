import { PromotionDetailsPageSections, Symbols } from '@/constants';
import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import LinkWithQuery from '../LinkWithQuery';

const PromotionDetailsNavBar: FC = () => {
  const sectionIds = Object.values(PromotionDetailsPageSections);
  const location = useLocation();

  return (
    <ul>
      {sectionIds.map((sectionId) => (
        <li key={sectionId}>
          <LinkWithQuery
            to={`${Symbols.hash}${sectionId}`}
            state={location.state}
          >
            {sectionId}
          </LinkWithQuery>
        </li>
      ))}
    </ul>
  );
};

export default PromotionDetailsNavBar;
