import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ContactListComponent } from 'poc-mf-ng-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {
  @ViewChild(ContactListComponent)
  contactList!: ContactListComponent;
  selectedContact: string = '';
  createContact: boolean = true;

  search(): void {
    this.setStateSearch(true);
  }

  ngAfterViewInit(): void {
    this.contactList.contactSelected.subscribe(contact => {      
      this.selectedContact = contact.name;
      this.setStateSearch(false);
    });
  }

  setStateSearch(state: boolean): void{
    this.createContact = !state;
    this.contactList.searchVisible = state;
  }
}
