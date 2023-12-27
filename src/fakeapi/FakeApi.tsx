import { Faker, faker } from "@faker-js/faker";

export interface LatestTrendProps {
    productImg: string;
    productName: string;
  }

export interface SmartProps{
    productName : string
}

export interface ProductProps{
    productImg: string;
    productName: string;
    productRating: number;
    productOrgPrice: number;
    productDisPrice: number;
    productsReviews: number;
}

export function fetchSmartData(){
    const smartData : SmartProps[] = []
    
    for (let i = 0; i <=5; i++) {
        smartData.push({
            productName : faker.vehicle.bicycle()
        })       
    }
    return smartData;
}

export function FetchProducts(){
    const products: ProductProps[] = [];
  
    for (let i = 0; i <= 30; i++) {
      const productImg = faker.image.url({
        height: 400,
        width: 300,
      });
      const productName = faker.vehicle.bicycle();
      const productRating = faker.number.int({ min: 1, max: 5 });
      const productOrgPrice = Number(
        faker.commerce.price({ min: 300, max: 5000 })
      );
      const productDisPrice = Number(
        faker.commerce.price({
          min: 300,
          max: Number(productOrgPrice),
        })
      );
      const productsReviews = faker.number.int({ min: 10, max: 50 });
  
      products.push({
        productImg,
        productName,
        productRating,
        productOrgPrice,
        productDisPrice,
        productsReviews,
      });
    }
  
    return products;
  };
  