app.component('product-weergave',{
    props:{ //attributes of properties (=props)
       gold:{
           type:Boolean,
           required:true
       }
    },
   //hier gaan we de template maken.
    template: `
     <div class="card" style="width: 18rem;">
        <div class="card-header">
            <h5 class="card-title text-center text-success">{{product}}</h5>

        </div>
        <img :src="imagePrint" class="card-img-top" :alt="product">
        <div class="d-flex justify-content-center">
            <div :style="{background:soort.kleur}" class="kleurvak border border-3 border-white rounded-circle p-3 m-1" @mouseover="updateAfbeeldingVoorraad(soort.soortId)" v-for="(soort,index) in soorten" :key="soort.soortId"></div>
        </div>
        <div class="card-body">
            <p class="card-text">{{beschrijvingMerk}}</p>
            <ul>
                <li v-for="productDetail in productDetails">{{productDetail}}</li>
            </ul>
            <div class="d-flex justify-content-between">

                <button :disabled="aantalInVoorraad <=0" @click="toevoegenAanWinkelwagen" class="btn btn-success align-self-center"><i class="bi bi-basket3-fill"></i></button>
<!--                <a @click="opVoorraad ? toevoegenAanWinkelwagen : null" -->
<!--                   class="{'disabled':!opVoorraad, 'btn btn-success align-self-center'}">-->
<!--                    <i class="bi bi-basket3-fill"></i></a>-->
                <a :href="url" class="btn btn-warning align-self-center text-white"><i class="bi bi-eye-fill"></i></a>
                <h5 class="text-success display-4">€ {{prijs}}</h5>
            </div>
        </div>
        <div class="card-footer text-body-secondary">
            <div class="d-flex justify-content-around align-items-center">
                <p class="display-6">Voorraad?</p>
                <p v-if="aantalInVoorraad > 0"><i class="bi bi-check-circle-fill text-success display-1"></i></p>
                <p v-else><i class="bi bi-x-circle-fill text-danger display-1"></i></p>
            </div>
            <div>
                <p class="text-warning text-center">{{verzendkosten}}</p>
            </div>
            <div class="text-center">
                <p class="text-success" v-if="aantalInVoorraad > 9">{{aantalInVoorraad}}</p>
                <p class="text-warning" v-else-if="aantalInVoorraad > 0 && aantalInVoorraad <=9">Laatste stuks</p>
                <p class="text-danger" v-else>Geen voorraad</p>
            </div>
        </div>
    </div>
    `,
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
            this.$emit('toevoegen-winkelwagen',this.soorten[this.geselecteerdProduct].soortId);
            this.soorten[this.geselecteerdProduct].aantal--;
        },
        updateAfbeeldingVoorraad(soortId){
            this.geselecteerdProduct = soortId;
        },
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
        },
       verzendkosten(){
            if(this.gold){
                return 'Gratis verzending'
            }
            return 9.99
       }
    }
});