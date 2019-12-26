<template>
  <div id="app">
    <F_Calender
            theme="#DCF6FF"
            startTime="2019-11-28"
            endTime="2020-02-05"
            @formerly="formerly"
            @future="future"
            @receiveDate="receiveDate"></F_Calender>
  </div>
</template>

<script>
export default {
  name: 'app',
    data() {
      return {
          arr:[],
      }
    },
    components: {
    },
    mounted() {
        this.randomNumber();
    },
    methods: {
        randomNumber(){
            let arr = [];
            let num = Math.round(Math.random()*30);
            for(let i=0;i<num;i++) {
                arr.push(Math.round(Math.random()*30))
            }
            arr = Array.from(new Set(arr));
            this.arr = arr;
        },
        formerly(val) {
            this.randomNumber();
        },
        future(val) {
            this.randomNumber();
        },
        receiveDate(val) {

        }
    },
}
</script>

<style>

</style>
