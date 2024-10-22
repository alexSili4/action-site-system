const useCsrfToken = (): string => {
  const csrfToken =
    document
      .querySelector('meta[name="csrf-token"]')
      ?.getAttribute('content') ?? '';

  return csrfToken;
};

export default useCsrfToken;
