import { Component, OnInit } from '@angular/core';
import { dataTablesDemo } from '../dataTablesDemo';

@Component({
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
})
export class TablesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    dataTablesDemo();
  }
}
