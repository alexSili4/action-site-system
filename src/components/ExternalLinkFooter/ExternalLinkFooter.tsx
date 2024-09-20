import { FC } from 'react';
import { IProps } from './ExternalLinkFooter.types';
import { Link } from './ExternalLinkFooter.styled';

const ExternalLinkFooter: FC<IProps> = ({ href, icon: Icon, iconSize }) => (
  <Link href={href} target='_blank' rel='noopener noreferrer nofollow'>
    <Icon size={iconSize} />
  </Link>
);

export default ExternalLinkFooter;
