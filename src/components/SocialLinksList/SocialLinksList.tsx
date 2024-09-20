import { FC } from 'react';
import ExternalLinkFooter from '@/components/ExternalLinkFooter';
import { ExternalLinks, theme } from '@/constants';
import { List, ListItem } from './SocialLinksList.styled';
import { RiInstagramFill } from 'react-icons/ri';
import { FaTelegramPlane } from 'react-icons/fa';
import { TiSocialFacebook } from 'react-icons/ti';

const SocialLinksList: FC = () => {
  return (
    <List>
      <ListItem>
        <ExternalLinkFooter
          href={ExternalLinks.facebook}
          icon={TiSocialFacebook}
          iconSize={theme.iconSizes.socialList}
        />
      </ListItem>
      <ListItem>
        <ExternalLinkFooter
          href={ExternalLinks.instagram}
          icon={RiInstagramFill}
          iconSize={theme.iconSizes.socialList}
        />
      </ListItem>
      <ListItem>
        <ExternalLinkFooter
          href={ExternalLinks.telegram}
          icon={FaTelegramPlane}
          iconSize={theme.iconSizes.socialList}
        />
      </ListItem>
    </List>
  );
};

export default SocialLinksList;
