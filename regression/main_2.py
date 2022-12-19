import json
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures

f = open('../overview/data_x_y.json')
  
data = json.load(f)

x = np.array(data[0]).reshape((-1, 1))
x_ = x
y = np.array(data[1])

model = LinearRegression().fit(x_, y)


y_pred = model.intercept_ + model.coef_ * x_
r_sq = model.score(x_, y)
print(f"coefficient of determination: {r_sq}")
print(f"coefficients: {model.coef_}")
print(f"intercept: {model.intercept_}")

predicted_x = []
predicted_y = []
predicted_object = {}
for i in data[0]:
    predicted_y.append(y_pred[i][0])
    predicted_x.append(i)
    predicted_object[i] = y_pred[i][0]

f = open("../overview/data_predicted.json", 'w' )
f.write(json.dumps(predicted_object, indent = 4))
f.close()