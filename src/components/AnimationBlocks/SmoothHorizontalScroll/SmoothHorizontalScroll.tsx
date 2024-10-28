import { FC,  useLayoutEffect, useRef } from 'react';
import { IProps } from './SmoothHorizontalScroll.types';
import { Container, ContentWrap } from './SmoothHorizontalScroll.styled';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DivRef } from '@/types/types';

const SmoothHorizontalScroll: FC<IProps> = ({ children, contentWidth }) => {
  const sectionRef = useRef<DivRef>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const element = sectionRef.current;

    gsap.fromTo(
      element,
      { x: 0 },
      {
        x: -contentWidth,
        scrollTrigger: {
          trigger: element,
          start: 'top center',
          end: 'top',
          scrub: true,
          // pin: true,
          // pinSpacing: false,
        },
      }
    );
  }, [contentWidth]);

  return (
    <Container>
      <ContentWrap ref={sectionRef}>{children}</ContentWrap>
    </Container>
  );
};

export default SmoothHorizontalScroll;
