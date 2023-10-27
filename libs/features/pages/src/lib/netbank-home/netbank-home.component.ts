import { Component } from '@angular/core';

import { ImageConfig } from 'image';

@Component({
  selector: 'lib-netbank-home',
  templateUrl: './netbank-home.component.html',
  styleUrls: ['./netbank-home.component.scss'],
})
export class NetbankHomeComponent {

  imageConfig: ImageConfig = {
    title:"feels",
    imageSrc:"https://images.unsplash.com/photo-1697530152990-2c47d3cf7d7a?auto=format&fit=crop&q=80&w=1512&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    visualisation: 3
  }

}
