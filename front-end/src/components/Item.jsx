import React from 'react'

const Item = () => {
  return (
  <a href="" className="flex flex-col gap-0">
    <img
      src="https://lh3.googleusercontent.com/p/AF1QipOWlAx5XmM72yTRO07lszovLJMl0cscHjyI2D1L=s680-w680-h510" 
      alt="Imagem serviço" 
      className="aspect-square object-cover rounded-2xl"
      />

    <div>
    <h3 className="text-xl font-semibold">São Leopoldo, Rio Grande do Sul </h3>
    <p className="truncate text-gray-600"> De R & R Jardinagem e Paisagismo - Somos uma empresa familiar! Seu jardim é nosso compromisso.
      Temos serviços de jardinagem, paisagismo, podas, lavagem de telhados e reparos em geral</p>
    <p>
      <span className="font-semibold">R$100</span> por m²
    </p>
    </div> 
  </a>
  )
}

export default Item 