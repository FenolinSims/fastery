import { Component, OnInit } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Subject, Observable } from 'rxjs';

import { Products } from '../../assets/products_json';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['../home/home.component.scss',
              './shop.component.scss',
              ]
})
export class ShopComponent implements OnInit {
  tech_products: any[] = [];
  laptop_products: any[] = [];
  softwares_products: any[] = [];

  appliance_products: any[] = [];
  sports_products: any[] = [];
  movies_products: any[] = [];
  mobile_access_products: any[] = [];

  burger_menu: boolean = false;

  Categories: any[] = [];
  Category_json: any[] = [];

  Product_display: any[] = [];

  updated_tech_json = new Subject<any>();

  shop_hero_slider = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "arrows": false
  }

  slideConfig = {
    "slidesToShow": 9, 
    "slidesToScroll": 9,
    "arrows": false,
    "responsive": [
    {
      breakpoint: 1300,
      settings: {
        "slidesToShow": 8, 
        "slidesToScroll": 8,
      },

    },
    {
      breakpoint: 1240,
      settings: {
        "slidesToShow": 8, 
        "slidesToScroll": 8,
      },
        
    },
    {
      breakpoint: 1160,
      settings: {
        "slidesToShow": 6, 
        "slidesToScroll": 6,
      },
        
    },
    {
      breakpoint: 870,
      settings: {
        "slidesToShow": 5, 
        "slidesToScroll": 5,
      },
        
    },
    {
      breakpoint: 720,
      settings: {
        "slidesToShow": 4, 
        "slidesToScroll": 4,
      },
        
    },
    {
      breakpoint: 570,
      settings: {
        "slidesToShow": 3, 
        "slidesToScroll": 3,
      },
        
    },
    {
      breakpoint: 440,
      settings: {
        "slidesToShow": 2, 
        "slidesToScroll": 2,
      },
        
    }

    ]
  };
  constructor(private http: HttpClient,
              private products: Products) { 
  }

  ngOnInit(){
   


  this.tech_products = (this.products.tech_products.tech_products);
  this.laptop_products = (this.products.laptop_products.laptop);
  this.softwares_products = (this.products.softwares.softwares);
  this.appliance_products = (this.products.appliances.appliances);
  this.mobile_access_products = (this.products.mobile_accessories.mobile_accessories);




  this.Category_json = [
    {
      name: 'Top Offers',
      image: 'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100'
    },
    {
      name: 'Grocery',
      image: 'https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100'
    },
    {
      name: 'Mobiles',
      image: 'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100'
    },
    {
      name: 'Fashion',
      image: 'https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100'
    },
    {
      name: 'Electronics',
      image: 'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100'
    },
    {
      name: 'Home',
      image: 'https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100'
    },
    {
      name: 'Applicances',
      image: 'https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100'
    },
    {
      name: 'Travel',
      image: 'https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100'
    },
    {
      name: 'Beauty, Toys & More',
      image: 'https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100'
    }
  ]
  this.Categories = this.Category_json;

    this.Product_display = [
      {
        product_category: 'Feautured Products'
      },
      {
        product_category: 'Offers for You'
      },
      {
        product_category: 'Mobile & Laptop Accessories'
      },
      {
        product_category: 'Home Applicances'
      },
      {
        product_category: 'Fashion Trends'
      },
    ];
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

  getProducts() {

     const headers = {
      'Accept': '*/*',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, HEAD',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
    }

      // this.tech_products = this.tech_products_json.tech_products;
      // console.log(this.tech_products);
      // console.log(this.tech_products_json.tech_products);


    // this.http.get("http://localhost:7000/products/tech", {headers})
    // .subscribe((product_json) => {
    //   this.tech_products.push(product_json);
    //   console.log(product_json);

    //   // console.log(this.tech_products[0].result);

    //   this.tech_products = this.tech_products[0].result;

    // });

    // this.http.get("http://localhost:7000/products/appliances", {headers})
    // .subscribe((product_json) => {
    //   this.appliance_products.push(product_json);
    //   console.log(product_json);

    //   // console.log(this.cloth_products[0].result);

    //   this.appliance_products = this.appliance_products[0].result;

    // });

    // this.http.get("http://localhost:7000/products/movies", {headers})
    // .subscribe((product_json) => {
    //   this.movies_products.push(product_json);
    //   console.log(product_json);

    //   // console.log(this.cloth_products[0].result);

    //   this.movies_products = this.movies_products[0].result;

    // });

    //  this.http.get("http://localhost:7000/products/softwares", {headers})
    // .subscribe((product_json) => {
    //   this.software_products.push(product_json);
    //   console.log(product_json);

    //   // console.log(this.cloth_products[0].result);

    //   this.software_products = this.software_products[0].result;

    // });



    //  this.http.get("http://localhost:7000/products/sports", {headers})
    // .subscribe((product_json) => {
    //   this.sports_products.push(product_json);
    //   console.log(product_json);

    //   // console.log(this.cloth_products[0].result);

    //   this.sports_products = this.sports_products[0].result;

    // });

    
  }
  
  rgetProducts() {
    return this.updated_tech_json.asObservable();
  }

  
}


