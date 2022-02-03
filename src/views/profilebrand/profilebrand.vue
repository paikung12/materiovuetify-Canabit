<template>
  <v-row>
    <v-col
      cols="12"
      md="4"
    >
    <cardbrandcondition></cardbrandcondition>
    </v-col>
    <v-col
      cols="12"
      md="8"
    >
    <cardcondition></cardcondition>
    </v-col>
     <v-col
      cols="12"
      md="4"
      >
      <cardhead></cardhead>
    </v-col>
      <v-col
        md="6"
        lg="8"
        cols="12"
        class="-mt-3"
      >
      <cardreceive></cardreceive>
    </v-col>
     <v-col
      cols="12"
      >
      <cradsale></cradsale>
    </v-col>
  </v-row>
</template>

<script>
import cradsale from '@/views/profilebrand/cradsale'
import cardreceive from '@/views/profilebrand/cardreceive'
import cardhead from '@/views/profilebrand/cardhead'
import cardbrandcondition from '@/views/profilebrand/cardbrandcondition'
import cardcondition from '@/views/profilebrand/cardcondition'
export default {
   components:{
     cardbrandcondition,
     cardcondition,
     cardhead,
     cardreceive,
     cradsale,
   },
}
</script>

<style>

</style>