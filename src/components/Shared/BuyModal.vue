<template>
    <v-dialog
            width="400px"
            v-model="modal"
    >
        <v-card>
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <v-card-title>
                            <h2 class="text--primary">Do you want to buy it?</h2>
                        </v-card-title>
                        <v-divider></v-divider>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-card-text>
                            <v-text-field
                                    name="name"
                                    label='Your name'
                                    type='text'
                                    v-model='name'>
                            </v-text-field>
                            <v-text-field
                                    name='phone'
                                    label='Your phone'
                                    type='text'
                                    v-model='phone'>
                            </v-text-field>
                        </v-card-text>
                        <v-divider></v-divider>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn @click="onCancel"
                                    :disabled="localLoading"
                            >Close</v-btn>
                            <v-btn class="success"
                                   @click="onSave"
                                   :disabled="localLoading"
                                   :loading="localLoading">Buy it!</v-btn>
                        </v-card-actions>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
        <template v-slot:activator="{ on, attrs }">
            <v-btn class="indigo"
                   dark
                   v-bind="attrs"
                   v-on="on"
            >Buy
            </v-btn>
        </template>
    </v-dialog>
</template>

<script>
    export default {
        props: ['ad'],
        name: "BuyModal",
        data() {
            return {
                modal: false,
                name: '',
                phone : '',
                localLoading : false
            }
        },
        methods: {
            onCancel() {
                this.modal = !this.modal;
                this.name = '';
                this.phone = ''
            },
            onSave() {
                if(this.name !== '' && this.phone !== ''){
                    this.localLoading = true;
                    this.$store.dispatch('createOrders', {
                        phone: this.phone,
                        name: this.name,
                        adId: this.ad.id,
                        ownerId: this.ad.ownerId
                    })
                        .finally(() => {
                            this.name = '',
                            this.phone = '',
                            this.localLoading = false,
                            this.modal = false
                        })
                    this.modal = false
                }
            }
        }
    }
</script>
