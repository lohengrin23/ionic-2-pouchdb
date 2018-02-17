import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormsModule, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { HomePage } from '../home/home';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

authForm: FormGroup; 

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public  formBuilder: FormBuilder,
              public modalCtrl:ModalController) {

                this.navCtrl;
                this.authForm = formBuilder.group({
                  username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(1), Validators.maxLength(30)])],
                  password: ['', Validators.compose([Validators.required, Validators.minLength(1)])]

                });
    
  }

  onSubmit(value: any): void{
    if(this.authForm.valid){
      window.localStorage.setItem('username', value.username);
      window.localStorage.setItem('password', value.password);
      
     /* let modal = this.modalCtrl.create(HomePage);
    modal.present();*/

     //this.navCtrl.push(HomePage);
    this.navCtrl.setRoot(HomePage);
    }
  }

  

 

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
