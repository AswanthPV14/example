new Vue({
    el: '#vue-app',
    data: {
        name: 'Shaun',
        job: 'Ninja',
        website: "https://www.youtube.com/",
        websitetag:"<a href='https://www.youtube.com/'>youtube</a>",
        age: 24
    },
    methods:{
        greet: function(time){
            return "Good " + time+" " + this.name ;
        },
        add: function(){
            this.age++
        }
    }
});
