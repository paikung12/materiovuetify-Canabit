<template>
<v-row>
    <v-col cols="12" md="6">
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
            <template slot="progress">
                <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
            </template>

            <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

            <v-card-title>Cafe Badilico</v-card-title>

            <v-card-text>

                <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-container>
                <v-row justify="center">
                    <v-col cols="12">
                        <v-text-field label="Please enter the number of points" class="ml-5 mr-5 mt-3 " outlined></v-text-field>
                    </v-col>
                    <v-col cols="12" md="10">

                        <v-btn color="primary" class=" -mt-8 " block dark large>
                            add win prizes
                        </v-btn>

                    </v-col>
                </v-row>

            </v-container>

        </v-card>
    </v-col>
    <v-col cols="12" md="6">
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
            <template slot="progress">
                <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
            </template>

            <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

            <v-card-title>Cafe Badilico</v-card-title>

            <v-card-text>
                <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>
            <v-container>
                <v-row  justify="center">
                    <v-col cols="12">
                        <v-text-field label="Please enter the number of points" class="ml-5 mr-5 mt-3" outlined></v-text-field>
                    </v-col>
                    <v-col cols="12" md="10">
                        <v-btn color="primary" class="  -mt-8 " block dark large>
                            add win prizes
                        </v-btn>
                    </v-col>
                </v-row>

            </v-container>

        </v-card>
    </v-col>

</v-row>
</template>

<script>
import {
    mdiAccountOutline,
    mdiEmailOutline,
    mdiCellphone,
    mdiLockOutline
} from '@mdi/js'
export default {
    icons: {
        mdiAccountOutline
    },
}
</script>

<style>

</style>
