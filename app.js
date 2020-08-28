const app = new Vue({
    el:'#app',
    data:{
        sueldo:'',
        dVaca:'',
        pAviso:'',
        causaDespido:'',
        fInicio:'',
        fFin:'',
        resultado:''              
    },
    methods: {
        calcular () {
           this.resultado = this.antiguedad+this.sac+this.vacas+this.preaviso+this.diasT       
        },        
    },
    computed:{
        antiguedad(){
            var dt1 = new Date(this.fInicio);
            var dt2 = new Date(this.fFin);
            
            let totalDias =  Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
            let anos = Math.floor(totalDias/360)
            let intanos = parseInt(anos) 
            console.log(dt1+" // "+dt2);
            console.log(totalDias);
            console.log(intanos);
           
            if (this.causaDespido == "2" || this.causaDespido =="3"){
                return 0
            }else if (this.causaDespido == 1){
                return this.sueldo *anos
            }     
        },
        vacas(){
                return (this.sueldo/25)*this.dVaca
            },
        preaviso(){
            if (this.pAviso =="2"){
                return this.sueldo
            }else{
                return 0
            }
        },  
        diasT(){
            let dt2 = new Date(this.fFin);
            let dias =  dt2.getDate()
            total= Math.round((this.sueldo/30)*dias)
            return total
        },
        sac(){
            let dt2 = new Date(this.fFin);
            let mes =  dt2.getMonth()
            let dias =  dt2.getDate()
            console.log(mes);
            console.log(dias);
            console.log(dt2);
            if( mes > 6 ){
                m =((mes-6)*30)+dias
                let sac = (this.sueldo/365)*m
                return Math.round(sac)
            }else if(mes < 6) { 
                m=(mes*30)+dias
                let sac = (this.sueldo/365)*m
                return Math.round(sac)
            }
        }  
    }
})