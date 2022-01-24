AFRAME.registerComponent('log',{
    schema:{
        message:{type:'string',default:"Welcome to 151"}
    },
    init: function(){
        console.log(this.data.message)
    }
})