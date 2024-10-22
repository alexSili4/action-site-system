import { FC } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { theme } from '@/constants';
import { Container } from './OpenContentBtnLabel.styled';
import { IProps } from './OpenContentBtnLabel.types';

const OpenContentBtnLabel: FC<IProps> = ({ showContent }) => {
  return (
    <Container showContent={showContent}>
      <FaChevronDown size={theme.iconSizes.faqBtn} />
    </Container>
  );
};

export default OpenContentBtnLabel;
