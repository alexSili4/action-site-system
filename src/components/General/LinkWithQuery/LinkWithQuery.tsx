import { Link, useLocation } from 'react-router-dom';
import { IProps } from './LinkWithQuery.types';
import { smoothScroll } from '@/utils';
import { Symbols } from '@/constants';
import { AnchorClickEvent } from '@/types/types';
import { useEffect } from 'react';

const LinkWithQuery = ({ children, to, state }: IProps) => {
  const { search } = useLocation();
  const [toPath = '', hash = ''] = to.split(Symbols.hash);

  const path = `${toPath}${search}`;
  const fullPath = hash ? `${path}${Symbols.hash}${hash}` : path;

  useEffect(() => {
    console.log(path);
  }, [path]);

  const onLinkClick = (e: AnchorClickEvent) => {
    const { hash } = e.currentTarget;

    if (!hash) {
      return;
    }

    const sectionId = hash.split(Symbols.hash)[1];
    smoothScroll({ id: sectionId });
  };

  return (
    <Link to={fullPath} state={state} onClick={onLinkClick}>
      {children}
    </Link>
  );
};

export default LinkWithQuery;
