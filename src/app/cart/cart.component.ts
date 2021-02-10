import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HTTPService } from '../shared/service/http.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  constructor(
    private _HTTPService: HTTPService,
    private route: ActivatedRoute,
  ) { }

  items: any = []
  orderSummary: any = {};
  id: string = ''
  currency: any = '$'
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this._HTTPService.getCartData(this.id).subscribe((res: any) => {
          try {
            this.orderSummary = res.cartDetails.cartSummary
            this.items = res.cartDetails.cartItems
          } catch (e) {
            this.items = [];
          }

        }, (error) => {
          console.log(error)
        })
      } else {
        console.log(/******* Error Handler *******/)
      }
    });
  }

  quantityHandler(type: string, item: any) {
    if (type === '+') {
      item.itemQuantity = (item.itemQuantity < 100) ? item.itemQuantity = parseInt(item.itemQuantity) + 1 : 100
    }
    if (type === '-') {
      item.itemQuantity = (item.itemQuantity > 1) ? item.itemQuantity = parseInt(item.itemQuantity) - 1 : 1
    }
  }
}
