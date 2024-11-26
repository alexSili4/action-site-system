import { FC } from 'react';
import { ExternalLinks, theme } from '@/constants';
import { List, ListItem } from './SocialLinksList.styled';
import { RiInstagramFill } from 'react-icons/ri';
import { FaTelegramPlane } from 'react-icons/fa';
import { TiSocialFacebook } from 'react-icons/ti';
// components
import SocialLink from '@GeneralComponents/SocialLink';

const SocialLinksList: FC = () => {
  return (
    <List>
      <ListItem>
        <SocialLink
          href={ExternalLinks.facebook}
          icon={TiSocialFacebook}
          iconSize={theme.iconSizes.socialList}
        />
      </ListItem>
      <ListItem>
        <SocialLink
          href={ExternalLinks.instagram}
          icon={RiInstagramFill}
          iconSize={theme.iconSizes.socialList}
        />
      </ListItem>
      <ListItem>
        <SocialLink
          href={ExternalLinks.telegram}
          icon={FaTelegramPlane}
          iconSize={theme.iconSizes.socialList}
        />
      </ListItem>
    </List>
  );
};

export default SocialLinksList;
