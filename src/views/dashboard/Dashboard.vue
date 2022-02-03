<template>
<v-row>
    <v-col cols="12">
        <dashboard-slide></dashboard-slide>
    </v-col>
    <v-col cols="12" md="4">
        <dashboard-congratulation-john></dashboard-congratulation-john>
    </v-col>
    <v-col cols="12" md="4">
        <dashboard-redeeming></dashboard-redeeming>
    </v-col>
    <v-col cols="12" md="4">
        <dashboard-winprize></dashboard-winprize>
    </v-col>
    <!-- <v-col
      cols="12"
      md="8"
    >
      <dashboard-statistics-card></dashboard-statistics-card>
    </v-col> -->

    <v-col cols="12">
        <favorite-card></favorite-card>
    </v-col>
    <v-col cols="12">
        <special-card></special-card>
    </v-col>
    <v-col cols="12">
        <dashboard-parthner></dashboard-parthner>
    </v-col>
</v-row>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import {
    mdiPoll,
    mdiLabelVariantOutline,
    mdiCurrencyUsd,
    mdiHelpCircleOutline
} from '@mdi/js'
import StatisticsCardVertical from '@/components/statistics-card/StatisticsCardVertical.vue'
import FavoriteCard from '@/components/statistics-card/FavoriteCard'

// demos
import DashboardCongratulationJohn from '../../components/rebate-button/ButtonCashout.vue'
import DashboardStatisticsCard from './DashboardStatisticsCard.vue'
import DashboardCardTotalEarning from './DashboardCardTotalEarning.vue'
import DashboardCardDepositAndWithdraw from './DashboardCardDepositAndWithdraw.vue'
import DashboardCardSalesByCountries from './DashboardCardSalesByCountries.vue'
import DashboardDatatable from './DashboardDatatable.vue'
import DashboardSlide from '@/views/dashboard/DashboardSlide'
import DashboardRedeeming from '@/components/rebate-button/ButtonRedeeming.vue'
import DashboardWinprize from '@/components/rebate-button/ButtonWinprize.vue'
import DashboardParthner from '@/views/dashboard/DashboardParthner'
import SpecialCard from '@/components/statistics-card/SpecialCard.vue'


export default {
    components: {
        StatisticsCardVertical,
        DashboardCongratulationJohn,
        DashboardStatisticsCard,
        DashboardCardTotalEarning,
        DashboardCardDepositAndWithdraw,
        DashboardCardSalesByCountries,
        DashboardDatatable,
        DashboardSlide,
        DashboardRedeeming,
        DashboardWinprize,
        DashboardParthner,
        FavoriteCard,
        SpecialCard,
        SpecialCard,
        
    },
    setup() {
        const totalProfit = {
            statTitle: 'Total Profit',
            icon: mdiPoll,
            color: 'success',
            subtitle: 'Weekly Project',
            statistics: '$25.6k',
            change: '+42%',
        }

        const totalSales = {
            statTitle: 'Refunds',
            icon: mdiCurrencyUsd,
            color: 'secondary',
            subtitle: 'Past Month',
            statistics: '$78',
            change: '-15%',
        }

        // vertical card options
        const newProject = {
            statTitle: 'New Project',
            icon: mdiLabelVariantOutline,
            color: 'primary',
            subtitle: 'Yearly Project',
            statistics: '862',
            change: '-18%',
        }

        const salesQueries = {
            statTitle: 'Sales Quries',
            icon: mdiHelpCircleOutline,
            color: 'warning',
            subtitle: 'Last week',
            statistics: '15',
            change: '-18%',
        }

        return {
            totalProfit,
            totalSales,
            newProject,
            salesQueries,
        }
    },
}
</script>
