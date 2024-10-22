import { IUseCsrfToken } from '@/types/hooks.types';

const useCsrfToken = (): IUseCsrfToken => {
  const name =
    document
      .querySelector('meta[name="csrf-param"]')
      ?.getAttribute('content') ?? '';

  const token =
    document
      .querySelector('meta[name="csrf-token"]')
      ?.getAttribute('content') ?? '';

  return { name, token };
};

export default useCsrfToken;
