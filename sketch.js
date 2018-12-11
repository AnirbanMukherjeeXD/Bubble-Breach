var a=[];
var ii=0;
var jj=2;
var life=50;
var txt="";
var i;
var n;
var score=0;
var lost=0;
var pause=false;
var rr;
var fc=100; 		//FrameCount
var speed=1;
var vH=document.documentElement.clientHeight;
var vW=document.documentElement.clientWidth;
var mX=vW/2,mY=vH-300;
var maxLength=0;
var keyC=2;
function setup() {
	n=2;
	//frameRate(20);
	rr=30;
	mX=mouseX;
  createCanvas(vW,vH);
  mY=vH-300;
  //for(ii=0;ii<n;ii++){
	//a[0]=new Particle(0,0,2,2,20,20);
	//a[1]=new Particle(100,100,0,0,mouseX,mouseY);
  //}
}

function draw() {
	background(0);
    textSize(30);
    textFont('Tw Cen MT');
    fill(200);
    txt="Lives: "+life+" Score: "+score;
    text(txt,50,50);
    fill(100);
	ellipse(mX, mY, 20, 20);
	i=0;j=1;
	if((frameCount%fc==0||frameCount==10)&&lost==0){

		for(i=ii;i<ii+Math.floor(jj);i++){
			a[i]=new ParticleLinear(random(0,vW),random(-500,-50),random(speed,speed*2),50);
            score++;
		}
		ii=i;
        //score++;
		

	}
	if(frameCount%300==0){
		speed*=1.05;
		//console.log(speed);
	}
	if(frameCount%500==0){
		if(fc+10>0)
			fc-=5;
		else
			fc=30;
	}
	if(frameCount%500==0){
		jj+=1.2;
	}
	
	//console.log(a[0].y);
	mX+=(mouseX-mX)/80;
	
	if(mouseY<400||mouseY>vH-300){
		mY+=(mouseY-mY)/200;
	}else {
		mY+=(vH-300-mY)/200;
	}
	//if(frameCount==100){alert("Start");}
	
	for(i=0;i<a.length;i++){
		a[i].show();
		a[i].update();
	}
	if(frameCount%2000==0){
		i=0;
		ii=0;
	}
	if(a.length>maxLength)
		maxLength=a.length;

	//console.log(maxLength);
	//line(frameCount, 0, frameCount, height);
}

/*DEBUG PAUSE MODE */
function keyPressed() {
	if(keyCode==80){
		if (!pause) {
			console.log("Pause");
			frameRate(0);
			pause=true;
		} else {
			console.log("Play");
			pause=false;
			frameRate(60);
		}
	}
}


/////////////////////
