import { Component, OnInit } from '@angular/core';
import { Rib } from '../../service/rib.model';
import { RibService } from '../../service/rib.service';

@Component({
  selector: 'app-rib-consultation',
  templateUrl: './rib-consultation.component.html',
  styleUrls: ['./rib-consultation.component.css']
})
export class RibConsultationComponent implements OnInit {
  rib!: Rib;
  constructor(private ribService: RibService) { }

  ngOnInit(): void {
    this.ribService.getUserRib().subscribe(
      (response) => {this.rib = response;}, 
      (error)=> {alert(error.message)});
  }

}
