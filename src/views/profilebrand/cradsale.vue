<template>
<div>
    <v-item-group>
        <v-container>
            <v-row>
                <v-col v-for="n in 20" :key="n" sm="2">
                    <v-item v-slot="{ }">
                        <v-hover v-slot="{ hover }">
                            <v-card class="mx-auto " max-width="450" max-height="400">
                                <v-img :aspect-ratio="18/9" src="https://cdn.vuetifyjs.com/images/cards/kitchen.png">
                                    <v-expand-transition>
                                        <div v-if="hover" class="d-flex   bg-green-400  text-h6   v-card--reveal text-center white--text" style="height:100%;">
                                            <v-card-text class="my-4 text-center text-h6">
                                                Hover over me!
                                            </v-card-text>
                                        </div>
                                    </v-expand-transition>
                                </v-img>
                                <v-card-text class="pt-6" style="position: relative;">
                                    <div class="font-weight-light grey--text text-h6 mb-2 text-start">
                                        E-commerce
                                    </div>
                                    <div class="font-weight-light text-green-400  text-lg mb-2">
                                        200 point
                                    </div>
                                </v-card-text>
                                <v-card-actions class="-mt-5">
                                    <v-list-item class="grow">
                                        <div class="font-weight-light -ml-3 ">
                                        shopee
                                    </div>
                                        <v-row align="center" justify="end">
                                            <button class="py-1 px-2 text-white rounded-lg bg-green-400 shadow-lg block md:inline-block">Redeem</button>
                                        </v-row>
                                    </v-list-item>
                                </v-card-actions>
                            </v-card>
                        </v-hover>
                    </v-item>
                </v-col>
            </v-row>
        </v-container>
    </v-item-group>
</div>
</template>

<script>
import {
    mdiMinus,
    mdiArrowRight
} from '@mdi/js'
import Card from '../cards/Card.vue'
export default {
    components: {
        Card
    },
    setup() {
        return {
            icons: {
                mdiArrowRight,
                mdiMinus,
            },
        }
    },
}
</script>

<style>
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    position: absolute;
    width: 100%;
}
</style>
