import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: ${({ theme }) => theme.spacing(23)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(22)};
  }
`;

export const ContentWrap = styled.div`
  margin-top: ${({ theme }) => theme.spacing(10)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 848px;
    margin-top: ${({ theme }) => theme.spacing(14)};
    margin-left: auto;
    margin-right: ${({ theme }) => theme.spacing(5)};
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
`;

export const AdditionalIfoWrap = styled.div`
  max-width: 532px;
  margin-top: ${({ theme }) => theme.spacing(10)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    margin-top: ${({ theme }) => theme.spacing(12)};
  }
`;

export const Title = styled.p`
  color: #7e8494;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
`;

export const WorkingHours = styled.p`
  margin-top: ${({ theme }) => theme.spacing(5)};
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
`;

export const PhoneLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(2)};
  padding-left: ${({ theme }) => theme.spacing()};
  color: #383e45;
`;

export const PhoneLinkTitle = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.oswald};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.56;
`;
