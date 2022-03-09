import axios from "axios";
import { PRODUCTS_FETCH ,PRODUCT_CREATE,PRODUCT_FETCH,PRODUCT_UPDATE} from "./types";

export const productFetch = _id => {
    return dispatch => {
        axios.get("https://dunyawat-pos-api.herokuapp.com/product/" + _id).then(
            res => {
                dispatch({ type : PRODUCT_FETCH, payload : res.data});
            }
        )
    }
}

export const productsFetch = () =>{

    return dispatch => {
        axios.get("https://dunyawat-pos-api.herokuapp.com/product").then(
            res => {
                dispatch({ type : PRODUCTS_FETCH, payload : res.data.data});
                console.log(res.data)
            }
        )
    }
}

export const productDelete = _id => {
    return dispatch => {
        axios.delete("https://dunyawat-pos-api.herokuapp.com/product/" + _id).then(res => {
            axios.get("https://dunyawat-pos-api.herokuapp.com/product").then(
                res => {
                    dispatch({ type : PRODUCTS_FETCH, payload : res.data});
            })
        })
    }
}

export const productCreate = values => {
    return dispatch => {
        axios.post("https://dunyawat-pos-api.herokuapp.com/product",values).then(
            res => {
                dispatch({type: PRODUCT_CREATE});
            }
        )
    }
}

export const productUpdate = (_id,values) => {
    return dispatch => {
        axios.put("https://dunyawat-pos-api.herokuapp.com/product/"+_id ,values).then(res =>{
            dispatch({type:PRODUCT_UPDATE});
        })
    }
}