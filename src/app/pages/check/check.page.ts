import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {
  data = [
    {
      color: 'primary',
      selected: 'true'
    },
    {
      color: 'dark',
      selected: 'false'
    },
    {
      color: 'success',
      selected: 'true'
    },
    {
      color: 'danger',
      selected: 'false'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  onClick( item ) {
    console.log(item);
  }

  verData() {
    //console.log(this.data[2].toString());
    //console.log(this.data.length);
    let mensaje: string;
    let cont = 0;
    this.data.forEach(element => {
      mensaje = 'ID: '+cont+' Color: '+element.color+' Selected: '+element.selected;
      cont++;
      console.log(mensaje);
    });
  }

}
