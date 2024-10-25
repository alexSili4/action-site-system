import { FC, useLayoutEffect, useRef } from 'react';
import { Container, ContentWrap } from './SmoothHorizontalScroll.styled';
import { IProps } from './SmoothHorizontalScroll.types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DivRef } from '@/types/types';

gsap.registerPlugin(ScrollTrigger);

const SmoothHorizontalScroll: FC<IProps> = ({ children }) => {
  const contentRef = useRef<DivRef>(null);

  useLayoutEffect(() => {
    const content = contentRef.current;

    gsap.fromTo(
      content,
      { translateX: 0 },
      {
        translateX: '-90%',
        scrollTrigger: {
          trigger: content,
          start: 'top-=50px center',
          end: 'bottom-=200px',
          scrub: true,
          markers: true,
        },
      }
    );
  }, []);

  return (
    <Container>
      <ContentWrap ref={contentRef}>{children}</ContentWrap>
    </Container>
  );
};

export default SmoothHorizontalScroll;
