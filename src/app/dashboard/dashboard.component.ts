import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { chartAreaDemo } from '../chartAreaDemo';
import { chartPieDemo } from '../chartPieDemo';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    chartAreaDemo();
    chartPieDemo();
  }

  gotoCards(type: number, name: string) {
    this.router.navigateByUrl('/cards/' + type + '?name=' + name);
  }

  gotoCards2(type: number, name: string) {
    this.router.navigate(['/cards/123'], {
      queryParams: {
        name: name,
      },
    });
  }
}
