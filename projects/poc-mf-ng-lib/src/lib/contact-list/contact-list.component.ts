import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'lib-contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent {

  @Output() contactSelected = new EventEmitter<any>();

  contactsDB: any[] = [
    {
      "id": "1",
      "name": "John Doe",
      "email": "john.doe@example.com"
    },
    {
      "id": "2",
      "name": "Jane Doe",
      "email": "jane.doe@example.com"
    },
    {
      "id": "3",
      "name": "Michael Smith",
      "email": "michael.smith@example.com"
    },
    {
      "id": "4",
      "name": "Emily Johnson",
      "email": "emily.johnson@example.com"
    },
    {
      "id": "5",
      "name": "Robert Brown",
      "email": "robert.brown@example.com"
    },
    {
      "id": "6",
      "name": "Linda Miller",
      "email": "linda.miller@example.com"
    },
    {
      "id": "7",
      "name": "James Wilson",
      "email": "james.wilson@example.com"
    },
    {
      "id": "8",
      "name": "Patricia Moore",
      "email": "patricia.moore@example.com"
    },
    {
      "id": "9",
      "name": "Thomas Taylor",
      "email": "thomas.taylor@example.com"
    },
    {
      "id": "10",
      "name": "Jennifer Anderson",
      "email": "jennifer.anderson@example.com"
    },
    {
      id: '11',
      name: 'Mary Doe',
      email: 'mary.doe@example.com'
    },
    {
      id: '12',
      name: 'Adam Doe',
      email: 'adam.doe@example.com'
    }
  ];

  contacts: any[] = this.contactsDB;
  searchTerm!: string;
  searchVisible: boolean = false;

  searchContacts(): void {
    if (!this.searchTerm) {
      this.contacts = this.contactsDB;
    } else {
      this.contacts = this.contactsDB.filter(contact =>
        contact.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  selectContact(contact: any): void {
    this.contactSelected.emit(contact);
  }  
}
