
# Calculus 1 Final Project 

### Idea
Initially, the idea was to create the calculus 1 final project, where you would need to use any calculus 1 topic to solve a real/practical problem.

### Question

An ORU student has a group of friends waiting at IHOP and he is trying to get there in less than 40 seconds. During a past ride, the same student was at the Dominos Plaza at time = 0, position 0, velocity = 0, and acceleration = 0 making it into IHOP by time = 3:30.
Our idea is to calculate the position function based on data given by a Fitbit watch. Using the function "Exercise" and according to this website (https://help.fitbit.com/articles/en_US/Help_article/1133.htm) . Exporting it later, it is possible to measure the position x and the time with it. With this information, it is possible to create a position function based on the points from Fitbit. The first question is: What was the greatest acceleration value and velocity value on the interval from Main Entrance to IHOP?
Based on past information, in a different situation, will the student be able to get to IHOP coming from ORU's  Main Entrance (Praying Hands) in 40 seconds or less? Consider a different situation, that at ORU's  Main Entrance (Praying Hands) time = 0, position = 0, velocity = 0, and acceleration = 0.


### First Step
The first step of this project is to collect the data. In order to do so, the digital watch Fitbit has the option of tracking while doing a bike ride. With that it is possible to use the fitbit while driving from Dominos Pizza to IHOP and getting the data later on. 
The event generated 197 track points, it lasted for three minutes thirty seconds, averaging in 1 data point per second. With all these points the last stage was to graph them and create a mathematical function in order to get the go on with the next stages.
Using the framework node.js, it was possible to convert the file given by the Fitbit system (extension .tcx) to JSON (JavaScript Object Notation). So after converting the data to JSON, it was time to graph it (picture 1), using css, html, javascript, and Chart.js.

#### File Tree:
overview: You will find the files generated (.json) after the calculations and a .html page where you can find a graph rendering these files.

regression: You will find the two versions of the code used to generate the final output, main.py being the algorithm used to render the final result, and main_2.py being the code used initially.

picture: folder with the picture to these README.md.

server.js: file used to start a express server that will show the 'overview' page

52003519931.tcx: file colleted from the Fitbit with the data.



![alt text](https://github.com/samupp2758/calculus1_final_project/blob/master/picture/f1.png)
Graph generated with the data collected from the Fitbit (Figure 1)

Now, to create a valid mathematical function, it will be necessary to use a regression equation. There are a lot of different ways to come up with a function, the first one tried was the Linear Regression method, that utilizes the method: f(x) = mx + b, that means that the software will try to find the best fit for variable m and for variable b, both of them being real numbers. The down-side with the linear regression equation is the constant growth that it has, not serving really well the ups and downs in slope created by a different method.

![alt text](https://github.com/samupp2758/calculus1_final_project/blob/master/picture/f2.png?raw=true)
Graph generated with the data collected from the Fitbit compared to the data created with the linear function (Picture 2).

Function generated:
f(x) = 9.40673574x + 47.425115476371616

The usage of a polynomial function would increase the proximity considerably, having the possibility of admitting terms raised to a certain degree and constants, already introduced in the linear method.
These graphs and functions above were generated by the library scikit-learn in the python environment, which later on would be replaced by the features built into numpy, a data science library for python. Even using the polynomial feature in scikit-learn, it wasn’t possible to get a good result even closer from the reality captured through the watch. So, using the numpy method, I got into these informations:

![alt text](https://github.com/samupp2758/calculus1_final_project/blob/master/picture/f3.png?raw=true)
Comparison between the collected data (red) and the created function (green)(Figure 3)

Function and rate of proximity:
![alt text](https://github.com/samupp2758/calculus1_final_project/blob/master/picture/f4.png?raw=true)
Output from the code created (Figure 4)

Now, following up the project, the idea is to interpret the information (For example, moments when the car stopped for more than 30 seconds or moments of increasingly high acceleration that got lost because of the regression process) through the velocity and acceleration function, analyzing the maximums, averages and see if the car, in hypothetical situation, could make it into IHOP (C) coming from the Praying Hands (B) and 40 seconds, after being completely stopped by point B.
