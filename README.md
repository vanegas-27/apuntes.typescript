# apuntes typescript

-> por lo general se utiliza solo para desarrolo y se implementa con

```
npm install --typescript --save-dev
```

y el npx tsc --version
es para detectar con que version estamos trabajando

```
-- //@ts-check
```
-> al escribir esta linea en nuestro codigo, utilizamos typescript
para chequear nuestro codigo y verificar posibles errores

-> Compilación de archivos TypeScript desde Node.js
Para realizar el proceso de transpilación en Node.js, ejecutemos lo siguiente en la terminal:

```
npx tsc archivo_typescript.ts
```
-> Este comando compila el archivo archivo_typescript.ts y lo
transpila a JavaScript.

```
npx tsc archivo_typescript.ts --target es6
```
-> Este comando compila el archivo archivo_typescript.ts y lo
transpila a JavaScript con la version de ECMAScript en este caso la 6

```
npx tsc *.ts --target es6 --outDir carpeta_destino
```
-> Este comando compila todos los archivos .ts de la carpeta actual y
los transpila a JavaScript con la version de ECMAScript en este caso la 6 y
los guarda en la carpeta carpeta_destino

-> ahora trabajaremos con la configuracion de typescript para no tener
que hacer lo anterior constantemente y se inicializa con
```
npx tsc --init
```

-> despues de tener el archivo tsconfig ya configurado, utilizamos el comando
```
npx tsc para ejecutar la Compilación
```


-> y por ultimo con npx tsc --watch podemos ejecutar la configuracion
de manera continua
