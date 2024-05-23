import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FriendPanel from 'components/FriendPanel';

function FriendTab() {
  const [value, setValue] = useState(0);
  const { followers, following } = useLoaderData();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      width={375}
      display={{ xs: 'none', sm: 'none', xl: 'block' }}
      pt="20px"
    >
      <Box>
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab label="Followers" />
          <Tab label="Following" />
        </Tabs>
      </Box>
      <FriendPanel value={value} index={0} friends={followers}>
        Followers
      </FriendPanel>
      <FriendPanel value={value} index={1} friends={following}>
        Following
      </FriendPanel>
    </Box>
  );
}

export default FriendTab;
