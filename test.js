//gerar um array com todas as posicoes da soma da quantidade com seu respctivo id

travel = [
  {travel_id: 4, quantity: 1},
  {travel_id: 3, quantity: 2}
]

totalQuantity = travel.reduce(function(acc, t){
  return acc + t.quantity 
}, 0)


// console.log(totalQuantity)
