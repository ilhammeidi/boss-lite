import { App, Dashboard, Outer } from './../components';
// Dashboard
import DashboardV1 from './Dashboard/Dashboard';
import DashboardV2 from './Dashboard/DashboardV2';
// Layouts
import Grid from './Layouts/Grid';
import AppLayout from './Layouts/AppLayout';
import Responsive from './Layouts/Responsive';
// Themes
import Themes from './Themes';
// Tables
import SimpleTable from './Tables/BasicTable';
import AdvancedTable from './Tables/AdvancedTable';
import TreeTable from './Tables/TreeTable';
import CrudTable from './Tables/CrudTable';
import TablePlayground from './Tables/TablePlayground';
// Forms
import ReduxForm from './Forms/ReduxForm';
import DateTimePicker from './Forms/DateTimePicker';
import CheckboxRadio from './Forms/CheckboxRadio';
import Switches from './Forms/Switches';
import Selectbox from './Forms/Selectbox';
import Rating from './Forms/Rating';
import SliderRange from './Forms/SliderRange';
import Buttons from './Forms/Buttons';
import Textbox from './Forms/Textbox';
import Autocomplete from './Forms/Autocomplete';
import TextEditor from './Forms/TextEditor';
import Upload from './Forms/Upload';
// UI Components
import Badges from './UiElements/Badges';
import Avatars from './UiElements/Avatars';
import Accordion from './UiElements/Accordion';
import List from './UiElements/List';
import PopoverTooltip from './UiElements/PopoverTooltip';
import Notification from './UiElements/Notification';
import Typography from './UiElements/Typography';
import Tabs from './UiElements/Tabs';
import Cards from './UiElements/Cards';
import ImageGrid from './UiElements/ImageGrid';
import Progress from './UiElements/Progress';
import DialogModal from './UiElements/DialogModal';
import Steppers from './UiElements/Steppers';
import DrawerMenu from './UiElements/DrawerMenu';
import Paginations from './UiElements/Paginations';
import Breadcrumbs from './UiElements/Breadcrumbs';
import SliderCarousel from './UiElements/SliderCarousel';
import Tags from './UiElements/Tags';
import Dividers from './UiElements/Dividers';
// Chart
import LineCharts from './Charts/LineCharts';
import BarCharts from './Charts/BarCharts';
import AreaCharts from './Charts/AreaCharts';
import PieCharts from './Charts/PieCharts';
import RadarCharts from './Charts/RadarCharts';
import ScatterCharts from './Charts/ScatterCharts';
import CompossedCharts from './Charts/CompossedCharts';
import ResponsiveCharts from './Charts/ResponsiveCharts';
// Pages
import Login from './Pages/Users/Login';
import Register from './Pages/Users/Register';
import Profile from './Pages/UserProfile';
import SocialMedia from './Pages/SocialMedia';
import BlankPage from './Pages/BlankPage';
import Ecommerce from './Pages/Ecommerce';
import Contact from './Pages/Contact';
import ResetPassword from './Pages/Users/ResetPassword';
import LockScreen from './Pages/Users/LockScreen';
import Chat from './Pages/Chat';
import Email from './Pages/Email';
import Photos from './Pages/Photos';
import Calendar from './Pages/Calendar';
import LoginDedicated from './Pages/Standalone/LoginDedicated';
// Maps
import MapMarker from './Maps/MapMarker';
import MapDirection from './Maps/MapDirection';
import SearchMap from './Maps/SearchMap';
import TrafficIndicator from './Maps/TrafficIndicator';
import StreetViewMap from './Maps/StreetViewMap';
// Other
import NotFound from './NotFound/NotFound';
import NotFoundDedicated from './Pages/Standalone/NotFoundDedicated';
import Error from './Pages/Error';
import Maintenance from './Pages/Maintenance';
import Parent from './Parent';

import withTracker from './withTracker';

