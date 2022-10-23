FROM tiangolo/uwsgi-nginx-flask:python3.8

# If STATIC_INDEX is 1, serve / with /static/index.html directly (or the static URL configured)
ENV STATIC_INDEX 1
# ENV STATIC_INDEX 0

#ENV STATIC_PATH /app/static/main

COPY ./requirements.txt /app/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt

ENV LISTEN_PORT 8080

EXPOSE 8080

COPY ./app /app
