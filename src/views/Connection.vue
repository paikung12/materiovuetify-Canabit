<template>
<div id="misc" class="bg-white">
    <div class="page-title text-center px-5">
        <h2 class="text-2xl font-weight-semibold text--primary d-flex align-center justify-center">
            <span class="me-2">Loading too long, to go to the store.</span>
        </h2>
        <p class="text-sm">
            we couldn't find the page you are looking for
        </p>

        <div class="misc-character d-flex justify-center">
            
            <v-img max-width="700" src="@/assets/images/3d-characters/Group1000001951.png"></v-img>
        </div>
        
    </div>
</div>
</template>

<script>
import {
    mdiAlert
} from '@mdi/js'

export default {
    setup() {
        return {
            icons: {
                mdiAlert,
            },
        }
    },
}
</script>

<style lang="scss">
@import '~@/plugins/vuetify/default-preset/preset/misc.scss';
</style>
