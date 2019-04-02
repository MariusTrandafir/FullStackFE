import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.css']
})
export class AccountUpdateComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  successfull = false;
  userNameTaken: Boolean = true;
  checked: Boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthService,
    private alertService: AlertService,
    private changeRef: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: [this.authenticationService.currentUserValue.username, Validators.required],
      password: [this.authenticationService.currentUserValue.password, [Validators.required, Validators.minLength(6)]],
      confirmpassword: [this.authenticationService.currentUserValue.password, [Validators.required, Validators.minLength(6)]],
      email: [this.authenticationService.currentUserValue.email, [Validators.required, Validators.email]],
      id: [this.authenticationService.currentUserValue.id]
    },
      {
        validator: this.MatchConfirom('password', 'confirmpassword'),
      });
  }

  private MatchConfirom(type1: any, type2: any) {

    return (checkForm: FormGroup) => {
      let value1 = checkForm.controls[type1];
      let value2 = checkForm.controls[type2];


      if (value1.value === value2.value) {
        return value2.setErrors(null);
      } else {
        return value2.setErrors({ notEquivalent: true });
      }
    };
  }

  get f() { return this.registerForm.controls; }
  
  checkUsername() {
    this.checked = true;
    this.authenticationService.checkUsername(this.registerForm.controls.username.value)
    .subscribe(userNameTaken => {
      this.userNameTaken = userNameTaken;
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    this.authenticationService.update(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Update successful', true);
          this.router.navigate(['/account/logout']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
