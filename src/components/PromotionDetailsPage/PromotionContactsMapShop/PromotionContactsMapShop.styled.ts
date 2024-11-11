import styled from '@emotion/styled';

export const Container = styled.label`
  display: block;
  padding: ${({ theme }) => theme.spacing(6)};
  transition: background-color
    ${({ theme }) => theme.transitionDurationAndFunc.other};
  cursor: pointer;

  &:is(:hover, :focus, :has(input:checked)) {
    background-color: #9066cc;
  }

  &:is(:hover, :focus, :has(input:checked)) > span > span {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const TitleWrap = styled.span`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing()};
`;

export const Name = styled.span`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc.other};
`;

export const Location = styled.span`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc.other};
`;

export const Address = styled.span`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc.other};
`;

export const WorkSchedule = styled.span`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc.other};
`;

export const RadioBtn = styled.input`
  position: absolute;
  transform: scale(0);
`;
