import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	dataTrips: any;
	dataStatus: any;
	dataEmployees: any;
	optionsTrips: any;
	optionsStatus: any;
	optionsEmployees: any;

  constructor() { }

  ngOnInit() {
  	this.dataTrips = {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            datasets: [
                {
                    label: 'Total Viajes',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0]
                }
            ]
        }

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

    this.dataStatus = {
        labels: ['Asignados','Aprobados','Cerrados', 'Conciliados'],
        datasets: [
            {
                data: [5, 3, 0, 5],
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

    this.dataEmployees = {
            labels: ['Empleado 1', 'Empleado 2', 'Empleado 3'],
            datasets: [
                {
                    label: 'Empleados',
                    data: [3, 5, 2],
                    fill: false,
                    borderColor: '#4bc0c0'
                }
            ]
        };

    this.optionsEmployees = {
            title: {
                display: true,
                text: 'Top 5 empleados',
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            }
        };
  }

}
