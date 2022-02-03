<template>
<v-card>
    <v-card-title class="align-start">
        <span>When will I receive my refund?</span>

        <v-spacer></v-spacer>

    </v-card-title>
    <v-timeline>
        <v-timeline-item>timeline item</v-timeline-item>
        <v-timeline-item class="text-right">
            timeline item
        </v-timeline-item>
        <v-timeline-item>timeline item</v-timeline-item>
    </v-timeline>
    <v-card-text>
        <div class="d-flex align-center mt-4">
            <h3 class="text-2xl font-weight-semibold me-4">
                45%
            </h3>
            <span>Your sales perfomance in 45% 🤩 better compare to last month</span>
        </div>
    </v-card-text>
</v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
// eslint-disable-next-line object-curly-newline
import {
    mdiDotsVertical,
    mdiTrendingUp,
    mdiCurrencyUsd
} from '@mdi/js'

export default {
    components: {
        VueApexCharts,
    },
    setup() {

        return {
            chartOptions,
            chartData,

            icons: {
                mdiDotsVertical,
                mdiTrendingUp,
                mdiCurrencyUsd,
            },
        }
    },
}
</script>
