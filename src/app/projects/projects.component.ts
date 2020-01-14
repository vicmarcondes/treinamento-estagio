import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public projects = [
    'Desenvolvimento mobile',
    'Desenvolvimento WEB',
    'Desenvolvimento mobile',
    'Desenvolvimento mobile',
    'Desenvolvimento mobile',
    'Desenvolvimento mobile',
    'Desenvolvimento mobile',
    'Desenvolvimento mobile'
  ];

  public pages = [1,2,3];

  constructor() { }

  ngOnInit() {
  }

}
