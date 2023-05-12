#!/usr/bin/python3

from flask import Flask, request

from transformers import pipeline

app = Flask(__name__)


classifier = pipeline("zero-shot-classification",
                      model="facebook/bart-large-mnli")

candidate_labels = ['crime', 'entertainment', 'politics', 'science']


@app.route("/categorize", methods=["POST"])
def receive_mail():
    return categorize(request.get_data())


def categorize(sequence_to_classify):
    sequence_to_classify = "one day I will see the world"

    classifier(sequence_to_classify, candidate_labels)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
