import { Component, OnInit } from '@angular/core';
import { CompteService } from 'src/app/MainPage/service/compte.service';
import { CompteCourant } from 'src/app/MainPage/service/compteCourant.model';

@Component({
  selector: 'app-solde-compte-courant',
  templateUrl: './solde-compte-courant.component.html',
  styleUrls: ['../../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class SoldeCompteCourantComponent implements OnInit {
  compte!: CompteCourant;
  
 
 constructor(private compteService: CompteService) {}

 //the ngOnInit method is called when the component is loaded
 ngOnInit() {
   this.loadEvents();
 }


 loadEvents(){
   this.compteService.getCompteCourant().subscribe(
     (response) => {this.compte = response; console.log(response)}, 
     (error)=> {alert(error.message)});
 }

 
}
