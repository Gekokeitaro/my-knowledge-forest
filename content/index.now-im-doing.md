---
id: 1HKCOLQDS
created: 1705530550
title: ¿Qué estoy haciendo ahora?
alias: [Index.now-im-doing, index.now-im-doing]
desc: 'Conocimiento extraído de una fuente de recursos o producida por mi'
tags: [type/📝, queued/note, stage/🌱]
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

# ¿Qué estoy haciendo ahora? - 01/2024

- Preparando una modlist para [[Tales of Two Wastelands]] utilizando por primera vez [["The method"]].
- Diseñando unas tablas de [[condicionamiento físico]], orientadas a progresiones y a [[Jugger]], para mi equipo.
- Pensando en como reducir la [[fricción]] en mis flujos de trabajo, y hacerlos más [[sostenibles]] y [[saludables]], para:
	- [[Extraer conocimiento]] de manera efectiva de mis [[semilleros]]
	- Desarrollar de principio a fin mi primer juego en [[Pico-8]] en 1-2 semanas, y no morir en el intento.
	- Seguir mejorando mi [[empleabilidad]] realizando cursos.
		- Mis próximas paradas son:
			- [[Spring Web Flux]], para el desarrollo de [[aplicaciones reactivas]]
			- [[Docker]] y [[Kubernetes]]
- [[Tomando notas]] sobre temas fuera de un proyecto o producto de la [[serendipia]]:
	- [[programming.architecture.domain-driven-design|📝 Diseño guiado por el dominio (DDD)]]
	- [Esta](https://www.youtube.com/watch?v=HjhsY2Zuo-c) charla sobre [[Marvel Snap]]
- Pensando en como tomar y [[estructurar notas]] sobre videojuegos, me gustaría tener al menos una par de listas sobre:
	- Juegos jugados o vistos
		- Juegos con problemas de diseño