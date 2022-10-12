Without Docker Compose 
see docker file in my github directory

docker build .   
docker image ls  
docker image rm 4bc61d638603  #if delete docker image
docker build -t imageName .  
docker run -d -p 3000:3000 --name react-app imageName
docker exec -it react-app bash    #if want to do something with react-app                     
docker rm react-app -f            #if want to delete the container


With Docker Compose

see docker-compose file in my github directory

docker-compose --help  #show compose command
docker-compose up -d   #for up docker-compose                                                        
docker-compose down    #for down docker-compose  

