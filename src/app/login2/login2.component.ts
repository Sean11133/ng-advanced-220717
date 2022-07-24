import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css'],
})
export class Login2Component implements OnInit {
  data = {
    email: 'aa',
    password: 'vv',
    isRemember: true,
  };

  orig_body_className = document.body.className;

  form = this.fb.group(this.data);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';
  }

  ngOnDestroy(): void {
    document.body.className = this.orig_body_className;
  }

  // doLogin(form: NgForm) {
  //   if (form.valid) {
  //     localStorage.setItem('apikey', 'TEST');
  //     let url = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
  //     this.router.navigateByUrl(url);
  //   }
  // }

  // isInValid(control: NgModel, form: NgForm) {
  //   return control.invalid && (control.touched || form.submitted);
  // }

  // isValid(control: NgModel) {
  //   return control.valid;
  // }
}
