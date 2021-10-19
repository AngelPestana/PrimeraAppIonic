import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list-sliding',
  templateUrl: './list-sliding.page.html',
  styleUrls: ['./list-sliding.page.scss'],
})
export class ListSlidingPage implements OnInit {
  usuarios: Observable<any>;
  constructor( private ds: DataService) { }

  ngOnInit() {
    //this.ds.getUsuarios().subscribe(console.log);
    this.usuarios = this.ds.getUsuarios();
  }

}
