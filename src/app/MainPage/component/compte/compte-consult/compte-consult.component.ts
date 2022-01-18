import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { Compte } from 'src/app/MainPage/model/compte.model';
import { CompteService } from 'src/app/MainPage/service/compte.service';
import { AppDataState, CompteActionsTypes, DataStateEnum } from 'src/app/MainPage/state/compte.state';

@Component({
  selector: 'app-compte-consult',
  templateUrl: './compte-consult.component.html',
  styleUrls: ['./compte-consult.component.css']
})
export class CompteConsultComponent implements OnInit {
  comptes$ : Observable<AppDataState<Compte[]>> | null=null;
  readonly DataStateEnum=DataStateEnum;

  constructor(private compteService : CompteService) { }

  ngOnInit(): void {
  }

  onGetAllComptes(){
    this.comptes$= this.compteService.getAllCompteEpargne().pipe(
      map(data=>{
        console.log(data);
        return ({dataState:DataStateEnum.LOADED, data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }

  onActionEvent($event: CompteActionsTypes){
    switch($event){
      case CompteActionsTypes.GET_ALL_COMPTES: this.onGetAllComptes();break;
    }
  }
}
