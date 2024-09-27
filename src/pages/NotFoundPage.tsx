import Container from '@/components/Container';
import NotFoundError from '@/components/NotFoundError';
import ErrorSection from '@/components/ErrorSection';
import { FC } from 'react';

const NotFoundPage: FC = () => (
  <ErrorSection>
    <Container compactPadding>
      <NotFoundError />
    </Container>
  </ErrorSection>
);

export default NotFoundPage;
