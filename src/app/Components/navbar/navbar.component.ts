import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PersonnalInfosComponent } from '../personnal-infos/personnal-infos.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  @Output() sectionSelected = new EventEmitter<string>();


  constructor(private dialog:MatDialog) {}




  navigateToSection(section: string) {
    this.sectionSelected.emit(section);  // Emit the section name to the parent
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(PersonnalInfosComponent, {
      width:'600px',height:'600px'
    });
}

}