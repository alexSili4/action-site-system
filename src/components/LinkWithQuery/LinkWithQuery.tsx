import { Link, useLocation } from 'react-router-dom';
import { IProps } from './LinkWithQuery.types';
import { smoothScroll } from '@/utils';
import { Symbols } from '@/constants';
import { AnchorClickEvent } from '@/types/types';

const LinkWithQuery = ({ children, to, state }: IProps) => {
  const { search } = useLocation();
  const [toPath = '', hash = ''] = to.split(Symbols.hash);
  const path = `${toPath}${search}${Symbols.hash}${hash}`;

  const onLinkClick = (e: AnchorClickEvent) => {
    const { hash } = e.currentTarget;

    if (!hash) {
      return;
    }

    const sectionId = hash.split(Symbols.hash)[1];
    smoothScroll({ id: sectionId });
  };

  return (
    <Link to={path} state={state} onClick={onLinkClick}>
      {children}
    </Link>
  );
};

export default LinkWithQuery;
