<<<<<<< HEAD
FROM tiangolo/uwsgi-nginx-flask:python3.8

# If STATIC_INDEX is 1, serve / with /static/index.html directly (or the static URL configured)
ENV STATIC_INDEX 1
# ENV STATIC_INDEX 0

COPY ./app /app
=======
FROM tiangolo/uwsgi-nginx-flask:python3.8

# If STATIC_INDEX is 1, serve / with /static/index.html directly (or the static URL configured)
ENV STATIC_INDEX 1
# ENV STATIC_INDEX 0

COPY ./app /app
>>>>>>> 3d4151f660dfd7158a547d312a01a49e0701ad23
