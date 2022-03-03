import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  Firestore,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contactRef;
  constructor(private firestore: Firestore) {
    this.contactRef = collection(this.firestore, 'contacts');
  }

  getContacts(): Observable<Contact[]> {
    return collectionData(this.contactRef, { idField: 'id' }) as Observable<
      Contact[]
    >;
  }

  addContact(contact: Contact): Promise<any> {
    return addDoc(this.contactRef, contact);
  }
}
