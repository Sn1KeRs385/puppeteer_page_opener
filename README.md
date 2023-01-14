# Puppeteer page opener

### How to install
1) Open server dir, install packages using yarn and back to root dir
```shell
cd server && yarn && cd ..
```
2) Copy docker-compose.example.yml to docker-compose.yml
```shell
cp docker-compose.example.yml docker-compose.yml
```
3) Run docker compose
```shell
docker-compose up -d
```
* Server started and listening port 3000 on default.

### How it works

* You can call page opener with `/api/v1/get-page` endpoint 

* Use required param `?link=https://you-page/subpage`
* Use optional params
* * `&only_body=true` - use if you need only body part of page
* * `&remove_tags[]={tagname}` - use for delete tags, include inside body tag. 
Example: `&remove_tags[]=script&remove_tags[]=style`
* * `&with_timings=true` - use for timing report in answer body
