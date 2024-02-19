import { DIFFICULTY_LEVEL } from '@/constants';
import { palette } from '@/constants/colors';
import {
    GoStar,
    GoStarFill,
  } from 'react-icons/go';


const renderStars = (difficulty: string) => {
    switch (difficulty) {
      case DIFFICULTY_LEVEL.easy:
        return (
          <>
            <GoStarFill size={20} color={palette.orange} />
            <GoStar size={20} fill={palette.orange} />
            <GoStar size={20} fill={palette.orange} />
          </>
        );
      case DIFFICULTY_LEVEL.moderately:
        return (
          <>
            <GoStarFill size={20} color={palette.orange} />
            <GoStarFill size={20} color={palette.orange} />
            <GoStar size={20} fill={palette.orange} />
          </>
        );
      case DIFFICULTY_LEVEL.hard:
        return (
          <>
            <GoStarFill size={20} color={palette.orange} />
            <GoStarFill size={20} color={palette.orange} />
            <GoStarFill size={20} color={palette.orange} />
          </>
        );
      default:
        return null;
    }
  };

  export default renderStars;