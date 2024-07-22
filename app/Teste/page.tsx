'use client';
import CartContext from '@/contexts/CartContext';
import{ useContext } from 'react'

export default function page() {

  const teste = useContext(CartContext);
  console.log(teste);
  


  return (
    <div>page</div>
  )
}
