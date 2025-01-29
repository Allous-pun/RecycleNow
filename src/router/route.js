import Home from "../views/home";
import Service from "../views/services";
import ContactUs from '../views/contactUs';
import IndividualService from "../views/individualService";
import AboutUs from '../views/aboutUs';
import ProjectDetails from "../views/projectDetails";
import SMediaService from '../views/sMediaService';
import SignUp from '../components/Registration/SignUp';
import ForgotPassword from '../components/Registration/ForgotPassword';
import Quotation from "../components/Quotations/Quotation";
import CompanyTeam from "../components/Team/Team";
import Blog from "../components/Blog/blog";
import Login from "../components/Registration/Login";
import Pricing from "../components/Pricing/pricing";
import Checkout from "../components/checkout/checkout";
import AdminDashboard from "../components/Admin/AdminDashboard";

const routes = [
  {
    component: Home,  // Pass the component reference (not JSX)
    to: '/'
  },
  {
    component: Service,
    to: '/services'
  },
  {
    component: ContactUs,
    to: '/contactUs'
  },
  {
    component: IndividualService,
    to: '/individualService'
  },
  {
    component: AboutUs,
    to: '/aboutUs'
  },
  {
    component: ProjectDetails,
    to: '/projectDetails'
  },
  {
    component: SMediaService,
    to: '/sMediaService'
  },
  {
    component: SignUp,
    to: '/signup'
  },
  {
    component: Blog,
    to: '/blog'
  },
  {
    component: ForgotPassword,
    to: '/forgot-password'
  },
  {
    component: CompanyTeam,
    to: '/Team'
  },
  {
    component: Quotation,
    to: '/Quotation'
  },
  {
    component: Pricing,
    to: '/pricing'
  },
  {
    component: ForgotPassword,
    to: '/forgetpassword'
  },

 {
    component:Login,
    to: '/login'
  },
  {
    component:Checkout,
    to: '/checkout'
  },
  {
    component:AdminDashboard,
    to: '/admin'
  },
];

export default routes;
