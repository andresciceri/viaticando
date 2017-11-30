import { Component, OnInit, Input, OnChanges, SimpleChange  } from '@angular/core';

@Component({
  selector: 'app-chart-top-users',
  templateUrl: './chart-top-users.component.html',
  styleUrls: ['./chart-top-users.component.css']
})
export class ChartTopUsersComponent {

	private _labels = [];
	private _data = [];

	dataEmployees: any;
	optionsEmployees: any;

  constructor() {   	

    this.optionsEmployees = {
            title: {
                display: true,
                text: 'Viajes por Empleados',
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            }
        };
  }

  @Input()
  set label(list: string[]) {
  	this._labels = list;
  	this.dataEmployees = {
            labels: this._labels,
            datasets: [
                {
                    label: 'Empleados',
                    data: this._data,
                    fill: false,
                    borderColor: '#4bc0c0'
                }
            ]
        };  	
  }
 
  get label(): string[] { return this._labels; } 

  @Input()
  set data(info: number[]) {
  	this._data = info;
  	this.dataEmployees = {
            labels: this._labels,
            datasets: [
                {
                    label: 'Empleados',
                    data: this._data,
                    fill: false,
                    borderColor: '#4bc0c0'
                }
            ]
        };
  }
 
  get data(): number[] { return this._data; }       

}
