import {
  Box, Button, Card, CardMedia, Toolbar, Typography,
} from '@mui/material';
import {
  Await, Link, useLoaderData,
} from 'react-router-dom';
import { Suspense } from 'react';
import BackAppBar from 'components/AppBar/BackAppBar';
import { ManyResultsSkeleton } from 'components/Skeleton';
import { BackIcon } from 'components/Icons';
import { COLOR } from 'theme/variables.ts';

function ResultPanel() {
  const { searchFetcher } = useLoaderData();

  return (
    <>
      <BackAppBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: '0px 20px', sm: '0px 130px' },
          overflowY: 'scroll',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '&-ms-overflow-style:': {
            display: 'none',
          },
        }}
      >
        <Toolbar sx={{ display: { sm: 'none' } }} />
        <Box display="flex" sx={{ m: { xs: '22px 0 0 0', sm: '96px 0 0 7px' } }}>
          <Box
            component={Link}
            to="/home"
            height={26}
            width={0}
            sx={{
              display: { sx: 'none', sm: 'block' }, position: 'relative', left: -50, top: 6,
            }}
          >
            <BackIcon />
          </Box>
          <Typography sx={{ typography: { xs: 'h5', sm: 'h4' } }}>Results</Typography>
        </Box>
        <Suspense fallback={<ManyResultsSkeleton />}>
          <Await resolve={searchFetcher}>
            {(res) => {
              const { data } = res;
              return (
                <>
                  <Box
                    sx={{
                      mt: '24px',
                      display: 'flex',
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      rowGap: '31px',
                    }}
                  >
                    {data.map(({
                      avater, id, name, username,
                    }) => (
                      <Card
                        key={id}
                        sx={{
                          width: { xs: 335, sm: 219 }, height: { xs: 282, sm: 197 }, background: 'transparent', boxShadow: 'none', borderRadius: 0,
                        }}
                      >
                        <CardMedia
                          sx={{
                            height: { xs: 222, sm: 146 },
                            mb: '12px',
                            backgroundColor: COLOR.GREY_6A,
                          }}
                          image={avater}
                        />
                        <Typography sx={{ fontSize: '14.9px' }}>{name}</Typography>
                        <Typography sx={{ fontSize: '11.17px', color: COLOR.GREY_B2 }}>
                          {`by ${username}`}
                        </Typography>
                      </Card>
                    ))}
                  </Box>
                  <Button
                    sx={{
                      width: { xs: '100%', sm: 343 },
                      my: { xs: '50px', sm: '39px' },
                    }}
                  >
                    more
                  </Button>
                </>
              );
            }}
          </Await>
        </Suspense>
      </Box>
    </>
  );
}

export default ResultPanel;
