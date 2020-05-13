FROM python:3.7.4

ENV PYTHONDONTWRITEBYTECODE 1
ENV FLASK_APP "racedata-server/app.py"
ENV FLASK_ENV "development"
FROM python:3.7

EXPOSE 5000

RUN pip3 install pipenv

WORKDIR /racedata-manager

COPY Pipfile ./
COPY Pipfile.lock ./

RUN set -ex && pipenv install --deploy --system

COPY . ./

CMD ["python", "app.py"]