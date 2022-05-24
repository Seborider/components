import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'James', age: 24, job: 'designer' },
    { name: 'Jill', age: 34, job: 'engineer' },
    { name: 'Elyse', age: 32, job: 'designer' }
        ];
        
  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', age: 'Age'},
    { key: 'job', label: 'Job'}
        ];

  constructor() { }

  ngOnInit(): void {
  }

}
