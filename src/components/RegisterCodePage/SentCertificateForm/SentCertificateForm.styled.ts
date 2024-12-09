import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin-top: ${({ theme }) => theme.spacing(15)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(4)};
    width: 447px;
    margin-top: ${({ theme }) => theme.spacing(32)};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(10)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(8)};
  }
`;

export const InputWrap = styled.label`
  position: relative;
`;

export const LabelWrap = styled.span`
  position: absolute;
  top: -11px;
  left: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  padding-left: ${({ theme }) => theme.spacing()};
  padding-right: ${({ theme }) => theme.spacing()};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    left: 17px;
  }
`;

export const Label = styled.span`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  border: 1px solid #e3e7ed;
  border-radius: 8px;
  padding-left: ${({ theme }) => theme.spacing(4)};
  padding-right: ${({ theme }) => theme.spacing(4)};
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.57;
  outline: none;

  &::placeholder {
    color: #7e8494;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    height: 56px;
    font-size: 16px;
  }
`;

export const CertificateInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const CertificateInfo = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
`;

export const SentCertificateCheckboxTitle = styled.span`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
`;
