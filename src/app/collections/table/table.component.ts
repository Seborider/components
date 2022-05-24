import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
@Input('classNames') classNames:any = ""
@Input('data') data:any = []
@Input('headers') headers:any = []
  constructor() { }

  ngOnInit(): void {
  }

}
