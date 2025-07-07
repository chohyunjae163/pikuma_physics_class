
class Vec3 {
  constructor(x,y,z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  
  add(v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
  }
  static add(a,b) {
    let result = new Vec3(0,0,0);
    result.x = a.x + b.x;
    result.y = a.y + b.y;
    result.z = a.z + b.z;
    return result;   
  }
  sub(v){
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
  }
  
  static sub(a,b) {
    let result = new Vec2(0.0)
    result.x = a.x - b.x;
    result.y = a.y - b.y;
    result.z = a.z - b.z;
    return result;
  }
  scale(n) {
    this.x *= n;
    this.y *= n;
    this.z *= n;
  }
  
  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;  
  }
  
  // ...
  cross(v){
    let result = new Vec3(0,0,0)
    result.x = this.y*v.z - this.z*v.y;
    result.y = this.z*v.x - this.x*v.z;
    result.z = this.x*v.y - this.y*v.x;
    return result
  }
  normalize() {
    let len = this.mag();
    this.x /= len;
    this.y /= len;
    this.z /= len;
  }
  mag() {
    return Math.sqrt(
      (this.x * this.x) + 
      (this.y * this.y) +
      (this.z * this.z))
  }
  //todo: draw method for 3d canvas in the future...
}

let pos3d = new Vec3(10,20,-2);
let vel3d = new Vec3(1,2,0);

class Vec2 {
  constructor(x,y) {
    this.x = x
    this.y = y
  }
  
  add(v){
    this.x += v.x;
    this.y += v.y;
  }
  
  static add(a,b) {
    let result = new Vec2(0,0);
    result.x = a.x + b.x;
    result.y = a.y + b.y;
    return result;
  }
  
  sub(v){
    this.x -= v.x;
    this.y -= v.y;
  }
  
  static sub(a,b) {
    let result = new Vec2(0.0)
    result.x = a.x - b.x;
    result.y = a.y - b.y;
    return result;
  }
  
  scale(n) {
    this.x *= n;
    this.y *= n;
  }
  
  dot(v) {
    return this.x * v.x + this.y * v.y;  
  }
  
  perp(){
    let result = new Vec2(this.y, -this.x)
    return result
  }
  normalize() {
    let len = this.mag();
    this.x /= len;
    this.y /= len;
  }
  mag() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y))
  }
  rotate(angle){
    let result = new Vec2(0,0);
    result.x = this.x * Math.cos(angle) - this.y*Math.sin(angle);
    result.y = this.x * Math.sin(angle) + this.y*Math.cos(angle);
    return result
  }
  draw(color){
    fill(color)
    stroke("white");
    circle(this.x,this.y,10)
  }
}

// create new object of the type Vec2
var pos = new Vec2(25,25)
var velocity = new Vec2(2,1)
let angle = 0.0;

var x = 10;
var y = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pos.scale(5)
  
}

function draw() {
  translate(windowWidth/2,windowHeight/2)
  background(0);
  let rotpos = pos.rotate(angle);
  rotpos.draw("red")
  
  angle += 0.01;
  
}
