import styled from '@emotion/styled';

export const Message = styled.p`
  color: #ff6363;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet - 1}px) {
    margin-top: ${({ theme }) => theme.spacing(3)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    position: absolute;
    top: calc(100% + 12px);
    left: 0;
  }
`;
