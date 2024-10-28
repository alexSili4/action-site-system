import { FC } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { theme } from '@/constants';
import { Container } from './OpenContentBtnLabel.styled';
import { IProps } from './OpenContentBtnLabel.types';

const OpenContentBtnLabel: FC<IProps> = ({ showContent, disabled = false }) => {
  return (
    <Container showContent={showContent} disabled={disabled}>
      <FaChevronDown size={theme.iconSizes.faqBtn} />
    </Container>
  );
};

export default OpenContentBtnLabel;
