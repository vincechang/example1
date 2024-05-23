import { Box } from '@mui/material';

// eslint-disable-next-line react/prop-types
function FriendPanel({ value, index }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`friend-tabpanel-${index}`}
    >
      {value === index && (
        <Box>
          {value}
        </Box>
      )}
    </div>
  );
}

export default FriendPanel;
