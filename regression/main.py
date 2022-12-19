import json
import numpy as np
import matplotlib.pyplot as plt
import numpy.polynomial.polynomial as poly
from sklearn.metrics import r2_score

#Gets real data from json
f = open('../overview/data_x_y.json')
data = json.load(f)
x = data[0]
y = data[1]

#Uses numpy polynomial function to run the fit
mymodel_ = np.polyfit(x, y, 6)
mymodel = np.poly1d(mymodel_)

#Plot the model into a range of 0 to len(x), 
#that means plotting the model into the range orignal x range/interval
myline = np.linspace(0, len(x), len(x))
y_predicted = mymodel(myline).tolist()

#Create the formatted dictionary to be converted to JSON sav5ed in the file
x_y_predicted = {}
for i in x:
    x_y_predicted[i] = y_predicted[i]

#Save into the file
f = open("../overview/data_predicted.json", 'w' )
f.write(json.dumps(x_y_predicted, indent = 4))
f.close()

#Shows rate of success of the function
#Shows function in terms of y
print("Rate of Success: ",r2_score(y, mymodel(x)))
print(mymodel)

plt.scatter(x, y)
plt.plot(myline, mymodel(myline), "r-")
plt.show()



