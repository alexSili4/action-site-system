import styled from '@emotion/styled';

export const Input = styled.input`
  width: 100%;
  height: 48px;
  outline: none;
  border: none;
  border-radius: 12px;
  padding-left: ${({ theme }) => theme.spacing(4)};
  padding-right: ${({ theme }) => theme.spacing(4)};
  background-image: linear-gradient(
    141.74deg,
    rgba(154, 121, 243, 0.15) -38.41%,
    rgba(193, 190, 255, 0.15) 101.342%
  );
  color: #3f3d5c;
  font-family: Geologica;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;

  &::placeholder {
    color: rgba(117, 99, 208, 0.7);
  }
`;
