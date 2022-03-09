import axios from "axios";
import { ORDERS_FETCH } from "./types";

export const ordersFetch = () =>{

    return dispatch => {
        axios.get("https://dunyawat-pos-api.herokuapp.com/orders").then(
            res => {
                dispatch({type : ORDERS_FETCH , payload : res.data});
            }
        )
    }
}

export const orderDelete = id => {
    return dispatch => {
        axios.delete("https://dunyawat-pos-api.herokuapp.com/orders/" + id).then(res => {
            axios.get("https://dunyawat-pos-api.herokuapp.com/orders").then(
                res => {
                    dispatch({type : ORDERS_FETCH , payload : res.data});
            });
        })
    }
}