import { Component, OnInit } from '@angular/core';
  import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_Services/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  formModel = {
    UserName: '',
    Password: ''
  }

  constructor(private service: UserService, private router: Router
    
      ,private toastr:ToastrService
    
    ) { }

  ngOnInit() {  
      if (localStorage.getItem('token') != null)
  this.router.navigateByUrl('/dashboard');
  this.toastr.error('everything is broken :D', 'Error', {
    timeOut: 3000
  });
  
  }

  onSubmit(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.toastr.success("Sign-in successful");
        this.router.navigateByUrl('/dashboard');
      },
      err => {
        if (err.status == 400)
        this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        else
          console.log(err);
      }
    );
  }
}
