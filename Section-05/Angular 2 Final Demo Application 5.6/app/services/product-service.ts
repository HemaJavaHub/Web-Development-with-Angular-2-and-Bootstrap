  export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public image : string,
    public description: string,
    public categories: Array<string>) {
  }
}