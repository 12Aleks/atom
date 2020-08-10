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
                            v-model="text"
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
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "NewAd",
        data(){
            return{
                text: '',
                description: ''
            }
        }
    }
</script>

<style scoped>

</style>
