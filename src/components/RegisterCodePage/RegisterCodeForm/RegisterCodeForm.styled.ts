import styled from '@emotion/styled';
import {
  IStyledProps,
  IStyledRegisterFormCheckboxLinkProps,
} from './RegisterCodeForm.types';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(12)};
    margin-top: ${({ theme }) => theme.spacing(15)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 447px;
    margin-top: ${({ theme }) => theme.spacing(32)};
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(8)};
  }
`;

export const CodeInputWrap = styled.div`
  position: relative;
`;

export const InputWrap = styled.div<IStyledProps>`
  display: flex;
  border-radius: 8px;
  outline: 5px solid
    ${({ isError }) => (isError ? '#ffecec' : 'rgba(193, 190, 255, 0.3)')};
`;

export const LabelWrap = styled.div`
  position: absolute;
  left: 9px;
  bottom: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding-left: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(2)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    left: 17px;
    bottom: calc(100% - 3px);
  }
`;

export const Label = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 14px;
  }
`;

export const InputDelimiterWrap = styled.div<IStyledProps>`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid;
  border-right: 1px solid;
  border-color: ${({ isError }) => (isError ? '#ffecec' : '#e6e5f8')};
`;

export const InputDelimiter = styled.div`
  width: 6px;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const AcceptedTermsWrap = styled.div``;

export const RegisterFormCheckboxTitle = styled.span`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
`;

export const RegisterFormCheckboxLink = styled.a<IStyledRegisterFormCheckboxLinkProps>`
  color: ${({ disabledLink, theme }) =>
    disabledLink ? 'inherit' : theme.colors.purple};
  pointer-events: ${({ disabledLink }) => disabledLink && 'none'};
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};
`;
