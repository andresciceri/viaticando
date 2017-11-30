import { Component, OnInit, Input, OnChanges, SimpleChange  } from '@angular/core';

@Component({
  selector: 'app-chart-trips-status',
  templateUrl: './chart-trips-status.component.html',
  styleUrls: ['./chart-trips-status.component.css']
})
export class ChartTripsStatusComponent {

	private _data = [];
	dataStatus: any;
	optionsStatus: any;

  constructor() { 

  	this.dataStatus = {
        labels: ['Asignados','Aprobados','Cerrados', 'Conciliados'],
        datasets: [
            {
                data: this._data,
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#4bc0c0"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#4bc0c0"
                ]
            }]    
        };

    this.optionsStatus = {
            title: {
                display: true,
                text: 'Estado de viajes',
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            }
        }; 
  }

  @Input()
  set data(info: string[]) {
  	this._data = info;
  	this.dataStatus = {
        labels: ['Asignados','Aprobados','Cerrados', 'Conciliados'],
        datasets: [
            {
                data: this._data,
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#4bc0c0"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#4bc0c0"
                ]
            }]    
        }; 	
  }
 
  get data(): string[] { return this._data; } 

}
