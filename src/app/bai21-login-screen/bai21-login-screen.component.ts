import { Component, OnInit } from '@angular/core';
import { Account } from '../interfaces/account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bai21-login-screen',
  templateUrl: './bai21-login-screen.component.html',
  styleUrls: ['./bai21-login-screen.component.css'],
})
export class Bai21LoginScreenComponent implements OnInit {
  account = new Account();
  isPress: boolean = false;
  checked: boolean = false;

  constructor(private _router: Router) {}

  ngOnInit(): void {
    window.localStorage.getItem('myAccount');
  }

  login() {
    if (!this.isEmail(this.account.email)) {
      alert('Email chưa hợp lệ');
      return;
    }
    if (!this.isPassword(this.account.password)) {
      alert('Mật khẩu không đủ kí tự');
      return;
    }
    if (this.checked) {
      this.isRemmember();
    }

    this.isPress = true;
    this.navigate();
  }

  isEmail(email: string): boolean {
    if (!email.includes('@')) {
      return false;
    }
    return true;
  }

  isPassword(password: string): boolean {
    if (password.length < 5) {
      return false;
    }

    return true;
  }

  navigate() {
    this._router.navigate(['bai 54']);
  }

  isRemmember() {
    window.localStorage.setItem('myAccount', JSON.stringify(this.account));
  }
}
