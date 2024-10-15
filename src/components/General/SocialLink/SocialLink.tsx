import { FC } from 'react';
import { IProps } from './SocialLink.types';
import { Link } from './SocialLink.styled';

const SocialLink: FC<IProps> = ({ href, icon: Icon, iconSize }) => (
  <Link href={href} target='_blank' rel='noopener noreferrer nofollow'>
    <Icon size={iconSize} />
  </Link>
);

export default SocialLink;
