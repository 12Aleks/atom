<template>
    <v-container fluid class="fill-height grey lighten-5">
        <v-row>
            <v-col cols="12">
                <v-card max-width="1000px" class="mx-auto d-block">
                    <v-img
                    src="https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
                    height="300px"
                    ></v-img>
                    <v-card-text>
                        <h1 class="text--primary">Lorem</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, maxime!</p>
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
        name: "Ad"
    }
</script>

<style scoped>

</style>
