import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})

export class DateTimePage implements OnInit {
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
  customPickerOptions: any;
  fecha: Date = new Date();

  customPickerOptions2 = {
    buttons: [
      {
        text: 'Cancelar',
        handler: (event) => {
          console.log(event);
        }
      },
      {
        text: 'Seleccionar',
        handler: (event) => {
          console.log('Pulsaste Seleccionar');
        }
      }
    ]
  };

  customYearValues2 = ['2020', '2030', '2040', '2050'];

  constructor() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: () => console.log('Clicked Save!')
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    };
  }

  ngOnInit() {
  }

  cambiarFecha(evt) {
    console.log(new Date(evt.detail.value));
  }

}
