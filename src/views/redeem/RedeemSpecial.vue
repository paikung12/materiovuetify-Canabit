<template>
<div>
    <v-row>
        <v-col lg="4" sm="6" cols="12" class="align-self-start">
            <div class="space-y-16 mt-1">
                <div class="md:max-w-xl w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-lg transition-transform transform hover:scale-110 ">
                    <img class="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/kGkSg1v.png">
                    <div class="w-full px-8 absolute top-8">
                        <div class="">
                            <div class="flex justify-between">
                                <p class="font-light">
                                    Name
                                </p>
                                <p class="font-medium tracking-widest">
                                    Karthik P
                                </p>
                            </div>

                        </div>
                        <div class="pt-1 flex justify-between">

                            <p class="font-light">
                                Point Number
                            </p>
                            <p class="font-medium tracking-more-wider text-xl">
                                12,345,789 point
                            </p>
                        </div>

                        <div class="flex justify-between mt-3">
                            <div class="">
                                <p class="font-light text-xs">
                                    Tier

                                    <p class="font-medium tracking-wider text-sm">
                                        Glod
                                    </p>
                            </div>
                            <div class="">
                                <p class="font-light text-xs text-xs">
                                    Expiry

                                    <p class="font-medium tracking-wider text-sm">
                                        03/25
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </v-col>
        <!-- Lifetime Membership -->
        <v-col md="6" lg="8" cols="12">         
            <div class="max-w-4xl px-13  my-1 py-3 bg-white rounded-xl shadow-md">
                <div class="flex justify-between items-center">
                    <span class="font-light text-gray-600">mar 10, 2019</span>
                    <a class="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500" href="#"></a>
                </div>
                <div class="mt-2">
                    <a class="text-2xl text-gray-700 font-bold hover:text-gray-600" href="#">Accessibility tools for designers and developers</a>
                    <p class="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                </div>
                <div class="flex justify-between items-center mt-4">
                    <a class="text-blue-600 hover:underline" href="#">Read more</a>
                    <div>
                        <a class="flex items-center" href="#">
                            <img class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80" alt="avatar">
                            <h1 class="text-gray-700 font-bold">Khatab wedaa</h1>
                        </a>
                    </div>
                </div>
            </div>
        </v-col>
        <RedeemList></RedeemList>
    </v-row>
</div>
</template>

<script>
import {
    ref
} from '@vue/composition-api'
import {
    mdiChevronUp,
    mdiChevronDown,
    mdiCartPlus,
    mdiShareVariantOutline,
    mdiLockOpenOutline,
    mdiStarOutline,
    mdiAccountOutline,
    mdiTrendingUp,
    mdiHelpCircleOutline,
} from '@mdi/js'

import RedeemList from '@/views/redeem/RedeemList'

export default {
    components:{
        RedeemList
    },
    setup() {
        const isCardDetailsVisible = false
        const rating = ref(5)
        return {
            isCardDetailsVisible,
            rating,
            solidCardData,
            // icons
            icons: {
                mdiChevronUp,
                mdiChevronDown,
                mdiCartPlus,
                mdiShareVariantOutline,
                mdiLockOpenOutline,
                mdiStarOutline,
                mdiAccountOutline,
                mdiTrendingUp,
                mdiHelpCircleOutline,
            },
        }
    },
}
</script>

<style>

</style>
