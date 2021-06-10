import React, {Component} from "react";
import {Link} from "react-router-dom";

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {date : new Date()};
        setInterval(() => this.tick() , 1000)
    }

    tick() {
         // this.state = {date : new Date()}; ไม่ได้
         this.setState({date : new Date()})

    }

    render(){

        return (

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 text-left">
                        <h1 className="text-success"><img style={{height:70}} src="/images/logo/logo.png" alt="" /> เฮลตี้ คาเฟ่ </h1>
                    </div>
                    <div className="col-md-4 text-right">
                        <h5 className="text-muted mt-4">{this.state.date.toLocaleTimeString()}</h5>
                        <ul className="list-inline">
                            <li className="list-inline-item"><Link className="text-success" to="/">หน้าหลัก</Link></li>
                            <li className="list-inline-item">|</li>
                            <li className="list-inline-item"><Link className="text-success" to="/orders">รายการสั่งซื้อ</Link></li>
                            <li className="list-inline-item">|</li>
                            <li className="list-inline-item"><Link className="text-success" to="/products">สิ้นค้า</Link></li>
                            <li className="list-inline-item">|</li>
                            <li className="list-inline-item"><Link className="text-success" to="/about">เกียวกับเรา</Link></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>

        )
    }
}

export default Header;