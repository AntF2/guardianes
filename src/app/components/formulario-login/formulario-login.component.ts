import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-formulario-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.css'
})
export class FormularioLoginComponent {

  constructor (private sercivio: LoginService) {}



  email: any;
  password: any;

  login(loginForm: any) {
    console.log(loginForm.value);
    this.sercivio.postLogin(loginForm.value).subscribe(acceso=>{
      console.log(acceso);
      let token = acceso.accesstoken
      if(token! = ''){
      localStorage.setItem("login", "true");
      }
    });
  }

  /*ngOnInit() {
    this.sercivio.getLogin().subscribe()
  }*/


}
