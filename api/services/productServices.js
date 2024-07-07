class ProductService{
  constructor(){
    this.products = [{id: 1, name: 'Product 1', price: 30}, {id: 2, name: 'Product 2', price: 50}, {id: 3, name: 'Product 3', price: 80}, {id: 4, name: 'Product 4', price: 20}]
    this.generate()
  }
  async generate(){
    return this.products
  }
  async find_item(id){
    return this.products.find((prod)=> prod.id == id)
  }
  async find_index(id){
    return this.products.findIndex((prod)=> prod.id == id)
  }
  async create_item(new_item){
    this.products.push(new_item)
    return {message: 'Producto creado', data: new_item, products: this.products}
  }
  async edit_item(id, new_item){
    let index = this.find_item(id)
    if(index != -1){
      this.products[index] = {...this.products[index], ...new_item}
      return this.products
    }
  }
  async delete_item(id){
    const index = this.find_index(id)
    if(index != -1){
      this.products.splice(index,1)
      return this.products
    }
  }
}
export default ProductService;
