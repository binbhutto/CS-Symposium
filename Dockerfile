FROM node:13.12.0-alpine
WORKDIR /v2.0.f
COPY . /v2.0.f
RUN npm install
RUN npm run build
RUN npm install -g serve
CMD ["serve","-s","build","-l","5697"]
