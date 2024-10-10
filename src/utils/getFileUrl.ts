const getFileUrl = (fileUrl: string): string => {
  const baseUrl = import.meta.env.VITE_APP_SERVER_URL;

  const bannerDtUrl = `${baseUrl}/img/${fileUrl}`;

  return bannerDtUrl;
};

export default getFileUrl;
