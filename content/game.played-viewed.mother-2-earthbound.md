---
id: 1HFKLV6I6
title: "\U0001F4DD Mother 2: Giygas Strikes Back"
desc: Conocimiento extraído de una fuente de recursos o producida por mi
updated: 1700582422039
created: 1700427438
tags:
  - "type/\U0001F4DD"
  - queued/note
  - "stage/\U0001F331"
alias:
  - Game.played-viewed.mother-2-earthbound
  - game.played-viewed.mother-2-earthbound
dg-publish: true
---
```dataviewjs
let stateTag = dv.current().tags.find( tag => { return tag.contains("stage")}).replace("stage/","");

let daysOld = timeStr(new Date() - dv.current().file.ctime);
let lastTended = timeStr(new Date() - dv.current().file.mtime);

function timeStr(i) {
	let temp = i/(60*60*24*1000); // a dias
	if(temp/(12*30) >= 1) return parseFloat(temp/12*30).toFixed(1) + " year/s"; // a anhos 
	if(temp/30 >= 1) return parseFloat(temp/30).toFixed(1) + " month/s"; // a meses
	if(temp <= 0.1) return "a moment";
	return parseFloat(temp).toFixed(1) + " day/s";
}
dv.el("small","This " + stateTag + " is " + daysOld + " old, and was tended " + lastTended + " ago.");
```

🗃: [^ref1]

# [[ape&hal-laboratory.1994.mother-2-earthbound|📚 Mother 2: Giygas Strikes Back]]
---

> [!check] ¿Qué me ha gustado de Mother 2?
> - La trama y el ritmo se han mantenido 'to the point' e interesantes casi todo el tiempo.
> 	- Los NPCs y las cinemáticas solían darte la información necesaria, de manera no intrusiva y sin llevarte de la mano, para saber como avanzar al siguiente punto.
> - 

> [!fail] ¿Qué mejoraría de Mother 2?
> - En Fourside, daría más pistas para avanzar su arco, o las haría más explícitas.
> - Haría que el gameplay de Poo se centrara mucho más en su transformación:
> 	- Bien con un acierto del 100% mientras el enemigo no lo supere en X niveles o sea un boss, en cuyo caso indicaría al jugador que Poo no puede manejar tanto poder.
> 	- Bien eliminando las magias de Poo pero permitiéndole robarlas al enemigo.
> - Balancearía el daño y precios de las bombas de Jeff y limitaría cuantas puede llevar.
> - Reduciría los combates en algunas zonas, sobretodo finales.

> [!important] ¿Qué me ha parecido brillante de Mother 2?
> - El personaje de Jeff me ha molado mucho porque substituye las magias por artilugios reutilizables o muy poderosos.
> 	- Muchos de estos artilugios se desbloqueaban subiendo de nivel y durmiendo en hoteles, obligándote a curarte y guardar allí de vez en cuando.
