<template>
    <v-app>
    <v-main>
      <v-container>
        <h2> </h2>

        <v-card>
          <v-data-table 
              :items="table" 
              :headers= "headers"
              class="evevation-1"
              header-text='text'
         
              :hide-default-footer="true">
              <template v-slot:item= "{item}">
                <tr>
                  <td>{{item.name}}</td>
                  <td>{{item.jan}}</td>
                  <td>{{item.feb}}</td>
                  <td>{{item.mar}}</td>
                  <td>{{item.apr}}</td>
                  <td>{{item.may}}</td>
                  <td>{{item.jun}}</td>
                  <td>{{item.jul}}</td>
                  <td>{{item.aug}}</td>
                  <td>{{item.sep}}</td>
                  <td>{{item.oct}}</td>
                  <td>{{item.nov}}</td>
                  <td>{{item.dec}}</td>


                </tr>
              </template>
              <template slot="body.append">
                <tr class="pink--text">
                  <th class="title">Net</th>


                <th class="title">{{netTotal('jan')}}</th>
                  <th class="title">{{netTotal('feb')}}</th>
                  <th class="title">{{netTotal('mar')}}</th>
                  <th class="title">{{netTotal('apr')}}</th>
                  <th class="title">{{netTotal('may')}}</th>
                  <th class="title">{{netTotal('jun')}}</th>
                  <th class="title">{{netTotal('jul')}}</th>
                  <th class="title">{{netTotal('aug')}}</th>
                  <th class="title">{{netTotal('sep')}}</th>
                  <th class="title">{{netTotal('oct')}}</th>
                  <th class="title">{{netTotal('nov')}}</th>
                  <th class="title">{{netTotal('dec')}}</th> 

                  
                </tr>
              </template>
        </v-data-table>
        </v-card>
        
      </v-container>
    </v-main>
  </v-app>
</template>

<script>


export default {
    props: ["table"],
    data: () => ({
        drawer: null,
        headers: [

            {
                text: "Recurring Revenue",
                align: "left",
                value: 'name'
            },
            {text: "Jan", value: "jan"},
            {text: "Feb", value: "feb"},
            {text: "Mar", value: "mar"},
            {text: "Apr", value: "apr"},
            {text: "May", value: "may"},
            {text: "Jun", value: "jun"},
            {text: "Jul", value: "jul"},
            {text: "Aug", value: "aug"},
            {text: "Sep", value: "sep"},
            {text: "Oct", value: "oct"},
            {text: "Nov", value: "nov"},
            {text: "Dec", value: "dec"},


              ],

    }),

    methods: {
      netTotal(key) {
         // sum data in give key (property)
        return this.table.reduce((a, b) => a + (b[key] || 0), 0)
      }
    },
    
}
</script>

<style scoped>

</style>