import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Iadmin } from 'src/app/models/logAdmin';
import { Router } from '@angular/router';
import { AuthappService } from 'src/services/authapp.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-login-error',
  templateUrl: './login-error.component.html',
  styleUrls: ['./login-error.component.css']
})
export class LoginErrorComponent {

 err: string ='Username o password Errata... Riprovare...';

 public username: string ="";
 public password: string = "";

 user : Iadmin[] = [];

 constructor(private route: Router, protected BasicAuth: AuthappService, private http: HttpClient) {}



 login(): void {
   const data = {username: this.username, password: this.password};

   this.http.post('https://nodejs-portfoliobackendjs.onrender.com/admin/login', data).subscribe(
     (response: any) => {
       // Memorizzo nella sessione il token e permetto la navigazione
       const token = response.data;
       sessionStorage.setItem('token', token);
       this.route.navigate(['admin']);

     },
     (error) => {
       console.error(error);
       this.route.navigate(['err']);
     }
   );
 }


}
@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [ LoginErrorComponent ]
})
export class LoginComponentModule { }
