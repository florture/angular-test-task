import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { College } from '../models/college';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {
  private college: BehaviorSubject<College> = new BehaviorSubject({
    id: 1,
    name: 'Dzerzhinsky College of Music',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Morgan_Hall_of_Williams_College_in_the_fall_%2827_October_2010%29.jpg/1920px-Morgan_Hall_of_Williams_College_in_the_fall_%2827_October_2010%29.jpg',
    about: 'A about (Latin: collegium) is an educational institution or a constituent part of one. A about may be a degree-awarding tertiary educational institution, a part of a collegiate or federal university, an institution offering vocational education, or a secondary school.',
    mediaType: 3,
    vimeoVideoId: 324223545334,
  });

  constructor() { }

  get getCollege$(): Observable<College> {
    return this.college
        .pipe(map(college => new College(college)));
  }
}
