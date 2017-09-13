import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

//import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  @ViewChild('username') uname;
  @ViewChild('userpassword') password;

  constructor(public navCtrl: NavController) {

  }

  // openPage(){
  //   this.navCtrl.push(AboutPage);    
  // }

  signIn(){
    console.log(this.uname.value, this.password.value);

  }


}
