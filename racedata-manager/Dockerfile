FROM python:3.7.4

RUN pip3 install pipenv

ADD Pipfile /racedata-manager/
ADD Pipfile.lock /racedata-manager/

WORKDIR /racedata-manager

ENV FLASK_APP app.py
ENV FLASK_RUN_HOST 0.0.0.0

RUN pipenv install flask flask-api mysql-connector-python
RUN pipenv install --system --deploy --dev

COPY . ./

ENTRYPOINT ["python"]
CMD ["app.py"]