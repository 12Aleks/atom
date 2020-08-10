<template>
    <v-container fluid class="grey lighten-5">
        <v-row>
            <v-col cols="12" offset-sm="3" sm="6" offset-md="3" md="6" offset-lg="3" lg="6">
                <h1 class="text--secondary mb-3">Orders</h1>
                <v-list
                        max-width="475"
                        class="mx-auto">
                        <v-list-item
                        v-for="order in orders"
                        :key="order.id"
                        >
                                <v-list-item-action>
                                    <v-checkbox
                                            color="yellow darken-2"
                                            @change="markDone"
                                            v-model="order.done"
                                    ></v-checkbox>
                                </v-list-item-action>

                                <v-list-item-content>
                                    <v-list-item-title>{{order.name}}</v-list-item-title>
                                    <v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
                                </v-list-item-content>

                                <v-list-item-action>
                                  <v-btn class="indigo" dark
                                  :to="'/ad/' + order.id"
                                  >
                                      Open
                                  </v-btn>
                                </v-list-item-action>
                        </v-list-item>
                </v-list>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Orders",
        data(){
          return{
              orders: [
                  {
                      id: 'fsd3',
                      name: 'Alex',
                      phone: '435232232',
                      adId: 'h234',
                      done: false
                  }
              ]
          }
        },
        methods:{
            markDone(order){
                order.done = true

            }
        }
    }
</script>

<style scoped>

</style>
