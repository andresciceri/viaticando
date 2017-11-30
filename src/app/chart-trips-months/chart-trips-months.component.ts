import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart-trips-months',
  templateUrl: './chart-trips-months.component.html',
  styleUrls: ['./chart-trips-months.component.css']
})
export class ChartTripsMonthsComponent  {

	private _data = [];
	private _labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
	dataTrips: any;	
	optionsTrips: any;

  constructor() {   	

    this.optionsTrips = {
            title: {
                display: true,
                text: 'Viajes por Mes',
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            }
        };
  }

  @Input()
  set data(info: number[]) {
  	this._data = info;
  	this.dataTrips = {
            labels: this._labels,
            datasets: [
                {
                    label: 'Total Viajes',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: this._data
                }
            ]
        };
  }
 
  get data(): number[] { return this._data; }  

}
