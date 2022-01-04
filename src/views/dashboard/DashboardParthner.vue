<template>
<v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
        <h1 class="font-weight-bold text-h4 basil--text">
            Canabit Partner
        </h1>
    </v-card-title>

    <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
        <v-tab v-for="item in items" :key="item">
            {{ item }}
        </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item">
            <v-card color="basil" flat>
                <v-card-text>{{ text }}</v-card-text>
            </v-card>
        </v-tab-item>
    </v-tabs-items>
</v-card>
</template>

<script>
export default {
    data() {
        return {
            tab: null,
            items: [
                'Popular', 'Electronics', 'Beauty', 'Travel','Fashion', 'Delivery', 'Foods', 'Sport',
            ],
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        }
    },
}
</script>
<style>
/* Helper classes */
.basil {
  background-color: #fff !important;
}
.basil--text {
  color: #854EF7 !important;
}
</style>
