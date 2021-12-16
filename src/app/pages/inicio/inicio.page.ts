import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Componente } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componente: Observable<Componente[]>;

  constructor( private ds: DataService) {
    this.componente = this.ds.getMenu();
  }

  ngOnInit() {
  }

}

