import { ThreeDots } from 'react-loader-spinner';
import { WrapperLoader } from './Loader.styled';
import { palette } from '@/constants/colors';

const Loader = () => {
  return (
    <WrapperLoader>
      <ThreeDots
        height="30"
        width="180"
        radius="10"
        color={palette.orange}
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </WrapperLoader>
  );
};

export default Loader;