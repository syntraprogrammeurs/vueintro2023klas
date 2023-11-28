const app = Vue.createApp({
    data(){
        return{
            winkelwagen:[],
            gold:false
        }
    },
    methods:{
        updateWinkelwagen(id){
            this.winkelwagen.push(id)
        }
    }
})