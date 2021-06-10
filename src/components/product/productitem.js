import React , { Component } from "react";

// const ProductItem = (props) => {
//     const {productName , unitPrice} = props
//     return(
//         <div>
//             <p>{productName}</p>
//             <p>{unitPrice}</p>
//         </div>
//     )
// }

class ProductItem extends Component {

    constructor(props){
        super(props);
        console.log('con |' + props.productName);
    }

    render(){
        const {productName , unitPrice , thumbnail ,productDetail} = this.props.product;

        return(
            <div className="col-md-3 col-sm-6">
                <img className="img-fluid img-thimbnail" src={thumbnail} />
                <h5 className="mt-2">{productName}</h5>
                <p>{productDetail}</p>
                <p className="text-right title">{unitPrice} THB</p>

                {this.props.onAddOrder &&
                <button className="btn btn-block btn-secondary title"  onClick={() => this.props.onAddOrder(this.props.product)}>
                    ซื้อ
                </button>
                }

                {(this.props.onDelProduct || this.props.onEditProduct) && 
                <button className="btn btn-info col-5 title" onClick={() => this.props.onEditProduct(this.props.product)}>
                    แก้ไข
                </button>
                }

                {(this.props.onDelProduct || this.props.onEditProduct) && 
                <button className="btn btn-danger col-5 float-right title"  onClick={() => this.props.onDelProduct(this.props.product)}>
                    ลบ
                </button> 
                }
            
                <hr />
            </div>
        )
    }
}

export default ProductItem;