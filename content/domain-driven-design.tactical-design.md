---
id: 1HF2I0VH1
title: 📝 Diseño táctico (DDD)
desc: Conocimiento extraído de una fuente de recursos o producida por mi
updated: 1700582422020
created: 1699819322
tags: type/📝,queued/note,stage/🌱
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

# Diseño táctico (DDD)

>[!info] ¿Qué es el diseño táctico?
> Este enfoque trata sobre los detalles de implementación del [[modelo de dominio]]. Por lo general se encarga de los componentes dentro de un [[contexto acotado]]. Tiene lugar durante la fase de desarrollo.

## Herramientas de diseño táctico.

> [!info] ¿Qué herramientas existen dentro del diseño táctico para crear y modificar modelos de dominio?
> - **Entidades**: Objetos que tienen identidad, normalmente un GUID, UUID o ID.
> - **Objetos de valor**: Objetos sin identidad que describen ciertos aspectos del dominio, como medidas, cantidad, dinero...
> - **Servicios**:
> - **Agregados**:
> - **Factorías**:
> - **Repositorios**:

[^ref1]: [Domain Driven Design: principios, beneficios y elementos — Segunda Parte | by Jonathan Loscalzo | Medium](https://medium.com/@jonathanloscalzo/domain-driven-design-principios-beneficios-y-elementos-segunda-parte-337d77dc8566)