import { Layout } from './../layouts/Layout';
import { Home } from './../pages/Home';
import { About } from './../pages/About';
import { NotFound } from './../pages/NotFound';
import { Tokyo } from './../pages/Tokyo';
import { Osaka } from './../pages/Osaka';
import { Hokkaido } from './../pages/Hokkaido';
import { Nagoya } from './../pages/Nagoya';
import { London } from './../pages/London';
import { Search } from './../pages/Search';

export const routeData = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'tokyo',
        element: <Tokyo />,
      },
      {
        path: 'osaka',
        element: <Osaka />,
      },
      {
        path: 'hokkaido',
        element: <Hokkaido />,
      },
      {
        path: 'nagoya',
        element: <Nagoya />,
      },
      {
        path: 'london',
        element: <London />,
      },
      {
        path: 'search',
        element: <Search />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
