import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  contactForm = new FormGroup({});

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {}

  private initForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      job: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
    });
  }
}
