// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Aggiungere alla pagina un’immagine, presa anch’essa da un data

const app=new Vue(
    {
    el:"#root",
    data:{
        miaClasse:["titolo","sottotitolo"],
        messaggio:["Bentornata","Bentornato"],
        sesso:prompt("Sei maschio o femmina?"),
        name:prompt("Inserisci il tuo nome"),
        linkImg:'https://images.unsplash.com/photo-1531877025030-f7696a50770f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
    },
    methods:{
        selezionaSesso:function(){
            (this.sesso == "maschio") ? this.message[1] : this.messaggio[0]
        }
    }
}
)