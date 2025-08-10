# Motion of Physical Bodies
## Three Laws of Motion
1. Inertia: if no force is applied on an object, its velocity shall not change.
2. Force,Mass,Acceleration: the force acting on an object is equal to the mass of the object multiplied by its acceleration. f=ma a=f/m
3. "For every action, there is an equal and opposite reaction."


## Why Calculus
 physics software simulation works by making several small predictions\
based on the laws of physics.
 perform these predictions using a mathematical technique called integration.\
 the smaller the deltat time, the better will be out prediction.

### Differentiation
if we have a function graph of pos vs. time, we can get the velocity\
by differentiating the position at a certain time t.\
v = dp/dt. the derivative of position is velocity.

if we have a function graph of velocity vs. time, we can get\
the acceleration by differentiating the velocity at a certain time t.\
a= dv/dt. the derivative of velocity is acceleration

### Integration
acceleration is constant. how do we get velocity?  
integrate the acceleration to find the velocity  
v= a*dt = v0+at  
integrate the velocity to find the position  
p= v*dt = p=p0+v0t+at^2/2  


### Numerical Integration

#### Euler Integration
only 100% accurate when the rate of change is constant over time

#### Implicit Euler
requires solving a system of equations per time-step

#### Verlet Integration
better accuracy than Implicit Euler
less memory usage when simulating a large number of particles.

#### Runge-Kutta Integration
RK4: very accurate.
accumulates error is on the order of the fourth derivative.

## Drag Force
Drag is a resistive force acting in the opposite direction of the relative\
motion of any object moving with respect to a surrounding fluid.\
The drag force depends on velocity.\
Fd = 1/2 * p * Kd * A * ||v||^2 * -v  
p : fluid density  
Kd : Coefficient of drag  
A : Cross-sectional Area  

## Friction Force
Friction is a contact force that resists sliding between surfaces  
**Kinetic friction** is the friction force when an object is sliding along a surface  
Direction is opposite the object's sliding direction and is parallel to the contact surface  
**Static friction** is the friction force that prevents an object from sliding along a surface  
Direction stops the object from sliding against another surface and is parallel to the contact surface  
Ff = u * ||Fn|| * -v  
u = Coefficient of friction  
Fn = normal force

## Gravitational Attraction
An object falling is just "our" experience of gravity  
As the earth pulls an object towrards it due to a gravtitational force, the object pulls the earth as well  
Every object with mass exerts a gravitational force on every other object  
Fg = G * (Ma * Mb) / ||d||^2 * d  

## Spring Force
The force of the spring is proportional to the displacement of the spring  
Fs= -K * dl  
k= spring constant. how stiff?    
dl= delta length. spring displacement

## Rigid Bodies
Different than particles, rigid bodies have shape, rotation, and center of mass.  
The formulas for displacement, velocity, acceleration, and forces  
discussed in the previous sections apply as well for rigid bodies.    
three main shape classes:  
1. circles
2. polygons
3. boxes

## Angular Motion

### Angular Velocity
As the body rotates, theta will change. the rate at which theta changes is called "angular velocty", w.  
w = theta/t  
### Angular Acceleration
As the body rotates, the rate at which w changes is called angular acceleration  
a= w/t  

how do we go about initiating rotational motion? how do we change angular acceleration?  

### Torque
we can initiate a rotational by applying "torque".  
the ability of a force to rotate an object around an axis  
Ft = F * d * sin(b)  
Ft = Torque Force  
d = Distance from the center to the point  

Torque is the object's Moment of Inertia multiplied by its Angular acceleration  
t = l * a  
a = t / I  
Torque is analogous to force and moment of inertia is analogus to mass  
F == t  
m == I  
### Moment of inertia
Moment of Inertia is analogous to mass, and measures how much an object  
resists to change its angular acceleration  
Moment of inertia is inversely proprotional to the angular acceleration  
- the bigger the moment of inertia, the smaller is the angular acceleration  

Different values of moment of inertia for different shapes  
Solid Circle : I = (r^2)/2 * m  
Solid Rectangle: I = (w^2 + h^2) /12 * m  


## Circle-Circle Collision
if the distance between bodies a and b is less than the sum of the two radii, we have a collision!  

### Broad Phase
Check bodies that are probably colliding, using a faster algorithm ( for example, bounding circle, or bounding rectangle )  
output: list of bodies that ar eprobably colliding

### Narrow Phase 
only continue testing the bodies that pass the broad phase test  
check if objects are indeed colliding  

It's all about culling objects that are not close.


### Resolving Collision
- the collision normal is the direction in which the potential impulse should be applied.
- the penetration depth will determine how big of an impulse we need to use.

#### Projection Method
Adjust the position of the colliding objects.  
changing their positions in opposite directions along the collision normal. 
#### Impulse Method
Adjust the velocity of the colliding objects by applying impulses  
The impulse method allows us to directly change the **velocities** of the bidoes that just collided  
The velocity changes are instant, they take new values, and the duration of the frame does not affect the result.  
Achieved through the application of an impulse to both objects, which can be thought of as an immediate transfer of  
momentum between the objects in a system  

#### Momentum
Momentum is a measurement of **mass** in motion  
a tendenct to stay in motion  
conservation of momentum: the total momentum of a system should alwats be constant. As objects collide, they impart some of their momentum on the other object,
reducing their own.  

P = m * v  

#### Impulse
Impulse is a change in **momentum** by performing a direct change in **velocity.**
Fdt = dP = mv1 - mv  
if we apply a force on an object for some time, that object will gain some momentum
Impulse is force applied on an object for some time.  
J = MdV  
Impulse is just a change in velocity  
Elastic Collision (e=1.0)  
Inelastic Collision (e=0.0)  

#### Penalty Method
Adjust the acceleration of the colliding objects

## AABB
the collision detection algorithm for AABBs is relatively cheap and fast  
therefore, AABBs are very common shapes for broad-phase test  
you'll find many games that wrap other complex shapes inside AABBs.  
if we find at least one axis where there is a gap separating the two rigid bodies,  
then we can guarantee that these bodies are not colliding!

## Separating Axis Theorem (SAT)
if there is at least one axis that separates that both shapes, then we can safely say that these bodies are not colliding  
The SAT is one of the most popular collision detection algorithms for rigid bodies  (together with the GJK algorithm)  .
The SAT onlt works for convex polygons.  
the SAT will detect box-box collision.  
### CONVEX POLYGON
- has all of its internal angles less than 180 degree
### CONCAVE POLYGON
- has at least one of its interal angles greater than 180 degree

#### GJK Algorithm
- works for both shapes, convex and concave polygons.


### OBB
Oriented Bounding boxes are boxes that are rotated  
the algorithm we will learn to detect collision between OBBs will also  
work for any other convex polygon  

