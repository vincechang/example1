import ResultSkeleton from 'components/Skeleton/ResultSkeleton';
import { Box } from '@mui/material';

// eslint-disable-next-line react/prop-types
function ManyResultsSkeleton({ nums = 10 }) {
  return (
    <Box sx={{ p: '16px 32px 0 32px' }}>
      {[...Array(nums)].map(() => (<ResultSkeleton />))}
    </Box>
  );
}

export default ManyResultsSkeleton;
