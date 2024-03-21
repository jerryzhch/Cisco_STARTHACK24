import DashboardPage from '../pages/dashboard.tsx';
import HomePage from '../pages/home.tsx';
import NursePage from '../pages/nurse.tsx';
import PatientPage from '../pages/patient.tsx';

var routes = [
  {
    name: 'home',
    path: '/',
    component: HomePage,
  },
  {
    name: 'patient',
    path: '/patient/',
    component: PatientPage,
  },
  {
    name: 'nurse',
    path: '/nurse/',
    component: NursePage,
  },
  {
    name: 'dashboard',
    path: '/dashboard/',
    component: DashboardPage,
  },
];

export default routes;
