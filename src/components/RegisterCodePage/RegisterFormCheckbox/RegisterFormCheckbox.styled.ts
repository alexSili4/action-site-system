import styled from '@emotion/styled';

export const Container = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  cursor: pointer;
`;

export const BasicCheckbox = styled.input`
  position: absolute;
  transform: scale(0);
`;

export const CustomCheckbox = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  aspect-ratio: 1 / 1;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.purple};
  background-color: transparent;
  transition: background-color
    ${({ theme }) => theme.transitionDurationAndFunc.other};

  & > svg {
    color: transparent;
    transition: color ${({ theme }) => theme.transitionDurationAndFunc.other};
  }

  *:has(input:checked) > & {
    background-color: ${({ theme }) => theme.colors.purple};

    & > svg {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
