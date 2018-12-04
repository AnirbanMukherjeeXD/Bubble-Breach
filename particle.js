var i,j;
function ParticleLinear(x,y,ym,rr) {
    this.x = x;
    this.y = y;
    this.ym=ym;
    this.xm=random(-2,2);
    this.rd=rr;
    this.bg1=random(30,255);
    this.bg2=random(30,255);
    this.bg3=random(30,255);
    this.show = function() {
        noStroke();
        fill(this.bg1,this.bg2,this.bg3);
        ellipse(this.x,this.y,this.rd, this.rd);
   // console.log(this.x,this.y,this.rd, this.rd);
    }
  
  this.update = function() {
  //this.x += this.xm;
    if(this.y<vH+50)
      this.y += this.ym;
    this.x+=this.xm;
    if(dist(mX, mY, this.x, this.y)<=(this.rd+20)/2-2){
      //alert("Touch");
      //console.log("TT");
        
        if(life!=0){
            life--;
        }
        if(life==0){
            lost=1;
            this.bg1--;
            this.bg2--;
            this.bg3--;
      }
        
        if(lost==0){
            background(82,49,49);
            this.y=vH+50;
            this.ym=0;
            this.xm=0;
        }
    }
    //console.log(dist(mX, mY, this.x, this.y));
  }
}