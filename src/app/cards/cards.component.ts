import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  constructor(private router: Router, private routr: ActivatedRoute) {}

  type: string | null = '';
  name: string | null = '';

  ngOnInit(): void {
    this.routr.paramMap.subscribe((params: ParamMap) => {
      this.type = params.get('type');
    });

    this.routr.queryParamMap.subscribe((params: ParamMap) => {
      this.name = params.get('name');
    });
  }

  inc(num: number) {
    this.router.navigate(['../', +(this.type || 0) + num], {
      queryParamsHandling: 'preserve',
      relativeTo: this.routr,
    });
  }
}
