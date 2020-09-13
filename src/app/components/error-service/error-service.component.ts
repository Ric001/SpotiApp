import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-service',
  templateUrl: './error-service.component.html',
  styleUrls: ['./error-service.component.css']
})
export class ErrorServiceComponent implements OnInit {
  @Input() errorMessage: string;

  constructor() { }

  ngOnInit(): void {
  }

}
