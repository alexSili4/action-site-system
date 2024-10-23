const redirectTo = (newUrl: string) => {
  console.log(newUrl);

  history.pushState(
    { path: 'https://atbactionsystem.sunagency.space/promotions?city-id=375' },
    '',
    'https://atbactionsystem.sunagency.space/promotions?city-id=375'
  );
};

export default redirectTo;
