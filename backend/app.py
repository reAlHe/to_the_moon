#!/usr/bin/python3

from flask import Flask

app = Flask(__name__)


@app.route("/learn")
def receive_mail():
    return 'Lies doch selbst deine blöden Mails!'


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
