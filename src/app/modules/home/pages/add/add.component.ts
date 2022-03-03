import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
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
