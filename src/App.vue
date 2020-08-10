<template>
    <v-app id="inspire">
        <v-navigation-drawer
                v-model="drawer"
                temporary
                app
        >
            <v-list>
                <v-list-item
                        link
                        v-for="link in links"
                        :key="link.title"
                        :to="link.url"
                >
                    <v-list-item-icon>
                        <v-icon>{{link.icon}}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{link.title}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-card flat
                tile>
            <v-toolbar
                    color="indigo"
                    dark
                    draft
                    dense>
                <v-app-bar-nav-icon
                        class="hidden-md-and-up"
                        @click="drawer = !drawer">
                </v-app-bar-nav-icon>

                <v-toolbar-title>
                    <router-link to="/" class="text-decoration-none white--text">
                    ATOM
                    <v-icon right>mdi-atom</v-icon>
                    </router-link>
                </v-toolbar-title>

                <v-spacer></v-spacer>

                <v-toolbar-items class="hidden-sm-and-down">
                    <v-btn v-for="link in links"
                           :key="link.title"
                           :to="link.url"
                           text>
                        <v-icon left color="yellow darken-1">{{link.icon}}</v-icon>
                        {{link.title}}
                    </v-btn>
                </v-toolbar-items>
            </v-toolbar>
        </v-card>

        <v-main class="grey lighten-5">
            <router-view></router-view>
        </v-main>
        <v-footer
                color="indigo">
            <v-col
                    cols="12"
                    class="white--text text-center">
                {{ new Date().getFullYear() }} — <strong>Atom</strong>
            </v-col>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        name: 'App',
        props: {
            source: String,
        },
        data: () => ({
            drawer: false,
            links: [
                {
                    title: 'Login',
                    icon: 'mdi-lock',
                    url: '/login'
                },
                {
                    title: 'Registration',
                    icon: 'mdi-face',
                    url: '/registration'
                },
                {
                    title: 'Orders',
                    icon: 'mdi-bookmark',
                    url: '/orders'
                },
                {
                    title: 'New ad',
                    icon: 'mdi-book-plus',
                    url: '/newAd'
                },
                {
                    title: 'My ads',
                    icon: 'mdi-playlist-edit',
                    url: '/list'
                }
            ]
        })
    };
</script>
