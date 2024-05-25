/* eslint-disable react/prop-types */
import {
  Avatar, Box, Button, List, ListItem, ListItemAvatar, ListItemText,
} from '@mui/material';
import { COLOR } from 'theme/variables.ts';

function FriendPanel({
  value, index, friends: {
    // eslint-disable-next-line no-unused-vars
    data, page, pageSize, total, totalPage,
  },
}) {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      sx={{ px: '16px', py: '32px', overflowY: 'scroll' }}
      height="calc(100vh - 66px)"
    >
        <List>
          {data.map(({
            id, name, username, avater, isFollowing,
          }) => (
            <ListItem key={id} sx={{ height: 45, padding: 0, mb: '16px' }}>
              <ListItemAvatar>
                <Avatar alt={username} src={avater} variant="rounded" sx={{ borderRadius: '5px', border: `1px solid ${COLOR.GREY_F8}` }} />
              </ListItemAvatar>
              <ListItemText primary={name} secondary={username} />
              <Button variant={isFollowing ? 'outlined' : 'contained'}>{isFollowing ? 'Following' : 'Follow'}</Button>
            </ListItem>
          ))}
        </List>
    </Box>
  );
}

export default FriendPanel;
