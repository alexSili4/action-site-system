import Container from '@GeneralComponents/Container';
import { ErrorSection, ServiceUnavailableError } from '@/components/ErrorPage';
import { FC } from 'react';

const ServiceUnavailablePage: FC = () => {
  return (
    <ErrorSection>
      <Container compactPadding>
        <ServiceUnavailableError />
      </Container>
    </ErrorSection>
  );
};

export default ServiceUnavailablePage;
