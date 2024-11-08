import { PagePaths } from '@/constants';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IProps } from './GoBackLink.types';

const GoBackLink: FC<IProps> = ({ from, children }) => {
  const goBackLink = from ? from : PagePaths.root;

  return <Link to={goBackLink}>{children}</Link>;
};

export default GoBackLink;
