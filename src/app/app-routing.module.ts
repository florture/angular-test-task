import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'college',
        pathMatch: 'full'
    },
    {
        path: 'college',
        loadChildren: () => import('./modules/college/college.module').then(m => m.CollegeModule),
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
