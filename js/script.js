const { createApp } = Vue

createApp({
    data() {
        return {
            chatActive: 0,
            newMessage: ``,
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },

                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }],
                },


                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },

                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },

                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }],
                },

                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },

                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }

                    ],
                },

                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [

                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },

                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },

                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },

                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'

                        }
                    ],
                }
            ]


        }
    },
    computed:{
    searchTask() {
        let filteredTask;
        if (this.search != '') {
            filteredTask = this.contacts.filter((elem) => {
                return elem.contacts.toLowerCase().includes(this.search.toLowerCase())
            })
        }  
        else{
            filteredTask = this.contacts
        }
return filteredTask
    }
},
    methods: {
    selectcontact(index) {
        this.chatActive = index
    },

    splitDate(date) {
        let newDate = date.split(" ")[1].substring(0, 5)
        return newDate

    },

    getLastdate(i) {
        let messages = this.contacts[i].messages
        let newDate = messages[messages.length - 1].date
        newDate = this.splitDate(newDate)
        return newDate
    },

    addMessage(index) {
        let newObject =
        {
            date: '10/01/2020 15:50:00',
            message: this.newMessage,
            status: 'sent'
        }
        console.log(this.chatActive)
        this.contacts[this.chatActive].messages.push(newObject)
        this.newMessage = ""
        setTimeout(() => {
            newObjResponder = {
                date: '10/01/2020 15:50:00',
                message: 'ok',
                status: 'received'
            },
                this.contacts[index].messages.push(newObjResponder)
        }, 1000)
    }
},
}).mount('#app')