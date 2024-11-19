import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(15)};
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-size: 24px;
  font-weight: 900;
  line-height: 1.2;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;
`;
