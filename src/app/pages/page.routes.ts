import { PageRoute } from '@core/modules/custom-router-dom/router.interface';
import articleRoutes from './articles/article.routes';
import homeRoutes from './home/home.routes';
import Page from './Page';

const pageRoutes: PageRoute[] = [
  {
    path: '/',
    element: Page,
    children: [
      ...homeRoutes,
      ...articleRoutes
    ]
  }
];

export default pageRoutes;
