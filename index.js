const inventory = [

    {type:   "machine", value: 5000},


    {type:   "machine", value:  650},


    {type:      "duck", value:   10},


    {type: "furniture", value: 1200},


    {type:   "machine", value:   77}


]
      let total=inventory.filter(a=>a.type==="machine").reduce((total,item)=>total+item.value,0)
console.log(total)