enum PagePaths {
  root = '/',
  dynamicParam = 'id',
  dynamicPreviewId = 'preview',
  dynamicCode = 'code',
  cabinet = '/cabinet',
  promotions = '/promotions',
  serviceUnavailable = '/service-unavailable',
  code = '/code',
  qr = '/qr',
  userCertificate = `${cabinet}/certificate`,
  userPrize = `${cabinet}/prize`,
  userCode = `${cabinet}/code`,
  promotionDetailsPageExample = `${PagePaths.promotions}/`,
}

export default PagePaths;
