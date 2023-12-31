/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import {getFavById, getField, clearFavs} from '../../Redux/actions/form_actions';
import Card from "../Card/Card";

import style from './Favorites.module.css';

export default function Favorites() {

  const tokenJwt = sessionStorage.getItem(`token`)
  const googleToken= sessionStorage.getItem('googleToken')
  let token =  tokenJwt ?  tokenJwt : googleToken;


  const allFields = useSelector((state) => state.fieldData);

  const  myFavorites = useSelector(state => state.myFavorites);
  const dispatch = useDispatch();
  const navigate = useNavigate()
 


const toCard = []
myFavorites.map((rel)=>{

const push = allFields.filter(f =>f.id === rel.idsFields )

toCard.push(push)

})




  useEffect(() => {
    dispatch(getField());
    dispatch(getFavById())
    
   if (token === null) navigate("/login")

   return () => {
    //al desmontar limpia el estado de favs
      dispatch(clearFavs());
   };
  }, []);
   
  
  return (
    <div className={style.favoritos} >
      
      {toCard.map((fav) => {
       const field =fav[0]
        return <Card className={style.fav} key={field.id} field={field} esFav = {true} />;
      })}
    </div>
  );
}

