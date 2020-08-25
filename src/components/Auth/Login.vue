<template>
    <v-container
            class="fill-height grey lighten-5"
            fluid
    >
        <v-row
                align="center"
                justify="center"
        >
            <v-col
                    cols="12"
                    sm="8"
                    md="4"
            >
                <v-card class="elevation-12">
                    <v-toolbar
                            color="indigo"
                            dark
                            flat
                    >
                        <v-toolbar-title>Login form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form
                                ref="form"
                                v-model="valid"
                                validation>
                            <v-text-field
                                    label="E-mail"
                                    name="email"
                                    prepend-icon="mdi-account"
                                    type="email"
                                    v-model="email"
                                    :rules="emailRules"
                            ></v-text-field>

                            <v-text-field
                                    id="password"
                                    label="Password"
                                    name="password"
                                    prepend-icon="mdi-lock"
                                    type="password"
                                    v-model="password"
                                    :rules="passwordRules"
                                    :counter="6"
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn  @click="onSubmit"
                                :loading="loading"
                               :disabled="!valid || loading"
                                color="indigo"
                                dark
                        >Login
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                email: '',
                password: '',
                valid: false,
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => (v && v.length >= 6) || 'Password must be equal or more than 6 characters',
                ]
            }
        },
        computed:{
          loading(){
              return this.$store.getters.loading;
          }
        },
        methods: {
            onSubmit() {
              if(this.$refs.form.validate()){
                  const user = {
                      email: this.email,
                      password: this.password
                  };
                  setTimeout(()=>{
                      this.email = '';
                      this.password = '';
                    //   this.$refs.form.reset()
                  }, 3000);
                  this.$store.dispatch('loginUser', user)
                      .then(() => this.$router.push('/'))
                      .catch(() =>{})
              }
            }
        },
        created() {
            if(this.$route.query['loginError']){
                this.$store.dispatch('setError', 'Please log in to access this page!')
            }
        }

    }
</script>

<style scoped lang="stylus">
    .theme--dark.v-btn.v-btn--disabled:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
        background-color: #5064fc78 !important;
    }
</style>
