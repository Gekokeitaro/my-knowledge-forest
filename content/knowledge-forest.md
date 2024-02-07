---
id: 1HL01JG9V
title: Bosque de conocimientos
desc: 'Conocimiento extraído de una fuente de recursos o producida por mi'
created: 2024-01-25T11:09
updated: 2024-02-07T22:08
tags:
  - type/sprout
  - queued/note
alias:
  - Bosque de conocimientos
  - bosque de conocimientos
---

```dataviewjs

const typeStruct = {
	'sprout': '🌱',
	'sapling': '🌾',
	'evergreen': '🌲',
	'fruit': '🥭',
	'signpost': '🗺️',
	'resource': '📚'
}

const typeTag = dv.current().tags.find( tag => { return tag.contains("type")})?.replace("type/","");

if(typeof typeTag !== "undefined") {

	let daysOld = timeStr(new Date() - dv.current().file.ctime);
	let lastTended = timeStr(new Date() - dv.current().file.mtime);
	dv.el("small","This " + typeStruct[typeTag] + " is " + daysOld + " old, and was tended " + lastTended + " ago.");
}

function timeStr(i) {
	let temp = i/(60*60*24*1000); // a dias
	if(temp/(12*30) >= 1) return parseFloat(temp/(12*30)).toFixed(1) + " year/s"; // a anhos 
	if(temp/30 >= 1) return parseFloat(temp/30).toFixed(1) + " month/s"; // a meses
	if(temp <= 0.1) return "a moment";
	return parseFloat(temp).toFixed(1) + " day/s";
}
```

> [!info] ¿Qué es el bosque de conocimientos?
> Es mi propio **[[sistema de gestión de conocimientos personales (PKM)]]**. Toma ideas, conceptos y herramientas del **[[Método Zettelkasten|método Zettelkasten]]** de Niklas Luhmann[^ref1], el **[[segundo cerebro]]** de Tiago Forte[^ref2], las **[[notas perennes]]** de Andy Matuschak[^ref3], los **[[jardines digitales]]**[^ref4] y diversas estrategias de aprendizaje.

- El **bosque de conocimientos** toma su nombre de los **jardines digitales**:
	- Aunque estos comparten ideas e inspiraciones con otros PKM, me gustó especialmente su **analogía entre notas y plantas**, donde el conocimiento se convierte en algo que **cuidar y nutrir** para su desarrollo y crecimiento.
	- También me gustó la idea de "crear el jardín" como tal, un espacio personal y abierto a otras personas, para que puedan **visitar (o "perderse" entre)** mis procesos mentales y desvaríos.
- La idea de llamarlo "bosque", más que una "elevación" o ánimo de diferenciarme del concepto, responde a una cuestión temática.
	- Para referenciar y hacer más "visual" o explicativo el funcionamiento de los componentes del sistema, utilizo analogías con elementos de la naturaleza y los bosques. 

> [!important] ¿De dónde nace el bosque de conocimientos?
> Principalmente de la necesidad de:
> - Obtener conocimientos o generar ideas de manera más eficiente.
> - Mantener estos conocimientos e ideas accesibles y evitar que caigan en el olvido.
> - Tener un sistema de baja fricción que me permita tomar apuntes de manera sostenible.

[^ref1]: [Getting Started • Zettelkasten Method](https://zettelkasten.de/overview/#the-introduction-to-the-zettelkasten-method)
[^ref2]: [The BASB Book](https://www.buildingasecondbrain.com/book)
[^ref3]: [Evergreen notes](https://notes.andymatuschak.org/Evergreen_notes)
[^ref4]: [A Brief History & Ethos of the Digital Garden](https://maggieappleton.com/garden-history)