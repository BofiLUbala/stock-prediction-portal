'''












Access token is used to access the protected data from backend, it has short life time almost 5 minutes
while logging the system we have access and refresh token at frontend, while sending request to protected endoint , I send together with authorization header with valid access token
then backend server will verify my access token and give  the response just within the 5 minutes of accesstoken lifespan
in case the time life of acess token is over, backend will send response back to front end as 401:unauthorized,

to overcome this, we have refresh commes. Now when the life span of accesstken is over and backend server sends 401, the frontend sends an new request but this time will be refresh token. then backend after receiving it will verify it and sends agian new access token to frontend
Aigian, front will try once sending Authorized header along with new access token
so if this new access token is vali, the backend will send response with the required data


## creating protected view









Docstring for frontend-react.src.index
'''












