import Container from '@GeneralComponents/Container';
import ErrorSection from '@ErrorPageComponents/ErrorSection';
import ServiceUnavailableError from '@ErrorPageComponents/ServiceUnavailableError';

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
