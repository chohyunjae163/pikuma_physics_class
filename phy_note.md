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

