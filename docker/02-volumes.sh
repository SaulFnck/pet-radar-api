# Volumenes administrados ( docker administra el espacio, no tu)
docker volume ls # listar
docker volume create <nombre> # crear

docker container run ` # powershell ( yo use esta en cmd )
doker container run ^ # cmd
Ejemplo :
 docker container run `
>> -e MYSQL_ROOT_PASSWORD=Secret123 `
>> -v mysqldb:/var/lib/mysql `
>> -dp 3307:3306 `

# Volumenes Bind ( Se hace espejo a una carpeta para docker y local para guardar información)