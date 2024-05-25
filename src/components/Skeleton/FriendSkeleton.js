import {
  Box, ListItem, ListItemAvatar, Skeleton,
} from '@mui/material';

function FriendSkeleton() {
  return (
    <ListItem sx={{ height: 45, padding: 0, mb: '16px' }}>
      <ListItemAvatar>
        <Skeleton variant="rectangular" width={40} height={40} sx={{ borderRadius: '5px' }} />
      </ListItemAvatar>
      <Box sx={{ flexGrow: 1 }}>
        <Skeleton width="80%" />
        <Skeleton width="30%" />
      </Box>
      <Skeleton variant="rectangular" width={77} height={30} sx={{ borderRadius: '20px' }} />
    </ListItem>

  );
}

export default FriendSkeleton;
