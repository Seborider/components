import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false
  items = [
    {title: 'Why is the sky black', content: 'The Sky is blue because it is'},
    {title: 'Why is the sky purple', content: 'The Sky is blue purple it is'},
    {title: 'Why is the sky blue', content: 'The Sky is black because it is'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.modalOpen =!this.modalOpen
  }

}
