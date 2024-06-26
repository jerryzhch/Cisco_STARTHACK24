# cisGO!

[Check out the demo](https://starthack2024.web.app/)

## 📦 Overview

cisGO! is a nurse call system which finds the most suitable nurse based on various paramenters (e.g. compentency level or distance to patient) in a hospital environment. It aims to make processes faster and more efficient. It is a technology based on Cisco Space API.  

This project was part of the Cisco Challenge at the START Global Hackathon 2024. More information can be found [here](https://github.com/START-Hack/Cisco_STARTHACK24)

## 📱 Interfaces

### Multiple UI's to choose from for an effective communication
2 Alarms |  6 Alarms | 9 Alarms
:-------------------------:|:-------------------------:| :-------------------------:
![Tablet](./assets-src/1iPad.png) | ![Tablet](./assets-src/2iPad.png) | ![Tablet](./assets-src/4iPad.png)


Button screen for patients|  Alarm screen for nurses
:-------------------------:|:-------------------------:
![Tablet](./assets-src/1tablet.png) | ![Phone](./assets-src/2phone.png)

### Accept alarms
Get Alarms |  Accept Alarms | See Alarms
:-------------------------:|:-------------------------:| :-------------------------:
![Tablet](./assets-src/phone1.png) | ![Tablet](./assets-src/phone2.png) | ![Tablet](./assets-src/phone3.png)

### Innovative Dashboard
Monitor alarms, nurses and status

![Dashboard](./assets-src/dashboard1.png) 

## ⬇️ Installation

**Option 1**: Full installation:
```shell
docker-compose up
```
**Option 2**: Custom installation
1. Web/GUI
```shell
npm install && npm start
```
2. Cisco Spaces Microservice
```shell
pip install -r python/requirements.txt 
```
3. Domain model
```shell
npm install && node datatree.js
```


### Technologies Used
- [Cisco Space API](https://partners.dnaspaces.eu/docs/v1/basic/index.html#!c-dnas-partners-overview.html). 
- Firebase Realtime Database
- Framework7 (UI Framework)
- Docker
- Python
- No Sleep :)

## ✍️ Authors

[Check out the demo](https://starthack2024.web.app/)

- Jerry Agboola (Software Lead)
- Jeremy Mrzyglocki (Software & Business)
- Elizaveta Subgrobova (Business)
- Marvin Elling (Software)
