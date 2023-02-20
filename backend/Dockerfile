FROM python:3.11.0-alpine
WORKDIR /app
COPY . /app 
RUN pip install -r requirements.txt
ENV FLASK_APP=main.py
EXPOSE 5000

CMD ["flask", "run", "-h", "0.0.0.0"]

