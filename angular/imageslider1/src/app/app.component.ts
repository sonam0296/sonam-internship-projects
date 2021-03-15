import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'imageslider';

  images = [
    { img: "../assets/images/img-1.jpg" },
    { img: "../assets/images/img-2.jpg" },
    { img: "../assets/images/img-3.jpg" },
    { img: "../assets/images/img-4.jpg" },
    { img: "../assets/images/img-5.jpg" },
    { img: "../assets/images/img-6.jpg" },

  ];

  slideConfig = {
    "slideToShow": 3,
    "slidesToScroll": 3,
    "dots": true,
    "infinite": true,

  };

}
