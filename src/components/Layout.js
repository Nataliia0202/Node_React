import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar';
import { Box } from './Box';
import { Loading } from './Loading';
import { Footer } from './Footer/Footer';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loading />}>
        <Box as="main" mx="auto" mb={5} maxWidth="1280px" height="100%">
          <Outlet />
        </Box>
      </Suspense>
      <Footer />
    </>
  );
};
