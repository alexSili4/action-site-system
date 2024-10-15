import { Container } from '@/components/General';
import { NotFoundError, ErrorSection } from '@/components/ErrorPage';
import { FC } from 'react';

const NotFoundPage: FC = () => (
  <ErrorSection>
    <Container compactPadding>
      <NotFoundError />
    </Container>
  </ErrorSection>
);

export default NotFoundPage;
