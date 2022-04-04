import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavEventEmmitterService } from "../../utility-app/event-emitters/nav-event-emmitter.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {
  subscription: any;
  tempSelectedValue;

  sampleMenu = [{
    filterType: 'one day',
    menuOptions: ['ABC', 'XYZ']
  },
  {
    filterType: 'one day',
    menuOptions: ['ABC1', 'XYZ1']
  },
  {
    filterType: 'several days',
    menuOptions: ['AAA', 'BBB']
  },
  {
    filterType: 'several days',
    menuOptions: ['AAA1', 'BBB1']
  },
  {
    filterType: 'all days',
    menuOptions: ['NNN', 'MMM']
  },
  {
    filterType: 'all days',
    menuOptions: ['NNN1', 'MMM1']
  }];

  menuList = [];
  constructor(private navEventEmmitterService: NavEventEmmitterService, private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.navEventEmmitterService.getNavChangeEmitter()
      .subscribe(item => this.getMenuDataOnSelectionOfDayFilter(item));
  }

  getMenuDataOnSelectionOfDayFilter(dayFIlterValue: string) {

    this.tempSelectedValue = dayFIlterValue;
    this.menuList = this.sampleMenu.filter(val => {
      return val.filterType == dayFIlterValue;
    });
  }

  onSelectionChange(menu, submenu) {
    this.router.navigate(['/offers', menu, submenu]);
  }
 
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
