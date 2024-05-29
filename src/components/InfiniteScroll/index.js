import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { useOnScreen } from 'hooks';

function InfiniteScroll({
  // eslint-disable-next-line react/prop-types
  onLoadMore, isLoading, isEnd, children,
}) {
  const listRef = useRef(null);
  const isOnScreen = useOnScreen(listRef);

  useEffect(() => {
    if (!isLoading && !isEnd && isOnScreen) {
      onLoadMore();
    }
  }, [onLoadMore, isLoading, isEnd, isOnScreen]);

  return (
    <Box
      sx={{
        p: '32px 16px 0 16px',
        overflowY: 'auto',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        '&-ms-overflow-style:': {
          display: 'none',
        },
      }}
      height="calc(100vh - 66px)"
    >
      {children}
      <div ref={listRef} />
    </Box>
  );
}

export default InfiniteScroll;
