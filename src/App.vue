<template>
  <div id="app">
    <F_Calender
            theme="#DCF6FF"
            defaultColor="#24FFD4"
            :defaultOpt="arr"
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
            for(let i=0;i<16;i++) {
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
