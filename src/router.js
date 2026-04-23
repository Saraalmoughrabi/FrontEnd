import { createRouter, createWebHistory } from 'vue-router'
import LoginPageAdmin from './View/LoginPageAdmin.vue'
import SideNavigationBar from './component/SideNavigationBar.vue'
import Dashboard from './View/Dashboard.vue'
import Users from './View/Users.vue'
import Trips from './View/Trips.vue'
import CompaniesPage from './View/companiesPage.vue'
const routes = [
  {
    path: '/',            
    name: 'Login',       
    component: LoginPageAdmin
  },
 {
    path:'/SideNavigationBar',
    name:'SideNavigationBar',
    component: SideNavigationBar
 },
 {
    path:'/dashboard',
    name:'Dashboard',
    component: Dashboard
 },
 {
    path:'/users',
    name:'Users',
    component: Users,
 },
 {
  path:'/trips',
  name:'Trips',
  component: Trips,
 },
 {
  path:'/companies',
  name:'Companies',
  component: CompaniesPage,
 }
]
const router = createRouter({
  history: createWebHistory(), 
  routes
})
export default router