import { FC } from 'react';
import { Watch } from 'react-loader-spinner';

const Loader: FC = () => (
  <Watch
    visible={true}
    height='80'
    width='80'
    radius='48'
    color='#9066cc'
    ariaLabel='watch-loading'
    wrapperStyle={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: '1',
    }}
  />
);

export default Loader;
