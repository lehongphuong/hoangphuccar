import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { GioithieuComponent } from "./view/content/gioithieu/gioithieu.component";
import { HuongdanComponent } from "./view/content/huongdan/huongdan.component";
import { LienheComponent } from "./view/content/lienhe/lienhe.component";
import { HomeComponent } from "./view/content/home/home.component";
 
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'trang-chu', component: HomeComponent },
    { path: 'gioi-thieu', component: GioithieuComponent },
    { path: 'huong-dan', component: HuongdanComponent },
    { path: 'lien-he', component: LienheComponent }

];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
        // other imports here
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }