import axios from "axios";
import * as actionTypes from "../constants/productConstant";

//3.bo function aaya aur Yaha aaya aur isne yaha API call ki
const URL = "http://localhost:4001";
const getAllProducts = () => async (dispatch) => {
  try {
    // 4.yaha db se sara data iss data variable me aagyah
    const { data } = await axios.get(`${URL}/products`);
    // 5.fir bo sara data dispatch kr diya, ab ye product reducer ke ander jayega
    dispatch({ type: actionTypes.GET_ALL_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_ALL_PRODUCTS_FAIL,
      payload: error.message,
    });
  }
};

export default getAllProducts;