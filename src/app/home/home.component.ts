import { Component, OnInit } from '@angular/core';


import { UserService, AuthenticationService } from '../_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: any;
    users = [];

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }
// put website links here links here
    public links = [
        "https://www.freecodecamp.org/",
        "https://click.linksynergy.com/deeplink?id=JVFxdTr9V80&mid=40328&murl=https%3A%2F%2Fwww.coursera.org%2F",
        "https://click.linksynergy.com/fs-bin/click?id=JVFxdTr9V80&offerid=323058.9409&type=3&subid=0",
        "http://pluralsight.pxf.io/c/1193463/424552/7490?u=https%3A%2F%2Fwww.pluralsight.com%2Flearn",
        "http://codecademy.com/"
    ]
    ngOnInit() {
  
    }


}