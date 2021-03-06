'use strict';

class NavbarController {
  //start-non-standard
  menu = [
    {
      link : '',
      title: 'Rides',
      icon: 'dashboard'
    },
    {
      link : '',
      title: 'Friends',
      icon: 'group'
    },
    {
      link : '',
      title: 'Messages',
      icon: 'message'
    }

  ];

  admin = [
    {
      link : '',
      title: 'Settings',
      icon: 'settings'
    }
  ];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth, $mdSidenav) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.$mdSidenav = $mdSidenav;
    this.currentUser = Auth.getCurrentUser();
  }

}

angular.module('ecomovaApp')
  .controller('NavbarController', NavbarController);
