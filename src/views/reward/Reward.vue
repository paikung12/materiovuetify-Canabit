<template>
<div>
    <div class="min-h-screen bg-purple-400 flex justify-center items-center">
        <div class="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block">
        </div>
        <div class="absolute w-48 h-48 rounded-xl bg-purple-300 -bottom-6 -right-10 transform rotate-12 hidden md:block">
        </div>
        <div class="max-w-6xl mx-auto md:px-6 px-4">
            <div class="md:py-20 py-12">
                <div class="md:pb-20 pb-12 max-w-3xl mx-auto text-center ">
                    <h2 class="md:text-6xl text-4xl text-white dark:text-white font-bold mb-4">Build and style every Reward Voting</h2>
                    <p class="text-xl text-white dark:text-gray-400">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
                </div>
                <div class="text-center mb-10">
                    <span class="inline-block w-1 h-1 rounded-full bg-white ml-1"></span>
                    <span class="inline-block w-3 h-1 rounded-full bg-white ml-1"></span>
                    <span class="inline-block w-40 h-1 rounded-full bg-white ml-1"></span>
                    <span class="inline-block w-3 h-1 rounded-full bg-white ml-1"></span>
                    <span class="inline-block w-1 h-1 rounded-full bg-white ml-1"></span>
                </div>
            </div>
            <Countdown></Countdown>
            <div class="mt-5">
              <CardReward></CardReward>
            </div>
        </div>
        <div class="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
        <div class="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block">
        </div>
    </div>
</div>
</template>

<script>
import  CardReward from '@/views/reward/CardReward'
import Countdown from '@/views/reward/Countdown'
export default {
    components: {
        Countdown,
        CardReward
    },
}
</script>

<style>

</style>
