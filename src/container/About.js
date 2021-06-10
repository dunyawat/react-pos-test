import React,{Component} from 'react';
import Header from "../components/header";
import Footer from "../components/footer";

class About extends Component {
   
    render(){
      return (
        <div className="About">
          <Header />

            <div className="container col-md-5">
                <h3>สวัสดีครับ</h3>
                <p className="title text-justify mt-4 mb-4">
                    ...................
                </p>
                <h4 className="text-success">จาก เฮลตี้ คาเฟ่</h4>
            </div>

          <Footer company="TEST" email="dunyawat.h@gmail.com" />
        </div>
      );
    }
  }
  
  export default About;