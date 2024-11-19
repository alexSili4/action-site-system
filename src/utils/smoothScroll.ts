const smoothScroll = ({
  id,
  block = 'start',
}: {
  id: string;
  block?: 'nearest' | 'start' | 'center';
}) => {
  const targetElement = document.getElementById(id);

  targetElement?.scrollIntoView({
    behavior: 'smooth',
    block,
  });
};

export default smoothScroll;
