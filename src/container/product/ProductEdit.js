import React , {Component} from "react";
import {connect} from "react-redux";
import { productCreate,productUpdate,productFetch} from "../../actions";
import Header from "../../components/header";
import ProductForm from "../../components/product/productForm";
import Footer from "../../components/footer";



class ProductEdit extends Component{

    componentDidMount(){
        console.log(this.props.match);
        if(this.props.match.params._id){
            this.props.productFetch(this.props.match.params._id);
        }
    }


    render(){
        const { formValues,match,products,productCreate,productUpdate } =  this.props
        return(
            <div>
                <Header />
                <div className="container col-md-5">

                    { match.path.indexOf("add") > 0 &&(
                        <div>
                            <h2>เพิ่ม</h2>
                            { products.saved && (
                                    <div className="alert alert-secondary title" role="alert">
                                        {products.msg}
                                    </div>
                                )
                            }
                            <ProductForm onProductSubmit={() => productCreate(formValues)} />
                        </div>
                    )}
        
                    { match.path.indexOf("edit") > 0 &&(
                        <div>
                            <h2>แก้ไข</h2>
                            { products.saved && (
                                    <div className="alert alert-secondary title" role="alert">
                                        {products.msg}
                                    </div>
                                )
                            }
                            <ProductForm  onProductSubmit={() => productUpdate(match.params.id , formValues)} />
                        </div>
                    )}
                </div>
                <Footer />
            </div>
        )
    }
}

function mapStateToProps ({form , products}) {
    return { formValues : form.productForm ? form.productForm.values : null , products};
}

export default connect(mapStateToProps,{productCreate,productUpdate,productFetch})(ProductEdit);