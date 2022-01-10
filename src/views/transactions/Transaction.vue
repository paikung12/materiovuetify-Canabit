<template>
<v-row>
    <v-col cols="12">
        <TransactionLoyalty></TransactionLoyalty>
    </v-col>
    <v-col cols="12" md="4">
       <ButtonCashout></ButtonCashout>
    </v-col>
    <v-col cols="12" md="4">
        <ButtonRedeeming></ButtonRedeeming>
    </v-col>
    <v-col cols="12" md="4">
        <ButtonWinprize></ButtonWinprize>
    </v-col>
    <v-col cols="12">
        <TransactionHistory></TransactionHistory>
    </v-col>
</v-row>
</template>

<script>
import TransactionLoyalty from '@/views/transactions/TransactionLoyalty'
import ButtonCashout from '@/components/rebate-button/ButtonCashout'
import ButtonRedeeming from '@/components/rebate-button/ButtonRedeeming'
import ButtonWinprize from '@/components/rebate-button/ButtonWinprize'
import TransactionHistory from '@/views/transactions/ TransactionHistory.vue'
export default {
    components: {
        TransactionLoyalty,
        ButtonCashout,
        ButtonRedeeming,
        ButtonWinprize,
        TransactionHistory,
    },
    setup() {

    },
}
</script>
