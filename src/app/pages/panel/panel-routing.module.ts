import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AuthGuard } from "app/_guards/auth.guard";
import { PanelComponent } from "app/pages/panel/panel.component";
import { EditpostComponent } from "app/pages/panel/editpost/editpost.component";
import { CreatepostComponent } from 'app/pages/panel/createpost/createpost.component';

const routes: Routes = [
    {
        path: 'panel',
        component: PanelComponent,
        children: [
            { path: 'create_post', component: CreatepostComponent },
            { path: 'edit_post', component: EditpostComponent }
        ]//,
        //canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]//,
    //exports: [RouterModule]
})
export class PanelRoutingModule { }
