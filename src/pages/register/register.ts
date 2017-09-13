import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuthModule } from 'angularfire2/auth';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('username') name;
  @ViewChild('userpassword') password;

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser(){
    this.afAuth.auth.createUserWithEmailAndPassword(this.user.value, this.email.value)
    .then(data => {
      console.log('got data', data);
    })
    .catch( error => {
      console.log('got an error' , error );
    });
    // console.log(this.name.value, this.password.value);
  }



}
