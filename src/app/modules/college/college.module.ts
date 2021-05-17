import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollegeRoutingModule } from './college-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { CollegeLayoutComponent } from './components/college-layout/college-layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    declarations: [
        AboutComponent,
        CollegeLayoutComponent,
        NotFoundComponent,
        CoursesComponent,
        TeachersComponent,
        ContactsComponent
    ],
    imports: [
        CommonModule,
        CollegeRoutingModule,
        TranslateModule.forChild({
            extend: true
        })
    ]
})
export class CollegeModule {}
