import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  value: any;
  id: string;
  contact!: Contact;
  isUpdate: boolean = false;
  contactForm = new FormGroup({});

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private contactService: ContactService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.value = navigation?.extras?.state;
    this.id = this.value?.value;
    if (this.id)
      this.contactService
        .getContactByID(this.id)
        .subscribe((contact) => {
          this.contact = contact;
          this.contactForm.patchValue(this.contact);
        });
    this.router.url.includes('edit')
      ? (this.isUpdate = true)
      : (this.isUpdate = false);
  }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  onSave(): void {
    this.isUpdate ? this.updateContact() : this.createContact();
  }

  private initForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      job: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
    });
  }

  createContact(): void {
    this.contactService
      .addContact(this.contactForm.value)
      .then(() => this.router.navigate(['list']));
  }

  updateContact(): void {
    this.contactService.updateContact(this.value.value, this.contactForm.value);
  }
}
