<template>
  <div> 

     <LineChart />
       

     <BarTable :table="table"/>

   

  </div>
    
   


</template>



<script>
import BarTable from './BarTable'
import LineChart from './LineChart'

  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    components: {
      BarTable,
      LineChart
    },
      data: () => ( {
    
      table: [
        {
          "name": "Existing Customers (unchanged contracts)",
          "jan":50,
          "feb": 53,
          "mar": 57,
          "apr":52,
          "may": 56,
          "jun": 59,
          "jul":63,
          "aug":58,
          "sep":65,
          "oct": 65,
          "nov": 69,
          "dec": 64

        },

                {
          "name": "Existing Customers (expansion revenue)",
          "jan":5,
          "feb": 5,
          "mar": 5,
          "apr":5,
          "may": 5,
          "jun": 5,
          "jul":6,
          "aug":5,
          "sep":6,
          "oct": 6,
          "nov": 6,
          "dec": 6

        },

        {
          "name": "New Customers",
          "jan":5,
          "feb": 3,
          "mar": 7,
          "apr":8,
          "may": 6,
          "jun": 9,
          "jul":6,
          "aug":8,
          "sep":5,
          "oct":5,
          "nov": 9,
          "dec":4

        },
        {
          "name": "Churned Customers",
          "jan":-2,
          "feb": -3,
          "mar": -5,
          "apr":-2,
          "may": -6,
          "jun": -9,
          "jul":-3,
          "aug":-8,
          "sep":-6,
          "oct": -7,
          "nov": -6,
          "dec": -4

        },
        {
          "name": "Existing Customers (reduced)",
          "jan":0,
          "feb": -3,
          "mar": 0,
          "apr":-2,
          "may": -6,
          "jun": -9,
          "jul":0,
          "aug":0,
          "sep":-6,
          "oct": 0,
          "nov": 0,
          "dec": -3

        }

     ]
    })
   
  }
</script>
