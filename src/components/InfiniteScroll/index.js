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
      sx={{ p: '16px 32px 0 32px', overflowY: 'auto' }}
      height="calc(100vh - 66px)"
    >
      {children}
      <div ref={listRef} />
    </Box>
  );
}

export default InfiniteScroll;
