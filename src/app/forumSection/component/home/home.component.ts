import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css', './home.component.css']
})
export class HomeComponent implements OnInit {
  query: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
