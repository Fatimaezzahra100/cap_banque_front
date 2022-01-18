import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CompteActionsTypes } from '../../state/compte.state';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() compteEventEmitter : EventEmitter<any> = new EventEmitter();

  constructor( ) { }

  ngOnInit(): void {
  }

  onGetAllComptesNav(){
    this.compteEventEmitter.emit(CompteActionsTypes.GET_ALL_COMPTES);
  }

}
