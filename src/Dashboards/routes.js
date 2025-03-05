import AdminDashboard from "./admin/Dashboard";
import Users from "./admin/Users";
import Reports from "./admin/Reports";
import Settings from "./admin/Settings";

import UserDashboard from "./user/Dashboard";
import WastePickup from "./user/WastePickup";
import UserOrders from "./user/Orders";
import UserProfile from "./user/Profile";

import RecyclerDashboard from "./recycler/Dashboard";
import Inventory from "./recycler/Inventory";
import RecyclerOrders from "./recycler/Orders";
import RecyclerProfile from "./recycler/Profile";

import CollectorDashboard from "./collector/Dashboard";
import PickupRequests from "./collector/PickupRequests";
import Schedule from "./collector/Schedule";
import CollectorProfile from "./collector/Profile";

import LocalAuthorityDashboard from "./localAuthority/Dashboard";
import HazardousWaste from "./localAuthority/HazardousWaste";
import Guidelines from "./localAuthority/Guidelines";
import AuthorityReports from "./localAuthority/Reports";
import LocalAuthorityProfile from "./localAuthority/Profile";

const dashboardRoutes = [
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

export default dashboardRoutes;
