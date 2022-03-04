import Route from "lib/router/Route";
import Home from "pages/Home";


/**
 * @description ALL PAGES DEFINED HERE
 * @example [name] = new Route<TParams|void>('/path*', 'title of page', Component),
 * @var routes
 */
const routes = {
    home: new Route('/', 'صفحه نخست', Home),
    
};

export default routes;