import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {

  items = Array(20);

  constructor( private popoverCtlr: PopoverController) { }

  ngOnInit() {}

  onclick(valor: number) {
    // console.log(valor)
    this.popoverCtlr.dismiss({
      item: valor
    });
  }

}
