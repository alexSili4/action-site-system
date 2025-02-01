import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { IStyledTextWrapProps } from './SuccessRegisterCodeMsg.types';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    align-items: center;
    gap: ${({ theme }) => theme.spacing(20)};
    padding: ${({ theme: { spacing } }) =>
      `${spacing(29)} ${spacing(5)} ${spacing(12)}`};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(8)};
`;

export const Message = styled.p`
  max-width: 484px;
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  text-align: center;
`;

export const MessagePart = styled.span``;

export const TextWrap = styled.br<IStyledTextWrapProps>`
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: ${({ isHiddenOnDesk }) => isHiddenOnDesk && 'none'};
  }
`;

export const AdditionalInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(13)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 447px;
  }
`;

export const CabinetLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  border-radius: 16px;
  box-shadow: inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1),
    3px 3px 0px 0px #7a4ebd;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0) 100%
  );
  background-color: #9066cc;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc.other};

  &:is(:hover, :focus) {
    box-shadow: inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1),
      1px 1px 0px 0px #7a4ebd;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    height: 54px;
  }
`;

export const Text = styled.p`
  color: #7e8494;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 439px;
  }
`;
