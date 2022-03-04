import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  Firestore,
  setDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contactsRef;
  constructor(private firestore: Firestore) {
    this.contactsRef = collection(this.firestore, 'contacts');
  }

  getContacts(): Observable<Contact[]> {
    return collectionData(this.contactsRef, { idField: 'id' }) as Observable<
      Contact[]
    >;
  }

  addContact(contact: Contact): Promise<any> {
    return addDoc(this.contactsRef, contact);
  }

  updateContact(id: string, contact: Contact): Promise<any> {
    const contactRef = doc(this.firestore, `contacts/${id}`);
    return setDoc(contactRef, contact);
  }

  getContactByID(id: string): Observable<Contact> {
    console.log(id);
    const contactRef = doc(this.firestore, `contacts/${id}`);
    return docData(contactRef, { idField: 'id' }) as Observable<Contact>;
  }

  deleteContact(id: string): Promise<any> {
    const contactRef = doc(this.firestore, `contacts/${id}`);
    return deleteDoc(contactRef);
  }
}
