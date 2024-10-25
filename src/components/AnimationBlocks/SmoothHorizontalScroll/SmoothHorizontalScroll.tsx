import { FC, useEffect, useRef } from 'react';
import { IProps } from './SmoothHorizontalScroll.types';
import { Container, ContentWrap } from './SmoothHorizontalScroll.styled';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DivRef } from '@/types/types';
import { useMediaQuery } from '@/hooks';
import { theme } from '@/constants';

gsap.registerPlugin(ScrollTrigger);

const SmoothHorizontalScroll: FC<IProps> = ({
  children,
  deskContentWidth,
  mobileContentWidth,
}) => {
  const isDesktop = useMediaQuery(theme.breakpoints.desktop);
  const sectionRef = useRef<DivRef>(null);

  useEffect(() => {
    const element = sectionRef.current;

    gsap.fromTo(
      element,
      { x: 0 },
      {
        x: -(isDesktop ? deskContentWidth : mobileContentWidth),
        scrollTrigger: {
          trigger: element,
          start: 'top center',
          end: 'bottom',
          scrub: true,
          // pin: true,
          // pinSpacing: false,
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, [deskContentWidth, isDesktop, mobileContentWidth]);

  return (
    <Container>
      <ContentWrap ref={sectionRef}>{children}</ContentWrap>
    </Container>
  );
};

export default SmoothHorizontalScroll;
