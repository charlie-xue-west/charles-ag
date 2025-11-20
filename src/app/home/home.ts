import { Component } from '@angular/core';
import { AuthForm } from '../auth-form/auth-form';

@Component({
  selector: 'app-home',
  imports: [AuthForm],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
