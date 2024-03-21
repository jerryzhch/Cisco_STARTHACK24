# %%
%matplotlib qt

import requests
import json
import socket
import os
import sys

import matplotlib.pyplot as plt
# import pandas

def get_API_Key_and_auth():
    # Gets public key from spaces and places in correct format
    print("-- No API Key Found --")

    # Gets user to paste in generated token from app
    token = input('Enter provided API key here: ')

    # Writes activation key to file. This key can be used to open up Firehose connection
    f = open("API_KEY.txt", "a")
    f.write(token)
    f.close()
    return token

# work around to get IP address on hosts with non resolvable hostnames
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.connect(("8.8.8.8", 80))
IP_ADRRESS = s.getsockname()[0]
s.close()
url = 'http://' + str(IP_ADRRESS) + '/update/'

# Tests to see if we already have an API Key
try:
    if os.stat("API_KEY.txt").st_size > 0:
        # If we do, lets use it
        f = open("API_KEY.txt")
        apiKey = f.read()
        f.close()
    else:
        # If not, lets get user to create one
        apiKey = get_API_Key_and_auth()
except:
    apiKey = get_API_Key_and_auth()

# overwrite previous log file
f = open("logs.json", 'r+')
f.truncate(0)

# Opens a new HTTP session that we can use to terminate firehose onto
s = requests.Session()
s.headers = {'X-API-Key': apiKey}
r = s.get(
    'https://partners.dnaspaces.io/api/partners/v1/firehose/events', stream=True)  # Change this to .io if needed

# Jumps through every new event we have through firehose
print("Starting Stream")
def update_plot(data):
   
    plt.clf()  # Clear the previous plot
    for obj_id, (x, y) in data.items():
        plt.scatter(x, y, label=obj_id)  # Scatter plot each object
    plt.xlabel('X-axis')
    plt.ylabel('Y-axis')
    plt.title('Object Positions')
    plt.grid(True)
    plt.pause(0.01)
    plt.draw()
    plt.show(block=False)
data = {}
for line in r.iter_lines():
    if line:
    
        # decodes payload into useable format
        decoded_line = line.decode('utf-8')
        event = json.loads(decoded_line)

        # gets the event type out the JSON event and prints to screen
        eventType = event.get('eventType', None)
        if eventType and eventType == "DEVICE_LOCATION_UPDATE" and event["partnerTenantId"] == "Simulation-Workspaces":

            # writes every event to the logs.json in readable format
            # f.write(str(json.dumps(event, indent=4, sort_keys=True)) + "\n")
            # print(event['deviceLocationUpdate']['device']['deviceId']) #} {event['xPos']}')
            # print(event['deviceLocationUpdate']['xPos'])
            
            json_path = 'src/components/dashboard-grid/positions.json'
            

            data[event['deviceLocationUpdate']['device']['deviceId']] = (event['deviceLocationUpdate']['xPos'],event['deviceLocationUpdate']['yPos'])
            new_data = []
            for device_id, (x, y) in data.items():
                new_dict = {
                    "id": device_id,
                    "x": x*3,
                    "y": y*3
                }
                new_data.append(new_dict)

            # with open('positions.json', 'w') as json_file:
            with open(json_path, 'w') as json_file:

                json.dump(new_data, json_file)
            # update_plot(data)
            print(data)
# %%


