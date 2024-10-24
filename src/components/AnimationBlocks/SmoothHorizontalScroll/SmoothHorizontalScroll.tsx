import { FC, useEffect, useRef, useState } from 'react';
import { Container } from './SmoothHorizontalScroll.styled';
import { IProps } from './SmoothHorizontalScroll.types';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { DivRef } from '@/types/types';

const SmoothHorizontalScroll: FC<IProps> = ({ children }) => {
  const [horizontalTranslate, setHorizontalTranslate] = useState<number>(0);
  const container = useRef<DivRef>(null);
  const content = useRef<DivRef>(null);

  const { scrollYProgress } = useScroll();
  const isInView = useInView(container);

  useEffect(() => {
    const contentWidth = content.current?.scrollWidth;
    const containerWidth = container.current?.clientWidth;

    if (contentWidth && containerWidth) {
      setHorizontalTranslate(contentWidth - containerWidth);
    }
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -horizontalTranslate]);

  return (
    <Container ref={container}>
      <motion.div style={{ x: isInView ? x : 0 }} ref={content}>
        {children}
      </motion.div>
    </Container>
  );
};

export default SmoothHorizontalScroll;
