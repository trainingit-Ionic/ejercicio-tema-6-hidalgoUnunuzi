import { Component, OnInit} from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { CardPage } from '../card/card.page';
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
    private modalController: ModalController,
  ) {
    this.userService.get().subscribe((res) => {
      this.users = res;
      console.log(this.users);
     });
  }
/*
  itemClick(itemId: any) {
    this.userService.getOne(itemId).subscribe((res => {}))

  }*/

  ngOnInit() {}
}
