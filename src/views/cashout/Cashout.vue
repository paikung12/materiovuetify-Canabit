<template>
<v-row>
     <v-col cols="12">
        <CashoutFrom></CashoutFrom>
    </v-col>
     <v-col cols="12">
        <CashoutHistory></CashoutHistory>
    </v-col>
</v-row>
</template>

<script>

import CashoutFrom from '@/views/cashout/CashoutFrom'
import CashoutHistory from '@/views/cashout/CashoutHistory'
export default {
    components: {
        CashoutHistory,
        CashoutFrom,
    },

}
</script>

<style>

</style>
