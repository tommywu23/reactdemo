# Dockerfile for new core ui

FROM node:6-alpine

COPY node_project /node_project

## 设置alpine linux 阿里云源
RUN cp /etc/apk/repositories /etc/apk/repositories.bak
RUN echo "http://mirrors.aliyun.com/alpine/v3.4/main" > /etc/apk/repositories
RUN echo "http://mirrors.aliyun.com/alpine/v3.4/community" >> /etc/apk/repositories

RUN set -x && \
  npm install -g cnpm --registry=https://registry.npm.taobao.org && \
  cnpm install -g serve && \
  npm cache clean

EXPOSE 9000

CMD ["serve", "/node_project", "-p", "9000"]
