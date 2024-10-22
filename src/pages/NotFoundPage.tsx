import Container from '@GeneralComponents/Container';
import NotFoundError from '@ErrorPageComponents/NotFoundError';
import ErrorSection from '@ErrorPageComponents/ErrorSection';
import { FC } from 'react';

const NotFoundPage: FC = () => (
  <ErrorSection>
    <Container compactPadding>
      <NotFoundError />
    </Container>
  </ErrorSection>
);

export default NotFoundPage;
