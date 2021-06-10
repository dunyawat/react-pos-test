import React,{Component} from "react";
import ProductItem from "./productitem";

class ProductList extends Component {

    showProducts(){
        if(this.props.products){
            return this.props.products.map(product => (
                <ProductItem key={product.id}
                // productName={product.productName} unitPrice={product.unitPrice} 
                    product={product} onAddOrder={this.props.onAddOrder} onDelProduct={this.props.onDelProduct} onEditProduct={this.props.onEditProduct}
                />
            ))
        }
    }

    render(){
        return(
            <div className="row">
                {this.showProducts()}
            </div>
        )
    }
}

export default ProductList;