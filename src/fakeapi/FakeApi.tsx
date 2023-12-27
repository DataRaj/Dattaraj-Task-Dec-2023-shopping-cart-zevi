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