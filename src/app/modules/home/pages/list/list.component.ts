import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  navigationExtras: NavigationExtras = { state: { value: null } };
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToCreate(): void {
    this.router.navigate(['create']);
  }

  goToView(item: any): void {
    this.navigationExtras.state!['value'] = item;
    this.router.navigate(['detail'], this.navigationExtras);
  }

  goToEdit(item: any): void {
    this.navigationExtras.state!['value'] = item;
    this.router.navigate(['edit'], this.navigationExtras);
  }

  deleteItem(item: any): void {
    alert('Are you sure you want to delete this item?');
  }
}
