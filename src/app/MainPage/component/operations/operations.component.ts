import { Component, OnInit } from '@angular/core';
import { Operation } from '../../service/operation.model';
import { OperationsService } from '../../service/operations.service';
import { User } from '../../service/user.model';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class OperationsComponent implements OnInit {

   operations!: Operation[];
   searchTerm: string = "";
   foundOperations!: Operation[];
  
  constructor(public operationService: OperationsService) {}

  //the ngOnInit method is called when the component is loaded
  ngOnInit() {
    this.loadEvents();
  }

  loadEvents(){
    this.operationService.getOperations().subscribe(
      (response) => {this.operations = response; console.log(response)}, 
      (error)=> {alert(error.message)});
  }

  searchOperations(searchTerm: string) {
    this.operationService.searchOperations(searchTerm).subscribe((operations) => {
      this.foundOperations = operations;
      this.operations = this.foundOperations;
      console.log(this.foundOperations);
    });
  }

 
}
