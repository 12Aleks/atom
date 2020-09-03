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
                            multi-line
                            :rules="[v => !!v  || 'Description is required']"
                    ></v-text-field>
                </v-form>
            </v-col>
            <v-col cols="12" offset-sm="3" sm="6" offset-md="3" md="6" offset-lg="3" lg="6">
                <v-btn

                        color="blue-grey"
                        class="white--text"
                        @click="triggerUpload"
                >
                    Upload
                    <v-icon right dark>mdi-cloud-upload</v-icon>
                </v-btn>
                <input ref='fileInput'
                       type="file"
                       class="pl-2"
                       style="display: none"
                       accept="image/*"
                       @change="onFileChange"
                >
                <v-row>
                    <v-col cols="12">
                        <img :src="imageSrc" alt="" height="100" v-if="imageSrc">
                    </v-col>
                </v-row>
                <v-switch label="Add to promo?"
                          v-model="promo"
                          color="indigo"
                >
                </v-switch>
                <v-spacer></v-spacer>
                <v-btn  :laoding = 'laoding'
                        :disabled='!valid  ||  !image || laoding'
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
                valid: false,
                image: null,
                imageSrc: ''
            }
        },
        computed:{
           laoding(){
              return  this.$store.getters.laoding
           }
        },
        methods: {
            createAd(){
                if(this.$refs.form.validate() && this.image){
                    const ad = {
                        title: this.title,
                        description: this.description,
                        promo: this.promo,
                        image: this.image
                    }

                    this.$store.dispatch('createAd', ad )
                    .then(() => {
                        this.$router.push('/list')
                    }).catch(() => {})

                }
            },
            triggerUpload(){
                this.$refs.fileInput.click()
            },
            onFileChange(event){
                const file = event.target.files[0];

                const reader = new FileReader()
                reader.onload = () =>{
                     this.imageSrc = reader.result
                }
                reader.readAsDataURL(file)
                this.image = file
            }
        }
    }
</script>

<style scoped>

</style>
