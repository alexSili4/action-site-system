import { FC, useLayoutEffect, useRef } from 'react';
import { Container, ContentWrap } from './SmoothHorizontalScroll.styled';
import { IProps } from './SmoothHorizontalScroll.types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SmoothHorizontalScroll: FC<IProps> = ({ children }) => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const element = sectionRef.current;

    gsap.fromTo(
      element,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top center',
          end: 'bottom',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <Container>
      <ContentWrap ref={sectionRef}>{children}</ContentWrap>
    </Container>
  );
};

export default SmoothHorizontalScroll;
