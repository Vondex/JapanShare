import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
    {
        path: 'user',
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            
            {
                path: 'register',
                component: RegisterComponent
            },

            {
                path: 'profile',
                component: ProfileComponent
            }
        ]
    }
];

export const UserRoutingModule = RouterModule.forChild(routes);