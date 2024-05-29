import { Box, Tab, Tabs } from '@mui/material';
import { Suspense, useState } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import FriendPanel from 'components/FriendPanel';
import { getFollowersApi, getFollowingApi } from 'api';
import { ManyFriendsSkeleton } from 'components/Skeleton';

function FriendTab() {
  const [value, setValue] = useState(0);
  const { followersFetcher, followingFetcher } = useLoaderData();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      width={375}
      minWidth={375}
      display={{ xs: 'none', sm: 'none', xl: 'block' }}
      pt="20px"
    >
      <Box>
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab label="Followers" />
          <Tab label="Following" />
        </Tabs>
      </Box>
      {value === 0 && (
        <Suspense fallback={<ManyFriendsSkeleton />}>
          <Await resolve={followersFetcher}>
            {(followers) => (
              <FriendPanel value={value} index={0} friends={followers} getApi={getFollowersApi}>
                Followers
              </FriendPanel>
            )}
          </Await>
        </Suspense>
      )}
      {value === 1 && (
        <Suspense fallback={<ManyFriendsSkeleton />}>
          <Await resolve={followingFetcher}>
            {(following) => (
              <FriendPanel value={value} index={1} friends={following} getApi={getFollowingApi}>
                Following
              </FriendPanel>
            )}
          </Await>
        </Suspense>
      )}
    </Box>
  );
}

export default FriendTab;
