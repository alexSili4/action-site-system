import Container from '@/components/Container';
import NotFound from '@/components/NotFoundError';
import ErrorSection from '@/components/ErrorSection';
import { FC } from 'react';

const NotFoundPage: FC = () => (
  <ErrorSection>
    <Container compactPadding>
      <NotFound />
    </Container>
  </ErrorSection>
);

export default NotFoundPage;
