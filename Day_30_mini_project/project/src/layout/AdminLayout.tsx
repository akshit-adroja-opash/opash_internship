import dashboard from '../pages/dashboard';
import users from '../pages/users';
import settings from '../pages/settings';
import { ReactNode } from 'react';
import  sidebar  from '../components/Sidebar';


interface AdminLayoutItem {
    name: string;

}

export const adminLayout = [
    { name: 'Dashboard', path: '/dashboard', component: dashboard },
    { name: 'Users', path: '/users', component: users },
    { name: 'Settings', path: '/settings', component: settings },
];


        