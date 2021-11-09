import { PageRoute } from '@core/modules/custom-router-dom/router.interface';
import ArticleDetail from './containers/ArticleDetail';
import ArticleList from './containers/ArticleList';
import Articles from './containers/Articles';

const articleRoutes: PageRoute[] = [
  {
    path: '/articles',
    element: Articles,
    isProtected: true,
    children: [
      {
        path: '/',
        element: ArticleList
      },
      {
        path: '/:id',
        element: ArticleDetail
      }
    ]
  }
];

export default articleRoutes;
