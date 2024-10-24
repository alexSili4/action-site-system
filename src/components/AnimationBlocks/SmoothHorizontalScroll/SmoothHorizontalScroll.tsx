import { FC, useEffect, useRef, useState } from 'react';
import { Container, ContentWrap } from './SmoothHorizontalScroll.styled';
import { IProps } from './SmoothHorizontalScroll.types';
import { DivRef } from '@/types/types';

const SmoothHorizontalScroll: FC<IProps> = ({ children }) => {
  const [horizontalTranslate, setHorizontalTranslate] = useState<number>(0);
  const container = useRef<DivRef>(null);
  const content = useRef<DivRef>(null);

  useEffect(() => {
    const contentWidth = content.current?.scrollWidth;
    const containerWidth = container.current?.clientWidth;

    if (contentWidth && containerWidth) {
      setHorizontalTranslate(contentWidth - containerWidth);
    }
  }, []);

  return (
    <Container ref={container}>
      <ContentWrap ref={content}>{children}</ContentWrap>
    </Container>
  );
};

export default SmoothHorizontalScroll;
