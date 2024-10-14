import { FC } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { theme } from '@/constants';
import { Container } from './OpenContentBtnLabel.styled';

const OpenContentBtnLabel: FC = () => {
  return (
    <Container>
      <FaChevronDown size={theme.iconSizes.faqBtn} />
    </Container>
  );
};

export default OpenContentBtnLabel;
