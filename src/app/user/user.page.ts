import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  data: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private callNumber: CallNumber
  ) {
    this.route.queryParams.subscribe(params => {
      this.data = JSON.parse(params.special);
    });
   }

  ngOnInit() {
  }
  callPhone(phone: string) {
    this.callNumber.callNumber(phone, true)
    .then(res => console.log('Calling...', res))
    .catch(err => console.log('Error launching dialer', err));
  }
}
