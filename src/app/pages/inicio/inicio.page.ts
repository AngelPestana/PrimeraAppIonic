import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componente: Componente[] = [
    {
      icon: 'alert-circle',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'newspaper',
      name: 'Action-Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'people',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-on',
      name: 'Buttons',
      redirectTo: '/buttons'
    },
    {
      icon: 'id-card',
      name: 'Card',
      redirectTo: '/card'
    },
    {
      icon: 'checkbox',
      name: 'Check',
      redirectTo: '/check'
    },
    {
      icon: 'calendar',
      name: 'Date Time',
      redirectTo: '/date-time'
    },
    {
      icon: 'star',
      name: 'Fab',
      redirectTo: '/fab'
    },
    {
      icon: 'grid',
      name: 'Grid',
      redirectTo: '/grid'
    },
    {
      icon: 'infinite',
      name: 'Infinite',
      redirectTo: '/infinite'
    },
    {
      icon: 'information',
      name: 'Input',
      redirectTo: '/input'
    },
    {
      icon: 'list-circle',
      name: 'List-Sliding',
      redirectTo: '/list-sliding'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
