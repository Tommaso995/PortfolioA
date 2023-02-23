import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Iadmin } from 'src/app/models/logAdmin';
import { AuthappService } from 'src/services/authapp.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

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
  declarations: [ LoginComponent ]
})
export class LoginComponentModule { }

