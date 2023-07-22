import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ComponentView from "../views/app/componentView";
import ServiceIntroduction from "../views/serviceIntroduction/serviceIntroduction";
import Volunteers from "../views/volunteers/volunteers";

export const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    children: [
      { path: 'volunteers', element: <Volunteers /> },
      { path: 'serviceStory', element: <ServiceIntroduction /> },
    ]
  },
  { path: '/components', element: <ComponentView /> },
])