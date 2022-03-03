import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  value: any;
  contact!: Contact;
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.value = navigation?.extras?.state;
    this.contact = this.value?.value;
  }

  ngOnInit(): void {
    if (typeof this.contact === 'undefined') {
      this.router.navigate(['list']);
    }
  }
}
