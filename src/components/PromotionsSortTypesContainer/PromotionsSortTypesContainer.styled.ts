import { theme } from '@/constants';
import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  width: 173px;

  @media (max-width: ${theme.breakpoints.desktop - 1}px) {
    display: none;
  }
`;

export const ShowSortTypesBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  padding: 0;
  padding-left: ${({ theme }) => theme.spacing(6)};
  padding-right: ${({ theme }) => theme.spacing(6)};

  & > svg {
    color: #7e8494;
    transition: transform ${({ theme }) => theme.transitionDurationAndFunc};
  }

  &:is(:hover, :focus) > svg {
    transform: rotate(180deg);
  }
`;

export const BtnTitle = styled.span`
  color: #7e8494;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  text-align: left;
`;
