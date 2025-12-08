declare global {
  interface Window {
    dataLayer: Record<string, string | number | null>[];
  }
}

const promoCodeRegistrationSuccess = ({
  promoCode,
  userId,
}: {
  promoCode: string;
  userId: number | null;
}) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'promo_code_registration_success',
    promo_code: promoCode,
    user_id: userId,
    page_url: window.location.href,
  });
  console.log('window.dataLayer: ', window.dataLayer);
};

const promoCodeRegistration = ({
  promoCode,
  userId,
}: {
  promoCode: string;
  userId: number | null;
}) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'promo_code_registration',
    promo_code: promoCode,
    user_id: userId,
    page_url: window.location.href,
  });
  console.log('window.dataLayer: ', window.dataLayer);
};

const citySelected = ({
  cityName,
  cityId,
  userId,
}: {
  cityName: string;
  cityId: number;
  userId: number | null;
}) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'city_selected',
    city_name: cityName,
    city_id: cityId,
    user_id: userId,
    page_url: window.location.href,
  });
  console.log('window.dataLayer: ', window.dataLayer);
};

const promoSelected = ({
  promoName,
  promoId,
  userId,
}: {
  promoName: string;
  promoId: number;
  userId: number | null;
}) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'promo_selected',
    promo_name: promoName,
    promo_id: promoId,
    user_id: userId,
    page_url: window.location.href,
  });
  console.log('window.dataLayer: ', window.dataLayer);
};

export default {
  promoCodeRegistrationSuccess,
  promoCodeRegistration,
  citySelected,
  promoSelected,
};
