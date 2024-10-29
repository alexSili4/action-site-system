const enum PagePaths {
  root = '/',
  dynamicParam = 'id',
  dynamicCode = 'code',
  cabinet = '/cabinet',
  promotions = '/promotions',
  serviceUnavailable = '/service-unavailable',
  code = '/code',
  userCode = `${cabinet}/code`,
  userPrize = `${cabinet}/prize`,
}

export default PagePaths;
