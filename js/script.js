const app = new Vue(
    {
        el: "#root",
        data: {
            mails:[],
        },
        created: function () {
            for (i=0; i<10; i++) {
                axios 
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( (result) => {
                    this.mails.push(result.data.response);
                    });
                }
            }
    },
);