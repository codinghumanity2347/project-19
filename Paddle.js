//start making a design 
class Paddle{
  
  //add the property and function
  
  //inside the constructor - we're adding the property.
  constructor(){
    this.length =70;
    this.width =10;
    this.y =0;
    this.x =0;
    this.color="white";
    this.border="red";
  }
  
  display(){
//color the object
fill(this.color);
//color the border
stroke(this.border);
 rect(this.x,this.y,this.width,this.length);   
    
    
  }
  
  
  
  
  
  
  
  
}