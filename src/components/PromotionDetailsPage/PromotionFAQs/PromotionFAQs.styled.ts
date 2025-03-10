import styled from '@emotion/styled';

export const Container = styled.div`
  padding-left: ${({ theme }) => theme.spacing(4)};
  padding-right: ${({ theme }) => theme.spacing(4)};
  margin-top: ${({ theme }) => theme.spacing(12)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-left: ${({ theme }) => theme.spacing(8)};
    padding-right: ${({ theme }) => theme.spacing(8)};
    margin-top: ${({ theme }) => theme.spacing(20)};
  }
`;

export const ContentWrap = styled.div`
  margin-top: ${({ theme }) => theme.spacing(8)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin-top: ${({ theme }) => theme.spacing(14)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
`;

export const AdditionalIfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
  margin-top: ${({ theme }) => theme.spacing(10)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin-top: ${({ theme }) => theme.spacing(12)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-left: ${({ theme }) => theme.spacing(23)};
    padding-right: ${({ theme }) => theme.spacing(23)};
  }
`;

export const AdditionalIfoText = styled.p`
  color: #7e8494;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
`;

export const PhoneLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
  border-radius: 8px;
  background-color: #f4f6f9;
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(6)}`};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    align-self: flex-start;
    padding: ${({ theme }) => theme.spacing(2)};
  }
`;

export const PhoneLinkTitle = styled.span`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4;
`;

export const PhoneLinkIconWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;

  & > svg {
    color: #7e8494;
  }
`;
