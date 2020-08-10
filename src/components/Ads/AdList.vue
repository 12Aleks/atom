<template>
    <v-container fluid class="fill-height grey lighten-5">
        <v-row>
            <v-col cols="12" offset-sm="3" sm="6" offset-md="3" md="6" offset-lg="3" lg="6">
                <h1 class="text--secondary mb-3">My ads</h1>

                <v-card class="elevation-10 mb-5"
                        v-for="ad in ads"
                        :key="ad.id"
                >
                    <v-container>
                        <v-row justify="space-between">
                            <v-col cols="4">
                                <v-img :src="ad.src" height="175px">
                                </v-img>
                            </v-col>
                            <v-row cols="8" class="flex-column ma-0 fill-height"
                                   justify="center">
                                <v-col>
                                    <v-card-text>
                                    <h2 class="text--primary">{{ad.title}}</h2>
                                    <p>{{ad.description}}</p>
                                    </v-card-text>
                                </v-col>
                                <v-col class="pb-0">
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn class="indigo"
                                               dark
                                               :to="'/ad/' + ad.id">Open</v-btn>
                                    </v-card-actions>
                                </v-col>
                            </v-row>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "AdList",
        data() {
            return {
                ads: [
                    {
                        title: 'First ad',
                        description: 'description',
                        promo: false,
                        id: '123',
                        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
                    },
                    {
                        title: 'Second ad',
                        description: 'description',
                        promo: true,
                        id: '1234',
                        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
