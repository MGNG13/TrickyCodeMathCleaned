import os
import time

def check():
    os.system('sudo ./check_updated')

os.system('clear')
print('Cronjob started.')

while (True):
    time.sleep(30)
    check()