import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TabsColorsPage } from '../tabs-colors/tabs-colors.page';
import { AuthenicationProviderService } from './../authenication-provider.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    Authentication: AuthenicationProviderService,
    public router: Router,

  ) {}

  aanmelden(){
    this.router.navigate(['/tabs-colors']);
  }

}
