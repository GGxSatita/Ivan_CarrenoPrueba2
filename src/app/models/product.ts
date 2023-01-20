export type Producto = {
  id : number,
  title : string,
  description : string,
  price : string,
  discountPencentage : number,
  rating : number,
  stock : number,
  brand : string,
  category : string,
  thumnail : string,
  images : Array<string>
}
export type ProductoResponse = {
  products : Array<Producto>,
  total : number,
  skip : number | null,
  limit : number
}
