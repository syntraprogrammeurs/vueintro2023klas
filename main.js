const app = Vue.createApp({
    data(){
        return{
            winkelwagen:0,
            geselecteerdProduct:0,//standaard blue
            product: 'Gsm oplader',
            merk:'Ailkin',
            prijs: 15.99,
            beschrijving: 'Een efficiënte en duurzame oplader voor je GSM',
            image: './assets/images/chargerblue.png',
            opVoorraad:false,
            /*aantalInVoorraad:0,*/
            url:'https://www.amazon.com/Charger-Adapter-Ailkin-Replacement-Samsung/dp/B076JBS6KB?th=1',
            productDetails:[
                "universeel",
                "smartphone",
                "2 aansluitingen",
                "inclusief kabel"
            ],
            soorten:[
                {soortId:0,kleur:"blue",image:'./assets/images/chargerblue.png',aantal:20},
                {soortId:1,kleur:"pink",image:'./assets/images/chargerpink.png', aantal:0},
            ]
        }
    },
    methods:{
        toevoegenAanWinkelwagen(){
            if(this.soorten[this.geselecteerdProduct].aantal >0){
                this.winkelwagen+=1;
                this.soorten[this.geselecteerdProduct].aantal -=1
            }

        },
       in m
    },
    computed:{
        beschrijvingMerk(){
            return this.beschrijving + ' - ' + this.merk
        },
        imagePrint(){
            return this.soorten[this.geselecteerdProduct].image
        },
        aantalInVoorraad(){
            return this.soorten[this.geselecteerdProduct].aantal
        }
    }
})
const mountedApp = app.mount('#app');