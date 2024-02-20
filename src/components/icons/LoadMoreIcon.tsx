import { palette } from '@/constants/colors';
import { IoIosArrowDown } from 'react-icons/io';

const LoadMore = () => {
  return (
    <>
      <svg width="0" height="0">
        <linearGradient
          id="gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0.285" stopColor={palette.orange} />
          <stop offset="0.865" stopColor={palette.yellow} />
        </linearGradient>
      </svg>
      <svg width="0" height="0"></svg>
      <IoIosArrowDown size={48} style={{ fill: 'url(#gradient)' }} />
    </>
  );
};

export default LoadMore;
