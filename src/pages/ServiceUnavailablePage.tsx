import Container from '@GeneralComponents/Container';
import ErrorSection from '@ErrorPageComponents/ErrorSection';
import ServiceUnavailableError from '@ErrorPageComponents/ServiceUnavailableError';
import { FC, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { generalSettings, PagePaths } from '@/constants';
import { ServiceUnavailableState } from '@/types/serviceUnavailableState.types';

const ServiceUnavailablePage: FC = () => {
  const { state }: ServiceUnavailableState = useLocation();

  const shouldRedirect = !state?.isError;

  const redirectPath = state?.from ?? PagePaths.root;

  useEffect(() => {
    console.log('state:', state);
  });

  const errorMessage =
    state?.errorMessage || generalSettings.defaultErrorMessage;

  return shouldRedirect ? (
    <Navigate to={redirectPath} />
  ) : (
    <ErrorSection>
      <Container compactPadding>
        <ServiceUnavailableError errorMessage={errorMessage} />
      </Container>
    </ErrorSection>
  );
};

export default ServiceUnavailablePage;
