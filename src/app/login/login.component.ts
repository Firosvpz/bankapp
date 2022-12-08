import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim='Your banking partner'
  acnt="enter your acc number"
  
  acno=''
  pswd=''

  userDetails:any={
    1000:{acno:1000,username:'amal',password:123,balance:100000},
    1001:{acno:1001,username:'ami',password:123,balance:200000},
    1002:{acno:1002,username:'joyal',password:123,balance:300000},
    1003:{acno:1003,username:'amaldas',password:123,balance:500000},
  }

  constructor() { }

  ngOnInit(): void {
  }

  // login(){
  // //   var acno=this.acno
  // //   var pswd=this.pswd
  // //   let userDetails=this.userDetails
  // //   if(acno in userDetails){
  // //     if(pswd==userDetails[acno]['password']){
  // //         alert('login success')

  // //     }
  // //     else{
  // //       alert('incorrect password')
  // //     }
  // //   }
  // //   else{
  // //     alert('user not exist or incorrect password')
  // //   }

  // //   alert("clicked")
  // // }
  login(a:any,b:any){
    // console.log(a.value);
    // console.log(b.value);
    
    
      var acno=a.value
      var pswd=b.value
      let userDetails=this.userDetails
      if(acno in userDetails){
        if(pswd==userDetails[acno]['password']){
            alert('login success')
  
        }
        else{
          alert('incorrect password')
        }
      }
      else{
        alert('user not exist ')
      }
  
      alert("clicked")
    }

 acnoChange(event:any){
    this.acno=event.target.value
    console.log(this.acno);
    
    
 }
 changePswd(event:any){
   this.pswd=event.target.value
   console.log(this.pswd);
   
 }
}
