import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  data: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe(params => {
      this.data = JSON.parse(params.special);
      console.log(this.data.id);
    });
   }

  ngOnInit() {
  }

}
