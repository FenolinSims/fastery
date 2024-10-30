import { Component, OnInit, ViewChild } from '@angular/core';

import { SlickCarouselModule } from 'ngx-slick-carousel';

import { Products } from '../../assets/products_json';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  todays_deals: any[] = [];
  todays_deals_2: any[] = [];

  burger_menu: boolean = false;


  Products: any[] = [];

  slideConfig = {
    "slidesToShow": 5, 
    "slidesToScroll": 5,
    "arrows": false,
    "responsive": [
    {
      breakpoint: 1320,
      settings: {
        "slidesToShow": 5, 
        "slidesToScroll": 5,
      },

    },
    {
      breakpoint: 1062,
      settings: {
        "slidesToShow": 4, 
        "slidesToScroll": 4,
      },
        
    },
    {
      breakpoint: 850,
      settings: {
        "slidesToShow": 3, 
        "slidesToScroll": 3,
      },
        
    },
    {
      breakpoint: 640,
      settings: {
        "slidesToShow": 2, 
        "slidesToScroll": 2,
      },
        
    },
    {
      breakpoint: 420,
      settings: {
        "slidesToShow": 2, 
        "slidesToScroll": 2,
      },
        
    }

    ]
  };

  constructor(private products: Products) {
   }

  ngOnInit() {
    for(let i=0; i<20; i++) {
      this.Products.push(i);
    }

    this.todays_deals = this.products.todays_deals.todays_deals;
    this.todays_deals_2 = this.products.todays_deals_2.todays_deals;
  }

  openBurger() {
    if(this.burger_menu == false) {
      this.burger_menu = true;
    }
    else {
      this.burger_menu = false;
    }
  }

  linkClicked() {
    this.burger_menu = false;
  }
  
  slickInit(e: any) {
    console.log('slick initialized');
  }
  
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  

}
