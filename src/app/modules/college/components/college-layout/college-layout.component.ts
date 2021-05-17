import { Component } from '@angular/core';
import { CollegeService } from '../../../../core/services/college.service';
import { Observable } from 'rxjs';
import { College } from '../../../../core/models/college';

@Component({
  selector: 'app-college-layout',
  templateUrl: './college-layout.component.html',
  styleUrls: ['./college-layout.component.scss']
})
export class CollegeLayoutComponent {
  constructor(
      readonly collegeService: CollegeService
  ) {}

  get college$(): Observable<College> {
    return this.collegeService.getCollege$;
  }
}
