import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user=''

  acnr=''
  psrd=''
  amt=''

  acnr1=''
  psrd1=''
  amt1=''


  constructor(private ds: DataService) { 
    this.user=this.ds.currentUser

  }

  ngOnInit(): void {
  }
  Deposit(){
    var acnr=this.acnr
    var psrd=this.psrd
    var amt=this.amt

    const result=this.ds.deposit(acnr,psrd,amt)
    if(result){
      alert(`${amt}is credited,new balance is${result}`)
    }


  }
  Withdraw(){
    var acnr=this.acnr1
    var psrd=this.psrd1
    var amt=this.amt1

    const result=this.ds.Withdraw(acnr,psrd,amt)
    if(result){
      alert(`${amt}is debited,new balance is${result}`)
    }



  }

}
