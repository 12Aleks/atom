<template>
    <v-container fluid class="fill-height grey lighten-5">
        <v-row>
            <v-col cols="12">
                <v-card max-width="1000px" class="mx-auto d-block">
                    <v-img
                    :src="ad.src"
                    height="300px"
                    ></v-img>
                    <v-card-text>
                        <h1 class="text--primary">{{ad.title}}</h1>
                        <p>{{ad.description}}</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="warning">Edit</v-btn>
                        <v-btn class="success">Buy</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Ad",
        props: ['id'],
        computed:{
            ad(){
                const id = this.id;
                return this.$store.getters.adById(id)
            }
        }
    }
</script>

<style scoped>

</style>
