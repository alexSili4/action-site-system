import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing(4)};
`;

export const Header = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  background-color: #f4f6f9;
  padding: ${({ theme: { spacing } }) => `${spacing(3)} ${spacing(4)}`};

  & > svg {
    color: #7e8494;
  }
`;

export const CodeWrap = styled.span`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const Code = styled.span`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.1;
`;

export const Date = styled.span`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.2;
`;

export const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinksWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};

  & > a {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(2)};

    & > svg {
      &:first-of-type {
        width: 14px;
        height: 14px;
      }
    }
  }
`;

export const StyledLinkTitle = styled.span`
  color: #7e8494;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
`;

export const CertificateImg = styled.img`
  width: 94px;
  height: 55px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

export const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  border-top: 1px solid #f4f6f9;
  padding-top: ${({ theme }) => theme.spacing(4)};
`;

export const MessageWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const Message = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
`;
