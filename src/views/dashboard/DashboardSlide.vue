<template>
    <v-carousel cycle height="300" hide-delimiter-background show-arrows-on-hover class="">
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet :color="colors[i]" height="100%">
                <v-row class="fill-height" align="center" justify="center">
                    <div class="text-h2">
                        {{ slide }} Slide
                    </div>
                </v-row>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import {
    mdiAccountOutline,
    mdiCurrencyUsd,
    mdiTrendingUp,
    mdiDotsVertical,
    mdiLabelOutline
} from '@mdi/js'

export default {
    setup() {
        const statisticsData = [{
                title: 'Sales',
                total: '245k',
            },
            {
                title: 'Customers',
                total: '12.5k',
            },
            {
                title: 'Product',
                total: '1.54k',
            },
            {
                title: 'Revenue',
                total: '$88k',
            },
        ]

        const resolveStatisticsIconVariation = data => {
            if (data === 'Sales') return {
                icon: mdiTrendingUp,
                color: 'primary'
            }
            if (data === 'Customers') return {
                icon: mdiAccountOutline,
                color: 'success'
            }
            if (data === 'Product') return {
                icon: mdiLabelOutline,
                color: 'warning'
            }
            if (data === 'Revenue') return {
                icon: mdiCurrencyUsd,
                color: 'info'
            }

            return {
                icon: mdiAccountOutline,
                color: 'success'
            }
        }

        return {
            statisticsData,
            resolveStatisticsIconVariation,

            // icons
            icons: {
                mdiDotsVertical,
                mdiTrendingUp,
                mdiAccountOutline,
                mdiLabelOutline,
                mdiCurrencyUsd,
            },
            colors: [
                'primary',
                'success',
                'error',
                'warning',
                'info',
            ],
            slides: [
                'First',
                'Second',
                'Third',
                'Fourth',
                'Fifth',
            ],
        }
    },
}
</script>
