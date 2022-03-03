import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  navigationExtras: NavigationExtras = { state: { value: null } };
  contactList: Contact[] = [
    {
      id: '1',
      name: 'John Doe',
      job: 'Software Engineer',
      email: 'email@email.com',
      phone: '1234567890',
    },
    {
      id: '2',
      name: 'Jane Doe',
      job: 'Software Engineer',
      email: 'email2@email.com',
      phone: '1234567890',
    },
    {
      id: '3',
      name: 'John Doe',
      job: 'Software Engineer',
      email: 'test@email.com',
      phone: '1234567890',
    },
  ];
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
