<template>
<div>
    <h2 class="text-center">Finance Partner</h2>
    <v-item-group>
        <v-container>
            <v-row>
                <v-col v-for="n in 8" :key="n" cols="12" sm="2">
                    <v-item v-slot="{ }">
                        <v-hover v-slot="{ hover }">
                            <v-card class="mx-auto mt-10" max-width="400" max-height="400">
                                <v-img :aspect-ratio="18/9" src="https://cdn.vuetifyjs.com/images/cards/kitchen.png">
                                    <v-expand-transition>
                                        <div v-if="hover" class="d-flex   primary v-card--reveal  text-h6  text-center white--text" style="height:100%;">
                                            <v-card-text class="my-4 text-center text-h6">
                                                Hover over me!
                                            </v-card-text>
                                        </div>
                                    </v-expand-transition>
                                </v-img>
                                <v-card-text class="pt-6" style="position: relative;">
                                    <v-btn absolute color="primary" class="white--text" fab small right top>
                                        <v-icon dark>
                                            {{ icons.mdiArrowRight }}
                                        </v-icon>
                                    </v-btn>
                                    <div class="font-weight-light grey--text text-h6 mb-2 text-center">
                                        Forex
                                    </div>
                                </v-card-text>
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
