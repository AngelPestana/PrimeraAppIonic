import { Component, OnInit, ViewChild } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;
  elementos: string[] = ['Buenos dias', 'Buenas tardes', 'Buenas noches', 'Adios'];
  reorder = true;
  constructor() { }

  ngOnInit() {
  }

  doReorder(event) {
    console.log(event);
    console.log(this.elementos);
    this.elementos = event.detail.complete(this.elementos);
    console.log(this.elementos);
  }

  reOrdenar() {
    this.reorder = !this.reorder;
  }

}
