FROM node:10-alpine as build-stage

ENV appDir /home/node/app

WORKDIR $appDir

RUN mkdir -p $appDir

ADD . $appDir

RUN cd $appDir && npm install ; npm run build ;

FROM nginx:1.15

COPY --from=build-stage /home/node/app/dist /usr/share/nginx/html

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