export default (store) => { // eslint-disable-line
  // we can get an access to store
  return [{
    component: withTracker(App),
    routes: [
      {
        component: withTracker(LoginDedicated),
        path: '/',
        exact: true,
      },
      {
        component: withTracker(Outer),
        path: '/login',
        routes: [
          {
            path: '/login',
            component: withTracker(Login),
            exact: true,
          },
          {
            path: '*',
            component: withTracker(NotFound)
          }
        ]
      },
      {
        component: withTracker(Outer),
        path: '/register',
        routes: [
          {
            path: '/register',
            component: withTracker(Register),
            exact: true,
          },
          {
            path: '*',
            component: withTracker(NotFound)
          }
        ]
      },
      {
        component: withTracker(Outer),
        path: '/reset-password',
        routes: [
          {
            path: '/reset-password',
            component: withTracker(ResetPassword),
            exact: true,
          },
          {
            path: '*',
            component: withTracker(NotFound)
          }
        ]
      },
      {
        component: withTracker(Outer),
        path: '/lock-screen',
        routes: [
          {
            path: '/lock-screen',
            component: withTracker(LockScreen),
            exact: true,
          },
          {
            path: '*',
            component: withTracker(NotFound)
          }
        ]
      },
      {
        component: withTracker(Outer),
        path: '/maintenance',
        routes: [
          {
            path: '/maintenance',
            component: withTracker(Maintenance),
            exact: true,
          },
          {
            path: '*',
            component: withTracker(NotFound)
          }
        ]
      },
      {
        component: withTracker(Dashboard),
        path: '/app',
        routes: [
          {
            path: '/app',
            component: withTracker(DashboardV1),
            exact: true,
          },
          {
            path: '/app/dashboard-v2',
            component: withTracker(DashboardV2),
          },
          {
            path: '/app/layouts',
            component: withTracker(Parent),
            exact: true,
          },
          {
            path: '/app/layouts/grid',
            component: withTracker(Grid),
          },
          {
            path: '/app/layouts/app-layout',
            component: withTracker(AppLayout),
          },
          {
            path: '/app/layouts/responsive',
            component: withTracker(Responsive),
          },
          {
            path: '/app/themes',
            component: withTracker(Themes),
          },
          {
            path: '/app/tables',
            component: withTracker(Parent),
            exact: true,
          },
          {
            path: '/app/tables/basic-table',
            component: withTracker(SimpleTable),
          },
          {
            path: '/app/tables/data-table',
            component: withTracker(AdvancedTable),
          },
          {
            path: '/app/tables/tree-table',
            component: withTracker(TreeTable),
          },
          {
            path: '/app/tables/crud-table',
            component: withTracker(CrudTable),
          },
          {
            path: '/app/tables/table-playground',
            component: withTracker(TablePlayground),
          },
          {
            path: '/app/forms',
            component: withTracker(Parent),
            exact: true,
          },
          {
            path: '/app/forms/reduxform',
            component: withTracker(ReduxForm),
          },
          {
            path: '/app/forms/datetimepicker',
            component: withTracker(DateTimePicker),
          },
          {
            path: '/app/forms/checkbox-radio',
            component: withTracker(CheckboxRadio),
          },
          {
            path: '/app/forms/switches',
            component: withTracker(Switches),
          },
          {
            path: '/app/forms/selectbox',
            component: withTracker(Selectbox),
          },
          {
            path: '/app/forms/ratting',
            component: withTracker(Rating),
          },
          {
            path: '/app/forms/slider-range',
            component: withTracker(SliderRange),
          },
          {
            path: '/app/forms/buttons',
            component: withTracker(Buttons),
          },
          {
            path: '/app/forms/textfields',
            component: withTracker(Textbox),
          },
          {
            path: '/app/forms/autocomplete',
            component: withTracker(Autocomplete),
          },
          {
            path: '/app/forms/wysiwyg-editor',
            component: withTracker(TextEditor),
          },
          {
            path: '/app/forms/upload',
            component: withTracker(Upload),
          },
          {
            path: '/app/ui',
            component: withTracker(Parent),
            exact: true,
          },
          {
            path: '/app/ui/avatars',
            component: withTracker(Avatars),
          },
          {
            path: '/app/ui/accordion',
            component: withTracker(Accordion),
          },
          {
            path: '/app/ui/badges',
            component: withTracker(Badges),
          },
          {
            path: '/app/ui/list',
            component: withTracker(List),
          },
          {
            path: '/app/ui/popover-tooltip',
            component: withTracker(PopoverTooltip),
          },
          {
            path: '/app/ui/notification',
            component: withTracker(Notification),
          },
          {
            path: '/app/ui/typography',
            component: withTracker(Typography),
          },
          {
            path: '/app/ui/tabs',
            component: withTracker(Tabs),
          },
          {
            path: '/app/ui/card-papper',
            component: withTracker(Cards),
          },
          {
            path: '/app/ui/image-grid',
            component: withTracker(ImageGrid),
          },
          {
            path: '/app/ui/progress',
            component: withTracker(Progress),
          },
          {
            path: '/app/ui/dialog-modal',
            component: withTracker(DialogModal),
          },
          {
            path: '/app/ui/steppers',
            component: withTracker(Steppers),
          },
          {
            path: '/app/ui/paginations',
            component: withTracker(Paginations),
          },
          {
            path: '/app/ui/drawer-menu',
            component: withTracker(DrawerMenu),
          },
          {
            path: '/app/ui/breadcrumbs',
            component: withTracker(Breadcrumbs),
          },
          {
            path: '/app/ui/slider-carousel',
            component: withTracker(SliderCarousel),
          },
          {
            path: '/app/ui/tags',
            component: withTracker(Tags),
          },
          {
            path: '/app/ui/dividers',
            component: withTracker(Dividers),
          },
          {
            path: '/app/charts',
            component: withTracker(Parent),
            exact: true,
          },
          {
            path: '/app/charts/line-charts',
            component: withTracker(LineCharts),
          },
          {
            path: '/app/charts/bar-charts',
            component: withTracker(BarCharts),
          },
          {
            path: '/app/charts/area-charts',
            component: withTracker(AreaCharts),
          },
          {
            path: '/app/charts/pie-charts',
            component: withTracker(PieCharts),
          },
          {
            path: '/app/charts/radar-charts',
            component: withTracker(RadarCharts),
          },
          {
            path: '/app/charts/scatter-charts',
            component: withTracker(ScatterCharts),
          },
          {
            path: '/app/charts/compossed-chart',
            component: withTracker(CompossedCharts),
          },
          {
            path: '/app/charts/responsive-chart',
            component: withTracker(ResponsiveCharts),
          },
          {
            path: '/app/pages',
            component: withTracker(Parent),
            exact: true,
          },
          {
            path: '/app/pages/user-profile',
            component: withTracker(Profile),
          },
          {
            path: '/app/pages/social-media',
            component: withTracker(SocialMedia),
          },
          {
            path: '/app/pages/blank-page',
            component: withTracker(BlankPage),
          },
          {
            path: '/app/pages/ecommerce',
            component: withTracker(Ecommerce),
          },
          {
            path: '/app/pages/contact',
            component: withTracker(Contact),
          },
          {
            path: '/app/pages/chat',
            component: withTracker(Chat),
          },
          {
            path: '/app/pages/photo-gallery',
            component: withTracker(Photos),
          },
          {
            path: '/app/pages/email',
            component: withTracker(Email),
          },
          {
            path: '/app/pages/not-found',
            component: withTracker(NotFound),
          },
          {
            path: '/app/pages/calendar',
            component: withTracker(Calendar),
          },
          {
            path: '/app/pages/error',
            component: withTracker(Error),
          },
          {
            path: '/app/maps',
            component: withTracker(Parent),
            exact: true,
          },
          {
            path: '/app/maps/map-marker',
            component: withTracker(MapMarker),
          },
          {
            path: '/app/maps/map-direction',
            component: withTracker(MapDirection),
          },
          {
            path: '/app/maps/map-searchbox',
            component: withTracker(SearchMap),
          },
          {
            path: '/app/maps/map-traffic',
            component: withTracker(TrafficIndicator),
          },
          {
            path: '/app/maps/street-view',
            component: withTracker(StreetViewMap),
          },
          {
            path: '*',
            component: withTracker(NotFound)
          }
        ]
      },
      {
        path: '*',
        component: withTracker(NotFoundDedicated)
      }
    ]
  }];
};
