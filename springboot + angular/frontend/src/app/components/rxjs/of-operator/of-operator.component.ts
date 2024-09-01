import { Component } from '@angular/core';
import { log } from 'console';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-of-operator',
  standalone: true,
  imports: [],
  templateUrl: './of-operator.component.html',
  styleUrl: './of-operator.component.css'
})
export class OfOperatorComponent {
  studentList=['Mark 7', 'Mark 28', 'Mark 48']
  student:Observable<string[]>=of(this.studentList);

  studentName:Observable<string>=of('Invalid');

  studentObj={
    id: 1,
    name: 'Student'
  }

  student$:Observable<any>=of(this.studentObj);
  ngOnInit():void {
    this.student.subscribe(student =>{
      console.log(student);
    })
    this.studentName.subscribe(student =>{
      console.log(student);
    })
    this.student$.subscribe(student =>{
      console.log(student);
    })
  }
}
