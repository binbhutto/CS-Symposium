FROM python:3.6
WORKDIR /Sym_bk

COPY . /Sym_bk

RUN pip install -r requirements.txt

CMD["gunicorn","-b","0.0.0.0:8005","app:app","--workers=3"]