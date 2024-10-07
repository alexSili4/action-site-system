const smoothScroll = ({
  id,
  isNearestBlock = false,
}: {
  id: string;
  isNearestBlock?: boolean;
}) => {
  const targetElement = document.getElementById(id);

  targetElement?.scrollIntoView({
    behavior: 'smooth',
    block: isNearestBlock ? 'nearest' : 'start',
  });
};

export default smoothScroll;
