import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: ${({ theme: { spacing } }) =>
    `${spacing(6)} ${spacing(5)} ${spacing(8)}`};
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const TitleWrap = styled.div``;

export const Title = styled.p``;

export const PartnerLogo = styled.img``;

export const DetailsWrap = styled.div``;

export const PromotionWrap = styled.div``;

export const StyledLink = styled(Link)``;

export const ExpirationDateWrap = styled.div``;

export const Subtitle = styled.p``;

export const Info = styled.p``;

export const PartnerWrap = styled.div``;

export const PromotionCodeWrap = styled.div``;

export const ConditionsWrap = styled.div``;

export const ConditionsTitle = styled.p``;

export const ConditionsInfo = styled.p``;

export const HotlineInfoWrap = styled.div``;

export const HotlineInfo = styled.p``;

export const HotlinePhone = styled.a``;

export const HotlinePhoneNumber = styled.span``;
