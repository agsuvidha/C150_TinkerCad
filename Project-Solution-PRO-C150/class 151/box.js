AFRAME.registerComponent("move",{
    schema:{
        movesX:{type:"number",default:-1}
    },
    tick:function(){
        this.data.movesX=this.data.movesX+0.01;
        var p=this.el.getAttribute("position")
        p.x=this.data.movesX
        this.el.setAttribute("position",{x:p.x,y:p.y,z:p.z})
    }
})