/* eslint-disable react/prop-types */
import {
  Avatar, Button, List, ListItem, ListItemAvatar, ListItemText,
} from '@mui/material';
import useSWRInfinite from 'swr/infinite';
import { COLOR } from 'theme/variables.ts';
import InfiniteScroll from 'components/InfiniteScroll';
import fetcher from 'api';
import { FriendSkeleton } from 'components/Skeleton';

function FriendPanel({
  getApi, friends: {
    // eslint-disable-next-line no-unused-vars
    data: initialList, page: pageProp, pageSize, total, totalPages,
  },
}) {
  const {
    data: fetchedData,
    size: page,
    setSize: setPage,
    isValidating,
  } = useSWRInfinite(
    (p) => getApi(p + 1, pageSize),
    fetcher,
  );

  const list = fetchedData ? fetchedData.flatMap(({ data }) => [...data]) : initialList;

  return (
    <List sx={{ p: 0 }}>
      <InfiniteScroll
        onLoadMore={() => setPage(page + 1)}
        isLoading={isValidating}
        isEnd={page === totalPages}
      >
        {list.map(({
          id, name, username, avater, isFollowing,
        }) => (
          <ListItem key={id} sx={{ height: 45, padding: 0, mb: '16px' }}>
            <ListItemAvatar>
              <Avatar alt={username} src={avater} variant="rounded" sx={{ borderRadius: '5px', border: `1px solid ${COLOR.GREY_F8}` }} />
            </ListItemAvatar>
            <ListItemText
              primary={name}
              secondary={username}
              sx={{
                overflow: 'hidden',
                whiteSpace: 'nowrap',
              }}
            />
            <Button variant={isFollowing ? 'contained' : 'outlined'}>{isFollowing ? 'Following' : 'Follow'}</Button>
          </ListItem>
        ))}
        {isValidating && [...Array(pageSize)].map(() => (
          <FriendSkeleton />
        ))}
      </InfiniteScroll>
    </List>
  );
}

export default FriendPanel;
