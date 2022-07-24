import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css'],
})
export class Login2Component implements OnInit {
  data = {
    email: 'sean47715@gmail.com',
    password: '1qaz@WSX',
    tel: '0987',
    isRememberMe: true,
  };

  orig_body_className = document.body.className;

  form = this.fb.nonNullable.group({
    email: this.fb.nonNullable.control('@gmail.com', {
      validators: [Validators.required, Validators.email],
      updateOn: 'blur',
    }),
    password: this.fb.control('', {
      validators: [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),
      ],
    }),
    isRememberMe: this.fb.control(true, {}),
    profiles: this.fb.array([
      this.makeProfiles('Taipei', '0988-888888'),
      this.makeProfiles('Taichung', '0944-444444'),
    ]),
  });

  makeProfiles(city: string, tel: string) {
    return this.fb.group({
      city: this.fb.control(city, {
        validators: [Validators.required],
      }),
      tel: this.fb.control(tel, {
        validators: [Validators.required],
      }),
    });
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';
    setTimeout(() => {
      // this.form.setValue(this.data);
      this.form.patchValue(this.data);
    }, 2000);
  }

  ngOnDestroy(): void {
    document.body.className = this.orig_body_className;
  }

  fc(name: string) {
    return this.form.get(name) as FormControl;
  }

  resetForm() {
    this.form.reset(this.data);
  }

  addProfiles() {
    this.form.controls.profiles.push(this.makeProfiles('', ''));
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
