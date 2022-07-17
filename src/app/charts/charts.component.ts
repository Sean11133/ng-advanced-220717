import { Component, OnInit } from '@angular/core';
import { chartAreaDemo } from '../chartAreaDemo';
import { chartBarDemo } from '../chartBarDemo';
import { chartPieDemo } from '../chartPieDemo';

@Component({
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    chartAreaDemo();
    chartPieDemo();
    chartBarDemo();
  }
}
