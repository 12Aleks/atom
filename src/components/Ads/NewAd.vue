<template>
    <v-container fluid class="fill-height grey lighten-5">
        <v-row>
            <v-col cols="12" offset-sm="3" sm="6" offset-md="3" md="6" offset-lg="3" lg="6">
                <h1 class="text--secondary mb-3">Create new Ad</h1>
                <v-form ref="form"
                        v-model="valid"
                        validation>
                    <v-text-field
                            label="Ad title"
                            name="title"
                            type="text"
                            v-model="title"
                            required
                            :rules="[v => !!v  || 'Title is required']"
                    ></v-text-field>

                    <v-text-field
                            label="Description"
                            name="description"
                            type="text"
                            v-model="description"
                            :rules="[v => !!v  || 'Description is required']"
                    ></v-text-field>
                </v-form>
            </v-col>
            <v-col cols="12" offset-sm="3" sm="6" offset-md="3" md="6" offset-lg="3" lg="6">
                <v-switch label="Add to promo?"
                          v-model="promo"
                          color="indigo"
                >
                </v-switch>
                <v-spacer></v-spacer>
                <v-btn  :laoding = 'laoding'
                        :disabled='!valid || laoding'
                        class='success'
                        @click='createAd'>
                    Create Ad

                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "NewAd",
        data(){
            return{
                title: '',
                description: '',
                promo: false,
                ownerId: ' ',
                valid: false,
                src: 'https://miro.medium.com/max/3920/1*oZqGznbYXJfBlvGp5gQlYQ.jpeg'
            }
        },
        computed:{
           laoding(){
              return  this.$store.getters.laoding
           }
        },
        methods: {
            createAd(){
                if(this.$refs.form.validate()){
                    const ad = {
                        title: this.title,
                        description: this.description,
                        ownerId: this.ownerId,
                        promo: this.promo,
                        src: this.src
                    }

                    this.$store.dispatch('createAd', ad )
                    .then(() => {
                        this.$router.push('/list')
                    }).catch(() => {})

                }
            }
        }
    }
</script>

<style scoped>

</style>
