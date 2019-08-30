import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router"; 
import { LoginComponent } from './login/login.component';


export const routes: Routes=[{
path:'login',
component:LoginComponent,

}]

@NgModule ({
    imports:[RouterModule.forRoot(routes,{useHash:true})
    ],
    exports:[RouterModule],
    providers:[]

})
export class AppRoutingModule {}