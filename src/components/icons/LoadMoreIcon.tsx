import { IoIosArrowDown } from 'react-icons/io';

const LoadMore = () => {
  return (
    <>
      <svg width="0" height="0">
        <linearGradient
          id="gradient"
          x1="24.9675"
          y1="21.3096"
          x2="26.8833"
          y2="32.2203"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.385" stop-color="#EA6500" />
          <stop offset="0.965" stop-color="#FFCE20" />
        </linearGradient>
      </svg>
      <IoIosArrowDown size={48} style={{ fill: 'url(#gradient)' }} />
    </>
  );
};

export default LoadMore;
