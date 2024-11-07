const enum PagePaths {
  root = '/',
  dynamicParam = 'id',
  dynamicCode = 'code',
  cabinet = '/cabinet',
  promotions = '/promotions',
  serviceUnavailable = '/service-unavailable',
  code = '/code',
  userCertificate = `${cabinet}/certificate`,
  userPrize = `${cabinet}/prize`,
  userCode = `${cabinet}/code`,
  promotionDetailsPageExample = `${PagePaths.promotions}/`,
}

export default PagePaths;
