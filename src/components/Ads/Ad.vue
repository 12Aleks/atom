<template>
    <v-container fluid class="fill-height grey lighten-5">
        <v-row>
            <v-col cols="12">
                <v-card max-width="1000px" class="mx-auto d-block" v-if="!loading">
                    <v-img
                    :src="ad.imageSrc"
                    height="300px"
                    ></v-img>
                    <v-card-text>
                        <h1 class="text--primary">{{ad.title}}</h1>
                        <p>{{ad.description}}</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <modal :ad="ad" v-if="isOwner"></modal>
                        <app-buy-modal :ad="ad"></app-buy-modal>
                    </v-card-actions>
                </v-card>
                <div v-else class="text-xs-center">
                    <v-progress-circular
                            :size="70"
                            :width="7"
                            color="purple"
                            indeterminate
                            class="d-block mx-auto pt-5"
                    ></v-progress-circular>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import * as fb from 'firebase'
    import modal from './Modal'

    export default {
        name: "Ad",
        props: ['id'],
        components: {
           modal
        },
        computed:{
            ad(){
                const id = this.id;
                return this.$store.getters.adById(id)
            },
            loading(){
               return this.$store.getters.loading
            },
            isOwner(){
                return this.ad.ownerId === fb.auth().currentUser.uid
            }
        }
    }
</script>

<style scoped>

</style>
