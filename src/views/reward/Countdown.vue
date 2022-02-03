<template>
<div>
    <div class="text-yellow-100 -mt-5">
        <div class="text-6xl text-center flex w-full items-center justify-center">
            <div class="text-2xl mr-1 font-extralight"></div>
            <div class="w-24 mx-1 p-2 bg-white text-purple-500 rounded-lg">
                <div class="font-mono leading-none" x-text="days">00</div>
                <div class="font-mono uppercase text-sm leading-none">Days</div>
            </div>
            <div class="text-5xl mx-1 font-extralight">:</div>
            <div class="w-24 mx-1 p-2 bg-white text-purple-500 rounded-lg">
                <div class="font-mono leading-none" x-text="hours">00</div>
                <div class="font-mono uppercase text-sm leading-none">Hours</div>
            </div>
            <div class="text-5xl mx-1 font-extralight">:</div>
            <div class="w-24 mx-1 p-2 bg-white text-purple-500 rounded-lg">
                <div class="font-mono leading-none" x-text="minutes">00</div>
                <div class="font-mono uppercase text-sm leading-none">Minutes</div>
            </div>
            <div class="text-5xl mx-1 font-extralight">:</div>
            <div class="w-24 mx-1 p-2 bg-white text-purple-500 rounded-lg">
                <div class="font-mono leading-none" x-text="seconds">00</div>
                <div class="font-mono uppercase text-sm leading-none">Seconds</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {}
    },

}
</script>
<style>

</style>

