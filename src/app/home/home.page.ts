import { Component, OnInit} from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  users: User[];
  displayData: any;
  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.userService.get().subscribe((res) => {
      this.users = res;
      console.log(this.users);
     });
  }
ngOnInit() {}

  goToPage(user: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
       special: JSON.stringify(user)
      }
    };
    this.router.navigate(['/user'], navigationExtras);
    console.log('click');
  }
}
