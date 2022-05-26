# challenge_frond_end
Resto para desarrollador react.js 

# challenge_frond_end
Resto para desarrollador react.js 

# Server Express
esta alojada un <<puerto 3001>> y desde la carpeta de service_express, levantar con el comando <<npm run start>>

- la DB se encuentra alojada en Azure, con mongoDB

## Proyecto Challenge - React 
El proyecto está estructurado de la siguiente manera:

**api** 
En esta carpeta se construyó toda la lógica para consumir los servicios get, que mediante props se tiene que pasar las path.

**Components**
Se encuentra todos los componetes que van a poder ser reutilizables en todo el proyecto.
<<CustomInput>> Es un componete texto de entrada, que recive props:
- onChange(evento que captura los datos de entrada), 
- errors (Es el ecargado de mostrar el error del campo vacio), 
- name (Es el identificador del input ),
- placeholder(sobre nobre no requerido para el texto), 
- value (el valor del texto), 
- type(tipo de texto)

<<CustonItem>> Componete que mediante props, resive un objeto, y esta se encarga de mostrar la lista de la busqueda.
<<DetailContainer>> Componete ercargado de nostrar el detalle, se usa en la page DetailPage

<<ResultContainer>> Es un componete padre que agrupa al componete CustomItems

**Helpers**
Archivo que ayuda a concatenar los parametros de la ruta search

**Hooks**
Se cuenta dos hook que ayudan con la validación del input search. 
El <<useForm>>, recibe dos props, que validan el estado inicial no esté vacío y el otro valida que valores están permitidos. Se encarga de que si el input está vacío. Entonces no pueda cambiar de página.
El <<useValidation>>, se encarga ver validar que tipo de dato que está permitido recibir, en este caso solo valida string. 

**Page**
Son las paginas de navegación que serán visibles para el usurio. 

**Servicio**
aqui se aloja los dos servicios, que se usan por la page. 
