import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FirstDialogComponent} from './dialogs/first-dialog/first-dialog.component';
import {SecondDialogComponent} from './dialogs/second-dialog/second-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'material-custom-dialogs-css';
  constructor(private dialog: MatDialog) {
  }
  ngOnInit(): void {

  }

  onOpenFirst(): void {
    let dialog = this.dialog.open(FirstDialogComponent,{
      panelClass: 'first-dialog',
      width: '810px',
      height: '560px'
    })
  }

  onOpenSecond() {
    let dialog = this.dialog.open(SecondDialogComponent,{
      panelClass: 'second-dialog',
      width: '500px',
      height: '300px'
    })
  }
}
