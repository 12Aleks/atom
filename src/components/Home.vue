<template>
    <div v-if="!loading">
        <v-container fluid class="grey lighten-5 pt-0">
            <v-row>
                <v-col cols="12 pr-0 pl-0 pt-0">
                    <v-carousel
                            cycle
                            hide-delimiter-background
                            show-arrows-on-hover
                    >
                        <v-carousel-item
                                v-for="(ad, i) in promoAds"
                                :key="i"
                                :src="ad.src"
                                reverse-transition="fade-transition"
                                transition="fade-transition"
                        >
                            <div class="car-link">
                                <v-btn color='error'
                                       :to="'/ad/' + ad.id"
                                >{{ad.title}}
                                </v-btn>
                            </div>
                        </v-carousel-item>
                    </v-carousel>
                </v-col>
            </v-row>
        </v-container>
        <v-container>
            <v-row>
                <v-col cols="12"
                       sm="6"
                       md="4"
                       xl="4"
                       v-for="(ad, i) in ads"
                       :key="i"
                >
                    <v-card
                            class="mx-auto"
                            max-width="344"
                            outlined
                    >
                        <v-img
                                class="white--text align-end"
                                height="200px"
                                :src="ad.src"
                        >
                            <v-card-title>{{ad.title}}</v-card-title>
                        </v-img>
                        <v-card-text class="text--primary">
                            <div>{{ad.description}}</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                    :to="/ad/ + ad.id">
                                Open
                            </v-btn>

                            <v-btn
                                    color="indigo"
                                    dark
                            >
                                Buy
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
    <div v-else>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-progress-circular
                            :size="70"
                            :width="7"
                            color="purple"
                            indeterminate
                            class="d-block mx-auto pt-5"
                    ></v-progress-circular>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {}
        },
        computed: {
            loading() {
                return this.$store.getters.loading
            },
            promoAds() {
                return this.$store.getters.promoAds
            },
            ads() {
                return this.$store.getters.ads
            }
        }
    }
</script>

<style scoped lang="stylus">
    .car-link
        position absolute
        background rgba(0, 0, 0, .5)
        bottom 50px
        left 50%
        transform translate(-50%, 0)
        padding 5px 15px
        border-top-left-radius 5px
        border-top-right-radius 5px
</style>
