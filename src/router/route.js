import Home from "../views/home";
import Service from "../views/services";
import ContactUs from "../views/contactUs";
import IndividualService from "../views/individualService";
import AboutUs from "../views/aboutUs";
import ProjectDetails from "../views/projectDetails";
import SMediaService from "../views/sMediaService";
import SignUp from "../components/Registration/SignUp";
import ForgotPassword from "../components/Registration/ForgotPassword";
import Quotation from "../components/Quotations/Quotation";
import CompanyTeam from "../components/Team/Team";
import Blog from "../components/Blog/blog";
import Login from "../components/Registration/Login";
import Pricing from "../components/Pricing/pricing";
import Checkout from "../components/checkout/checkout";

// Admin Dashboard
import AdminDashboard from "../Dashboards/admin/Dashboard";
import Users from "../Dashboards/admin/Users";
import Reports from "../Dashboards/admin/Reports";
import Settings from "../Dashboards/admin/Settings";

// User Dashboard
import UserDashboard from "../Dashboards/user/Dashboard";
import WastePickup from "../Dashboards/user/WastePickup";
import UserOrders from "../Dashboards/user/Orders";
import UserProfile from "../Dashboards/user/Profile";

// Recycler Dashboard
import RecyclerDashboard from "../Dashboards/recycler/Dashboard";
import Inventory from "../Dashboards/recycler/Inventory";
import RecyclerOrders from "../Dashboards/recycler/Orders";
import RecyclerProfile from "../Dashboards/recycler/Profile";

// Collector Dashboard
import CollectorDashboard from "../Dashboards/collector/Dashboard";
import PickupRequests from "../Dashboards/collector/PickupRequests";
import Schedule from "../Dashboards/collector/Schedule";
import CollectorProfile from "../Dashboards/collector/Profile";

// Local Authority Dashboard
import LocalAuthorityDashboard from "../Dashboards/localAuthority/Dashboard";
import HazardousWaste from "../Dashboards/localAuthority/HazardousWaste";
import Guidelines from "../Dashboards/localAuthority/Guidelines";
import AuthorityReports from "../Dashboards/localAuthority/Reports";
import LocalAuthorityProfile from "../Dashboards/localAuthority/Profile";

const routes = [
  { component: Home, to: "/" },
  { component: Service, to: "/services" },
  { component: ContactUs, to: "/contactUs" },
  { component: IndividualService, to: "/individualService" },
  { component: AboutUs, to: "/aboutUs" },
  { component: ProjectDetails, to: "/projectDetails" },
  { component: SMediaService, to: "/sMediaService" },
  { component: SignUp, to: "/signup" },
  { component: Blog, to: "/blog" },
  { component: ForgotPassword, to: "/forgot-password" },
  { component: CompanyTeam, to: "/team" },
  { component: Quotation, to: "/quotation" },
  { component: Pricing, to: "/pricing" },
  { component: Login, to: "/login" },
  { component: Checkout, to: "/checkout" },

  // Admin Routes
  { component: AdminDashboard, to: "/dashboard/admin" },
  { component: Users, to: "/dashboard/admin/users" },
  { component: Reports, to: "/dashboard/admin/reports" },
  { component: Settings, to: "/dashboard/admin/settings" },

  // User Routes
  { component: UserDashboard, to: "/dashboard/user" },
  { component: WastePickup, to: "/dashboard/user/pickup" },
  { component: UserOrders, to: "/dashboard/user/orders" },
  { component: UserProfile, to: "/dashboard/user/profile" },

  // Recycler Routes
  { component: RecyclerDashboard, to: "/dashboard/recycler" },
  { component: Inventory, to: "/dashboard/recycler/inventory" },
  { component: RecyclerOrders, to: "/dashboard/recycler/orders" },
  { component: RecyclerProfile, to: "/dashboard/recycler/profile" },

  // Collector Routes
  { component: CollectorDashboard, to: "/dashboard/collector" },
  { component: PickupRequests, to: "/dashboard/collector/requests" },
  { component: Schedule, to: "/dashboard/collector/schedule" },
  { component: CollectorProfile, to: "/dashboard/collector/profile" },

  // Local Authority Routes
  { component: LocalAuthorityDashboard, to: "/dashboard/authority" },
  { component: HazardousWaste, to: "/dashboard/authority/hazardous" },
  { component: Guidelines, to: "/dashboard/authority/guidelines" },
  { component: AuthorityReports, to: "/dashboard/authority/reports" },
  { component: LocalAuthorityProfile, to: "/dashboard/authority/profile" },
];

export default routes;
