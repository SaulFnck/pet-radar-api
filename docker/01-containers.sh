# Listar contenedores activos ( -a para mostrat todos )
docker container ls 

# Crear cintenedor 
docker container run --name <nombreContenedor> <contenedorWebNombre>

# Indicar puertos ("puertoLocal":"PuertoContenedor")
docker container run -p 666:80 docker/getting-started

# Eliminar un contenedor
docker container stop <id> / <nombre>
docker container rm <id> / <nombre>

#forma directa
docker container rm -f <id> / <nombre>

# Borrar todos los apagados
docker container prune 

# ver imagenes guardadas
docker image ls 

#descargar imagen
docker pull <nombreImagen>

# Entrar a un contenedor
docker container exec -it <id> / <nombre>
#exit para salir

#Mantener contenedor abierto (-d sleep 3600)
docker container run --name Ubuntu -d ubuntu sleep 3600

docker container run -e MYSQL_ROOT_PASSWORD=Secret123 -dp 3307:3306 mysql