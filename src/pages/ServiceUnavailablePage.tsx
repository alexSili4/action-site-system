import Container from '@/components/Container';
import ErrorSection from '@/components/ErrorSection';
import ServiceUnavailableError from '@/components/ServiceUnavailableError';
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
