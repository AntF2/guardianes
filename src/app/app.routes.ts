import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PrivateComponent } from './pages/private/private.component';
import { loginGuard } from './guards/login.guard';
import { ContactosComponent } from './pages/contactos/contactos.component';

export const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "private",
    component: PrivateComponent, canActivate: [loginGuard]
  },
  {
    path: "contactos",
    component: ContactosComponent
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  }
];
