import { Routes } from '@angular/router';
import { LoginsignupComponent } from './components/loginsignup/loginsignup.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

export const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: LoginsignupComponent },
    { path: "main", component: MainPageComponent }

];
