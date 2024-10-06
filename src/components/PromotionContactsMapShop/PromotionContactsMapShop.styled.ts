import styled from '@emotion/styled';

export const Container = styled.label`
  display: block;
  padding: ${({ theme }) => theme.spacing(6)};
  cursor: pointer;

  &:not(:last-of-type) {
    border-bottom: 1px solid #e3e7ed;
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
`;

export const Address = styled.span`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
`;

export const WorkSchedule = styled.span`
  color: #383e45;
  font-family: ${({ theme }) => theme.fontFamily.geologica};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
`;

export const RadioBtn = styled.input`
  position: absolute;
  transform: scale(0);
`;
