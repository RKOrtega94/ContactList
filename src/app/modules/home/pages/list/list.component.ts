import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  navigationExtras: NavigationExtras = { state: { value: null } };
  contacts: Contact[] = [];
  constructor(private router: Router, private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.getContacts().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

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
    console.log(item.id);
    this.contactService.deleteContact(item.id).then(() => {
      this.contactService.getContacts().subscribe((contacts) => {
        this.contacts = contacts;
      });
    });
  }
}
