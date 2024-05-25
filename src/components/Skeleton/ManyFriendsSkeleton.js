import FriendSkeleton from 'components/Skeleton/FriendSkeleton';
import { Box } from '@mui/material';

// eslint-disable-next-line react/prop-types
function ManyFriendsSkeleton({ nums = 10 }) {
  return (
    <Box sx={{ p: '16px 32px 0 32px' }}>
      {[...Array(nums)].map(() => (<FriendSkeleton />))}
    </Box>
  );
}

export default ManyFriendsSkeleton;
