import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  product: any;
  message: any;
  isError = false;

  constructor(private route: ActivatedRoute,private httpService:HttpService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['productId'];
      this.httpService.getHttp("users/" + id + ".json").subscribe(data => {
        this.product = data['data'];
        console.log(this.product);
      },
      error => {
        this.isError = true;
        this.hideMessage();
        this.message = this.httpService.getErrorMessage(error);
      });
    });
  }
  hideMessage() {
    setTimeout(() => {
      this.isError = false;
    }, 6000);
  }

}
