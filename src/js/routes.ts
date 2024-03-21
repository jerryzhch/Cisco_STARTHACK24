import DashboardPage from '../pages/dashboard.tsx';
import HomePage from '../pages/home.tsx';
import NursePage from '../pages/nurse.tsx';
import PatientPage from '../pages/patient.tsx';

export const PATH_PATIENT = '/patient/';
export const PATH_NURSE = '/nurse/';
export const PATH_DASHBOARD = '/dashboard/';

const routes = [
  {
    name: 'home',
    path: '/',
    component: HomePage,
  },
  {
    name: 'patient',
    path: PATH_PATIENT,
    component: PatientPage,
  },
  {
    name: 'nurse',
    path: PATH_NURSE,
    component: NursePage,
  },
  {
    name: 'dashboard',
    path: PATH_DASHBOARD,
    component: DashboardPage,
  },
];

export default routes;
