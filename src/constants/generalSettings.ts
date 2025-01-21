const generalSettings = {
  regCodeLength: 12,
  regCodeErrSeparator: '. ',
  authLink: `${import.meta.env.VITE_APP_SERVER_URL}/oidcauth?authclient=oidc`,
  coordinatesSeparator: ',',
  mainMapZoom: 18,
  defaultDataText: 'дані очікуються',
  defaultErrorMessage: 'Сервіс тимчасово недоступний',
};

export default generalSettings;
