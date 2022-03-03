import { Component, OnInit } from '@angular/core';
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
  isUpdate: boolean = false;
  contactForm = new FormGroup({});

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private contactService: ContactService
  ) {
    this.router.url.includes('edit')
      ? (this.isUpdate = true)
      : (this.isUpdate = false);
    console.log(this.isUpdate);
  }

  ngOnInit(): void {
    this.initForm();
  }

  onSave(): void {
    console.log(this.contactForm.value);
    this.contactService.addContact(this.contactForm.value);
  }

  private initForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      job: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
    });
  }
}
