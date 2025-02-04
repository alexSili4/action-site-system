import styled from '@emotion/styled';

export const Image = styled.img`
  position: absolute;
  top: -6px;
  right: -6px;
  width: 206px;
  aspect-ratio: 1 / 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    top: -7px;
    right: -8px;
    width: 293px;
  }
`;
