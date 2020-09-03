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
                            <h1 class="text--primary">Edit ad</h1>
                        </v-card-title>
                        <v-divider></v-divider>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-card-text>
                            <v-text-field
                                name="title"
                                label='Title'
                                type='text'
                                v-model='editedTitle'>
                            </v-text-field>
                            <v-text-field
                                name='description'
                                label='Description'
                                type='text'
                                multi-line
                                v-model='editedDescription'>
                            </v-text-field>
                        </v-card-text>
                        <v-divider></v-divider>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn @click="onCancel">Cancel</v-btn>
                            <v-btn class="success" @click="onSave">Save</v-btn>
                        </v-card-actions>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
        <template v-slot:activator="{ on, attrs }">
            <v-btn class="warning"
                   v-bind="attrs"
                   v-on="on"
            >Edit
            </v-btn>
        </template>
    </v-dialog>
</template>

<script>
    export default {
        props: ['ad'],
        name: "Modal",
        data() {
            return {
                modal: false,
                editedTitle: this.ad.title,
                editedDescription: this.ad.description
            }
        },
        methods: {
            onCancel() {
                this.modal = !this.modal;
                this.editedTitle = this.ad.title;
                this.editedDescription = this.ad.description
            },
            onSave() {
               if(this.editedTitle !== '' && this.editedDescription !== ''){

                   this.$store.dispatch('updateAd', {
                       title: this.editedTitle,
                       description: this.editedDescription,
                       id: this.ad.id
                   })

                   this.modal = false
               }
            }
        }
    }
</script>

<style scoped>

</style>
