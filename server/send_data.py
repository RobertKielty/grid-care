import numpy as np
import pandas as pd
import csv
from kafka import *
import json
import datetime
import time 

#Load .csv into dataframe
def load_data():
    oms_df=pd.read_csv('all_outages.csv')

    oms_df.columns=['id','area','stn_no','stn_name',\
                    'feeder','feeder_volt','rur_urban','da',\
                    'in_cubicle','volt','action','fault_type',\
                    'failure','cause','category','outage_type',\
                    'reason','device','phasing',\
                    'x_coord','y_coord','lat','long','danger',\
                    'emerg_calls','crew_time','date','num_calls',\
                    'fire_calls','police_calls','num_crews',\
                    'num_cust','partial','duration',\
                    'hours_lost','rest_time']

    return oms_df

#Send messages via kafka
def send_incident_message(oms_df):
#    producer = KafkaProducer(bootstrap_servers='localhost:192.168.0.30:42181')

    message={}

    # Loop over dataframe rows
    for index, row in oms_df.iterrows():

        incident=row['fault_type']+" fault in "+\
            row['area']+" at "+row['stn_name']+" station "+row['stn_no']

        message['id']=row['id']
        message['start_time']=row['crew_time']
        message['incident_message']=incident
        message['customer_remarks']='Remark'
        
        json_data = json.dumps(message)
        print json_data
        
        #Send event id
#        producer.send('oms_event', {'id': row['id']})

        #producer = KafkaProducer(value_serializer=lambda m:
        #json.dumps(m).encode('ascii'))
        #print row.to_json



def send_event_message():
#    consumer =KafkaConsumer(bootstrap_servers='172.16.3.34:39092',value_deserializer=lambda m: json.loads(m.decode('utf-8')))
    producer = KafkaProducer(bootstrap_servers='localhost:192.168.0.30:42181',\
                            value_serializer=lambda m: json.dumps(m.encode('utf-8')))

    message={}
    message['incident_id']=1

    t=2
    ###################################################
    # MESSAGE 1 
    message['event_id']=1
    message['event_time']=str(datetime.datetime.now())
    message['event_type']='DISPATCH_MESSAGE_SENT',
    message['agent_type']='ESB'
    message['dispatcher_remarks']='Customer Mobile 087 555 55 55 - \
                                    ESB Cable down over Garden across road'

    json_message = json.dumps(message)
    producer.send('oms_event',json_message)
    time.sleep(t)

    ###################################################
    # MESSAGE 2 
    message['event_id']=2
    message['event_type']='ESB Electrician sent to site, Gardai advised.'
    message['event_time']=str(datetime.datetime.now())
    message['agent_type']='ESB'
    message['dispatcher_remarks']='Customer Mobile 087 555 55 55 - \
                                    ESB Cable down over Garden across road'
 
    json_message = json.dumps(message)
    time.sleep(t)

    ###################################################
    # MESSAGE 3
    message['event_id']=3
    message['event_type']='Gardai have closed road'
    message['event_time']=str(datetime.datetime.now())
    message['agent_type']='GARDA'
    message['dispatcher_remarks']='Customer Mobile 087 555 55 55 - \
                                    ESB Cable down over Garden across road'
 
    json_message = json.dumps(message)
    time.sleep(t)

    ###################################################
    # MESSAGE 4
    message['event_id']=4
    message['event_type']='Line has isolated and made safe. Lines crew needed (50 meters of 95s bundle needed)'
    message['event_time']=str(datetime.datetime.now())
    message['agent_type']='ESB'
    message['dispatcher_remarks']='Customer Mobile 087 555 55 55 - \
                                    ESB Cable down over Garden across road'
 
    json_message = json.dumps(message)
    time.sleep(t)

    ###################################################
    # MESSAGE 5
    message['event_id']=5
    message['event_type']='Lines crew arrived on site, estimated time of reconnection 13:00'
    message['event_time']=str(datetime.datetime.now())
    message['agent_type']='ESB'
    message['dispatcher_remarks']='Customer Mobile 087 555 55 55 - \
                                    ESB Cable down over Garden across road'
 
    json_message = json.dumps(message)
    time.sleep(t)

    ###################################################
    # MESSAGE 6
    message['event_id']=6
    message['event_type']='Lines restrung, Garda have left scene, road open'
    message['event_time']=str(datetime.datetime.now())
    message['agent_type']='ESB'
    message['dispatcher_remarks']='Customer Mobile 087 555 55 55 - \
                                    ESB Cable down over Garden across road'
 
    json_message = json.dumps(message)
    time.sleep(t)

    ###################################################
    # MESSAGE 7
    message['event_id']=7
    message['event_type']='Power restored and polatity testing complete'
    message['event_time']=str(datetime.datetime.now())
    message['agent_type']='ESB'
    message['dispatcher_remarks']='Customer Mobile 087 555 55 55 - \
                                    ESB Cable down over Garden across road'
 
    json_message = json.dumps(message)


#Main
def main():
#    oms_df = load_data()
#    send_incident_message(oms_df)
    send_event_message()


if __name__=='__main__':
    main()
