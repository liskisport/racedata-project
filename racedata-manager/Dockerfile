FROM python:3.7.4

RUN pip3 install pipenv

ADD Pipfile /racedata-manager/
ADD Pipfile.lock /racedata-manager/

WORKDIR /racedata-manager

RUN pipenv install flask flask-api mysql-connector-python
RUN pipenv install --system --deploy --dev

COPY . ./

CMD pipenv run python app.py