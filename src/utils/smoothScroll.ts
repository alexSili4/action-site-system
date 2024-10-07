const smoothScroll = (id: string) => {
  const targetElement = document.getElementById(id);

  targetElement?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
};

export default smoothScroll;
