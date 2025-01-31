import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-grow: 1;
    padding: ${({ theme: { spacing } }) => `${spacing(10)} ${spacing(5)}`};
    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding: ${({ theme: { spacing } }) => `${spacing(10)} ${spacing(14)}`};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    padding: ${({ theme: { spacing } }) =>
      `${spacing(6)} ${spacing(5)} ${spacing(8)}`};
    border-radius: 24px;
    background-color: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(30)};
    justify-content: space-between;
    height: 100%;
  }
`;

export const MainInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(9)};
    height: 100%;
  }
`;

export const CodeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(6)};
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > svg {
    width: 47px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    & > svg {
      width: 73px;
    }
  }
`;

export const Title = styled.p`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 24px;
    font-weight: 500;
  }
`;

export const UserCodeInfoDelimiter = styled.div`
  border: 1px solid #f4f6f9;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: none;
  }
`;
