import React,{Component} from 'react';
import Header from "../components/header";
import Footer from "../components/footer"
import Monitor from "../components/monitor/monitor";
import { connect } from "react-redux";
import { productsFetch } from "../actions/index";


class Home extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.productsFetch();
    console.log(this.props)
  }

  // componentDidMount(){
  //   // แบบที่ 1  this.setState({products : [
  //   //   { productId: 1, productName: "สลัดผัก", unitPrice: "120", thumbnail: "/images/product/1.jpg" },
  //   //   { productId: 2, productName: "ไก่ทอด", unitPrice: "90", thumbnail: "/images/product/2.jpg" },
  //   //   { productId: 3, productName: "บิงซู", unitPrice: "200", thumbnail: "/images/product/3.jpg" },
  //   //   { productId: 4, productName: "เฟรนฟราย", unitPrice: "140", thumbnail: "/images/product/4.jpg" },
  //   //   { productId: 5, productName: "เค้ก 3 ชั้น", unitPrice: "200", thumbnail: "/images/product/5.jpg" },
  //   //   { productId: 6, productName: "กาแฟ เฮลตี้ฟู้ด", unitPrice: "140", thumbnail: "/images/product/6.jpg" }
  //   // ]})

  //   //แบบที่ 2 Rest

  // //   fetch("https://dunyawat-pos-api.herokuapp.com/products",{method : "GET"})
  // //   .then(res => res.json())
  // //   .then(res => {this.setState({products : res })})
  // // 


  // //แบบที่ 3 Axios
  //   axios.get("https://dunyawat-pos-api.herokuapp.com/products").then(res=>{
  //     console.log(res.data);
  //     {this.setState({products : res.data})}
  //   });

  // }
 
  render(){
    return (
      <div className="Home">
        <Header />
        <Monitor products={this.props.products} />
        <Footer company="TEST" email="dunyawat.h@gmail.com" />
      </div>
    );
  }
}

function mapStateToProps({products}){
  return {products};
}

export default connect(mapStateToProps,{ productsFetch })(Home);
