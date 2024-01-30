import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./Caja.module.css"
import { getProductByCode } from "../../redux/actions/productsActions";

const Caja = () => {

const dispatch = useDispatch();

const handleCode = async (code) => {
  const product = await dispatch(getProductByCode(code));
}


  return (
    <>
      <div className={s.listaAgregados}>
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Peso/Unidades</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <input type="number" onChange={handleCode} />
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Caja;