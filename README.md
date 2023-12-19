# WhatsApp Online Tracker

##  1. About
This small snippets allows you to track a users WhatsApp behavior exploiting the WhatsApp web implementation. It monitors the users online-offline activity. At the moment it is only possible to monitor one user at the same time. The collected material is stored in a CSV file on your tracking machine.

Use it in your own language, you only have to change the if condition with the includes

The code can be broken with new versions of Whatsapp Web

## 2. Requirements

- Smartphone and phone number where WhatsApp is installed and registred

- A browser on a Windows/Linux/Mac machine which is connected to the SmartPhone using WhatsApp web (tested on Chrome)

- The Smartphone and tracking machine (WhatsApp web) needs to be online 24/7 to ensure that a full time monitoring of the user is achived

- Python 3 installed on you tracking machine


## 3. Usage [Linux]
- Set permissions for run the server: 
```chmod 700 ./server.py```
- Set writeable permissions for data.csv
``` chmod +w ./server.py ```
- Start the Server: python3 server.py
- Open WhatsApp web and select the user to track. Open the chat with the user that you want to track (the user will always be at the top and guarantees that the tracking script works properly).
- Open the web developer console(F12)
- Insert the JavaScript code available inside the file inject.js
- Wait for data added to data.csv as soon as the user is online
- Analyse the data collected in data.csv
- If you want to stop it you only have to stop the python server and reload the page

## 3. Usage [Windows]
- Start the Server: python3 server.py
- Open WhatsApp web and select the user to track. Open the chat with the user that you want to track (the user will always be at the top and guarantees that the tracking script works properly).
- Open the web developer console(F12)
- Insert the JavaScript code available inside the file inject.js
- Wait for data added to data.csv as soon as the user is online
- Analyse the data collected in data.csv
- If you want to stop it you only have to stop the python server and reload the page

This project is a remaster of rndinfosecguy/vulture.

