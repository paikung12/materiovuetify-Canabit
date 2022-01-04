<template>
<v-card class="mx-auto" elevation="8" max-width="2000">
    <v-card-title class="text-center justify-center py-6">
        You Favorite 🥰
    </v-card-title>
    <p class="text-center justify-center">Redeem your point to Fiat Currency.</p>
    <v-slide-group v-model="model" class="pa-4 py-20 mt-2" active-class="success" show-arrows>
        <v-slide-item v-for="n in 15" :key="n" v-slot="{  }">
            <v-hover v-slot="{ hover }">
                <v-card class="mx-auto mt-3 ml-3" max-width="800" max-height="400">
                    <v-img :aspect-ratio="18/9" src="https://cdn.vuetifyjs.com/images/cards/kitchen.png">
                        <v-expand-transition>
                            <div v-if="hover" class="d-flex   primary  text-h6   v-card--reveal text-center white--text" style="height:100%;">
                                <v-card-text class="my-4 text-center text-h7">
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
                            E-commerce
                        </div>
                    </v-card-text>
                </v-card>
            </v-hover>
        </v-slide-item>
    </v-slide-group>
</v-card>
</template>
<script>
import {
    mdiMinus,
    mdiArrowRight
} from '@mdi/js'
export default {
    components: {
        
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

