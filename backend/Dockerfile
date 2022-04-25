FROM python:3.8.10
# ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
#will copy our app inside the containers app folder
WORKDIR /backend 
# RUN pip install --upgrade pip
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . . 