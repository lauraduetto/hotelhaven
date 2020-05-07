# hotelhaven

## to clone the repo:
git clone https://github.com/lauraduetto/hotelhaven

## to run the server:

npm install

npm start

## to install the db:
get mariadb

    docker pull mariadb/server:10.3
create container
    
    docker run -p 3306:3306 --name hhmariadb -e MYSQL_ROOT_PASSWORD=hh -d mariadb/server:10.3
run the container
    
    docker start hhmariadb
copy database script into the container

    docker cp dump.sql hhmariadb:dump.sql
get into container bash

    docker exec -it hhmariadb bash
load db script

    mysql -h 127.0.0.1 -P 3306 --protocol=TCP -u root -p < dump.sql
