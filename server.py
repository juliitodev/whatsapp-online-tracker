from flask import Flask, request
import csv

app = Flask(__name__)

@app.route('/')
def home():
        user = request.args.get('user')
        date = request.args.get('date')
        starttime = request.args.get('starttime')
        endTime = request.args.get('endtime')
        if all([user, date, starttime, endTime]):
            with open('output.csv', 'a', newline='') as file:
                print(user)
                writer = csv.writer(file)
                writer.writerow([user, date, starttime, endTime])
        return ''
if __name__ == '__main__':
    app.run(port=5555)