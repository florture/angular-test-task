import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CollegeService } from '../../../../core/services/college.service';
import { College } from '../../../../core/models/college';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {
    //defaultTranslations = default_college_translations;

    constructor(
        readonly collegeService: CollegeService
    ) {}

    get college$(): Observable<College> {
        return this.collegeService.getCollege$;
    }
}
