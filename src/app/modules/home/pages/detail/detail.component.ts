import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  value: any;
  contact!: Contact;
  navigationExtras: NavigationExtras = { state: { value: null } };
  constructor(private router: Router, private contactService: ContactService) {
    const navigation = this.router.getCurrentNavigation();
    this.value = navigation?.extras?.state;
    this.contact = this.value?.value;
  }

  ngOnInit(): void {
    if (typeof this.contact === 'undefined') {
      this.router.navigate(['list']);
    }
  }

  goToEdit(item: any): void {
    this.navigationExtras.state!['value'] = item;
    this.router.navigate(['edit'], this.navigationExtras);
  }

  deleteItem(item: any): void {
    console.log(item);
    this.contactService.deleteContact(item).then(() => {
      this.contactService.getContacts().subscribe((contacts) => {
        this.router.navigate(['list']);
      });
    });
  }
}
