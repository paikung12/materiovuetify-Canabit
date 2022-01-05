<template>
<div class="auth-wrapper auth-v1">
    <div class="auth-inner">
        <v-card class="auth-card">
            <!-- logo -->
            <v-card-title class="d-flex align-center justify-center py-7">
                <router-link to="/" class="d-flex align-center">
                    <v-img :src="require('@/assets/images/logos/logo.svg')" max-height="30px" max-width="30px" alt="logo" contain class="me-3 "></v-img>

                    <h2 class="text-2xl font-weight-semibold">
                        CANABIT
                    </h2>
                </router-link>
            </v-card-title>

            <!-- title -->
            <v-card-text>
                <p class="text-2xl font-weight-semibold text--primary mb-2 text-center">
                    Adventure starts here 🚀
                </p>
                <p class="mb-2 text-center">
                    Make your app management easy and fun!
                </p>
            </v-card-text>

            <!-- login form -->
            <v-card-text>
                <v-form>
                    <!-- <v-text-field v-model="username" outlined label="Username" placeholder="JohnDoe" hide-details class="mb-3"></v-text-field>

                    <v-text-field v-model="email" outlined label="Email" placeholder="john@example.com" hide-details class="mb-3"></v-text-field>

                    <v-text-field v-model="password" outlined :type="isPasswordVisible ? 'text' : 'password'" label="Password" placeholder="············" :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline" hide-details @click:append="isPasswordVisible = !isPasswordVisible"></v-text-field> -->
                    <v-row>
                        <v-col cols="12" md="3">
                            <label for="firstnameHorizontalIcons">First Name</label>
                        </v-col>

                        <v-col cols="12" md="9">
                            <v-text-field id="firstnameHorizontalIcons" v-model="firstname" :prepend-inner-icon="icons.mdiAccountOutline" outlined dense placeholder="First Name" hide-details></v-text-field>
                        </v-col>

                        <v-col cols="12" md="3">
                            <label for="emailHorizontalIcons">Email</label>
                        </v-col>

                        <v-col cols="12" md="9">
                            <v-text-field id="emailHorizontalIcons" v-model="email" :prepend-inner-icon="icons.mdiEmailOutline" outlined dense placeholder="Email" hide-details></v-text-field>
                        </v-col>

                        <v-col cols="12" md="3">
                            <label for="mobileHorizontalIcons">Mobile</label>
                        </v-col>

                        <v-col cols="12" md="9">
                            <v-text-field id="mobileHorizontalIcons" v-model="mobile" type="number" outlined :prepend-inner-icon="icons.mdiCellphone" dense placeholder="Number" hide-details></v-text-field>
                        </v-col>

                        <v-col cols="12" md="3">
                            <label for="passwordHorizontalIcons">Password</label>
                        </v-col>

                        <v-col cols="12" md="9">
                            <v-text-field id="passwordHorizontalIcons" v-model="password" :prepend-inner-icon="icons.mdiLockOutline" type="password" outlined dense placeholder="Password" hide-details></v-text-field>
                        </v-col>             
                    </v-row>

                    <v-btn block color="primary" class="mt-6">
                        Sign Up
                    </v-btn>
                </v-form>
            </v-card-text>

            <!-- create new account  -->
            <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
                <span class="me-2">
                    Already have an account?
                </span>
                <router-link :to="{ name:'pages-login' }">
                    Sign in instead
                </router-link>
            </v-card-text>

            <!-- divider -->
            <v-card-text class="d-flex align-center mt-2">
                <v-divider></v-divider>
                <span class="mx-5">or</span>
                <v-divider></v-divider>
            </v-card-text>

            <!-- social link -->
            <v-card-actions class="d-flex justify-center">
                <v-btn v-for="link in socialLink" :key="link.icon" icon class="ms-1">
                    <v-icon :color="$vuetify.theme.dark ? link.colorInDark:link.color">
                        {{ link.icon }}
                    </v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>

    <!-- background triangle shape  -->
    <img class="auth-mask-bg" height="190" :src="require(`@/assets/images/misc/mask-${$vuetify.theme.dark ? 'dark':'light'}.png`)">

    <!-- tree -->
    <v-img class="auth-tree" width="247" height="185" src="@/assets/images/misc/tree.png"></v-img>

    <!-- tree  -->
    <v-img class="auth-tree-3" width="377" height="289" src="@/assets/images/misc/tree-3.png"></v-img>
</div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import {
    mdiFacebook,
    mdiTwitter,
    mdiGoogle,
    mdiEyeOutline,
    mdiEyeOffOutline,
    mdiAccountOutline,
    mdiEmailOutline,
    mdiCellphone,
    mdiLockOutline,
    mdiAlphaLCircleOutline,
} from '@mdi/js'
import {
    ref
} from '@vue/composition-api'

export default {
    setup() {
        const isPasswordVisible = ref(false)
        const username = ref('')
        const email = ref('')
        const password = ref('')
        const socialLink = [{
                icon: mdiFacebook,
                color: '#4267b2',
                colorInDark: '#4267b2',
            },
            {
                icon: mdiAlphaLCircleOutline,
                color: '#66CB9F',
                colorInDark: '#66CB9F',
            },
            {
                icon: mdiGoogle,
                color: '#db4437',
                colorInDark: '#db4437',
            },
        ]

        return {
            isPasswordVisible,
            username,
            email,
            password,
            socialLink,

            icons: {
                mdiEyeOutline,
                mdiEyeOffOutline,
                mdiAccountOutline,
                mdiEmailOutline,
                mdiCellphone,
                mdiLockOutline,
            },
        }
    },
}
</script>

<style lang="scss">
@import '~@/plugins/vuetify/default-preset/preset/pages/auth.scss';
</style>
