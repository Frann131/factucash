import instance from "../axioscfg";

export const GET_PRODUCT_BY_CODE = "GET_PRODUCT_BY_CODE";

export const getProductByCode = (code) => {
  return async function (dispatch) {
    const response = await instance.get(`product/${code}`);
    const data = response.data;
    dispatch({
      type: GET_PRODUCT_BY_CODE,
      payload: data,
    });
    
  };
};
