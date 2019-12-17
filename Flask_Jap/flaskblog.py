from flask import Flask, render_template
app = Flask(__name__)

jobs = [
    {
        'customer': 'jenn ben',
        'work_type': 'cleaning',
        'date_of_work': '7-14-86',
        'dollars_charged': '70'
    },
    {
        'customer': 'ben swen',
        'work_type': 'cleaning',
        'date_of_work': '7-14-96',
        'dollars_charged': '660'
    },
    {
        'customer': 'Tren swen',
        'work_type': 'closing',
        'date_of_work': '7-14-06',
        'dollars_charged': '80'
    }
]


@app.route("/")
@app.route("/home")
def hello():
    return render_template('home.html', jobs=jobs)


@app.route("/about")
def about():
    return render_template('about.html')


if __name__ == '__main__':
    app.run(debug=True)
