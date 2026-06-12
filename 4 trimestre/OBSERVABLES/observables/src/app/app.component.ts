import { UserService } from './features/user/services/user.service';
import { Component } from '@angular/core';
import { User } from './features/user/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  users : User [] = []
constructor (private UserService: UserService){}
onClick (){
  this.UserService.getAllUsers().subscribe({
    next: (data)=>{
      this.users=data;
    },
    error: ()=>{},
    complete: ()=>{},
  });
}

}
