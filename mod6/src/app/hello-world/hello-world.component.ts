import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  now: Date;
  firstName: string;

  constructor() {}

  ngOnInit() {
    this.firstName = 'Maurice';
    setInterval(() => (this.now = new Date()), 1000);
  }

  newDate() {
    return new Date();
  }

  buttonClick() {
    this.firstName = 'Jan';
  }
}
