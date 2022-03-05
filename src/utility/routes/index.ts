import Route from "lib/router/Route";
import Home from "pages/Home";
import ProductDetails from "pages/ProductDetails";


/**
 * @description ALL PAGES DEFINED HERE
 * @example [name] = new Route<TParams|void>('/path*', 'title of page', Component),
 * @var routes
 */
const routes = {
    home: new Route('/', 'صفحه نخست', Home),
    productInfo: new Route<{ productId: string }>('/products/:productId', 'جزئیات آگهی', ProductDetails),
};

export default routes;