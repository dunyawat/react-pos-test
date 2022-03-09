import React,{Component} from "react";
import Calculator from "./calculator";
import ProductList from "../product/productlist";
import axios from "axios";

class Monitor extends Component {

    constructor(props){
        super(props);
        this.state={totalPrice : 0 , orders: [] ,confirm:false,msg:''};
        this.addOrder = this.addOrder.bind(this);
        this.delOrder = this.delOrder.bind(this);
        this.dcOrder = this.dcOrder.bind(this);
        this.InOrder = this.InOrder.bind(this);
        this.comfirmOrder =this.comfirmOrder.bind(this);
        this.cancelOrder = this.cancelOrder.bind(this);
    }

    addOrder(product) {
        let findOrder = this.state.orders.find(orders => orders.product._id == product._id);
        if(findOrder) {
            findOrder.quantity++;
        } else{
            this.state.orders.push({product:product,quantity:1});
        }
        const totalPrice = this.state.totalPrice + parseInt(product.unitPrice);
        this.setState({totalPrice:totalPrice,orders:this.state.orders});
    }

    delOrder(product) {
        let findOrder = this.state.orders.find(order => order.product._id == product._id);
        let resultOrder = this.state.orders.filter(order => order.product._id != product._id);
        const totalPrice = this.state.totalPrice - (findOrder.quantity * parseInt(findOrder.product.unitPrice));

        this.setState({totalPrice:totalPrice,orders:resultOrder,confirm:false});
    }   

    dcOrder(product){
        let findOrder = this.state.orders.find(order => order.product._id == product._id);
        if(findOrder) {
            findOrder.quantity--;
            var total = this.state.totalPrice - parseInt(findOrder.product.unitPrice);
        }
        if(findOrder.quantity < 1){
            this.state.orders.pop();
        }
        const totalPrice = total
        this.setState({totalPrice:totalPrice,orders:this.state.orders,confirm:false});
    }

    InOrder(product){
        let findOrder = this.state.orders.find(order => order.product._id == product._id);
        if(findOrder) {
            findOrder.quantity++;
        }
        const totalPrice = this.state.totalPrice + parseInt(findOrder.product.unitPrice);
        this.setState({totalPrice:totalPrice,orders:this.state.orders,confirm:false});
    }

    cancelOrder(){
        this.setState({totalPrice:0,orders:[],confirm:false,confirm:false})
    }

    comfirmOrder(){
        const{totalPrice,orders} = this.state;
        if(orders && orders.length > 0){
            axios.post("https://dunyawat-pos-api.herokuapp.com/orders",{orderedDate : new Date(),totalPrice,orders})
            .then(res => {
                this.setState({totalPrice:0,orders:[],confirm:true,msg:'บัญทึกรายการสั่งซื้อเรียบร้อยแล้ว'})
            })
        }else{
            this.setState({totalPrice:0,orders:[],confirm:true,msg:'กรุณาเลือกสินค้า'})
        }
        
    }

    render(){
        return (
            <div className="container-fluid">
                {this.state.confirm &&
                    <div className="alert alert-secondary title text-right" role="alert">
                        {this.state.msg}
                    </div>
                }
                

                <div className="row">
                    <div className="col-md-9">
                    { this.props.products && Array.isArray(this.props.products) &&
                        <ProductList products={this.props.products} onAddOrder={this.addOrder} />
                    }
                    </div>
                    <div className="col-md-3">
                        <Calculator totalPrice={this.state.totalPrice} orders={this.state.orders} onCancelOrder={this.cancelOrder} onDelOrder={this.delOrder} onDcOrder={this.dcOrder} onInOrder={this.InOrder} onConfirmOrder={this.comfirmOrder} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Monitor;