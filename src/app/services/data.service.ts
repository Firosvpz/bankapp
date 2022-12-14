import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser: any
  currentAcno: any

  userDetails:any = {
    1000: { acno: 1000, username: 'amal', password: 123, balance: 100000,transaction:[] },
    1001: { acno: 1001, username: 'ami', password: 123, balance: 200000,transaction:[] },
    1002: { acno: 1002, username: 'joyal', password: 123, balance: 300000,transaction:[] },
    1003: { acno: 1003, username: 'amaldas', password: 123, balance: 500000,transaction:[] },
  }

  constructor() { }

  register(acno: any, username: any, password: any) {

    let userDetails = this.userDetails
    if (acno in userDetails) { //already exist acno
      return false
    }
    else {
      userDetails[acno] = { acno, username, password, balance: 0 }
      console.log(userDetails);

      return true

    }

  }

  login(acno: any, pswd: any) {
    let userDetails = this.userDetails
    if (acno in userDetails) {
      if (pswd==userDetails[acno]['password']) {
        this.currentUser = userDetails[acno]['username']
        this.currentAcno = acno
        return true

      }
      else {
        alert('incorrect password')
        return false
      }
    }
    else {
      alert('user not exist')
      return false
    }

  }
  deposit(acnr: any, psrd: any, amt: any) {

    let userDetails = this.userDetails
    var amount = parseInt(amt)
    if (acnr in userDetails) {
      if (psrd == userDetails[acnr]["password"]) {
        userDetails[acnr]["balance"] += amount
        userDetails[acnr]['transaction'].push({type:'Credit',amount})
        return userDetails[acnr]["balance"]
      }
      else {
        alert('incorrect password')
      }
    }
    else {
      alert('user not exist')
      return false
    }
  }
  Withdraw(acnr: any, psrd: any, amt: any) {

    let userDetails = this.userDetails
    var amount = parseInt(amt)
    if (acnr in userDetails) {
      if (psrd == userDetails[acnr]["password"]) {
        if (userDetails[acnr]['balance'] >= amt) {
          userDetails[acnr]["balance"] -= amount
          userDetails[acnr]['transaction'].push({type:'Debit',amount})

          return userDetails[acnr]["balance"]
        }

        else {
          alert('insufficient balance')
          return false
        }
      }
      else {
        alert('incorrect password')
      }

    }
    else {
      alert('user not exist')
      return false
    }
  }

  getTransaction(acno:any){
    return this.userDetails[acno]["transaction"]
  }
}



