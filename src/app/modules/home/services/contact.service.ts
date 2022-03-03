import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { Contact } from 'src/app/models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contactRef;
  constructor(private firestore: Firestore) {
    this.contactRef = collection(this.firestore, 'contacts');
  }

  addContact(contact: Contact): Promise<any> {
    return addDoc(this.contactRef, contact);
  }
}
