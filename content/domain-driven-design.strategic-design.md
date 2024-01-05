---
id: 1HF2HU4A8
title: 📝 Diseño estratégico (DDD)
desc: Conocimiento extraído de una fuente de recursos o producida por mi
updated: 1700926535527
created: 1699819229
tags:
  - type/📝
  - queued/note
  - stage/🌱
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

# Diseño estratégico (DDD)

> [!info] ¿Qué es el diseño estratégico? #todo
>
> Es un enfoque de diseño similar al diseño orientado a objetos, donde se trata de resolver los problemas del [[software.development.domain-concept|📝 Dominio (software)]] del negocio, pero centrándose en contextos en lugar de objetos.

> [!info] ¿Que es el contexto dentro del diseño estratégico? #todo
> Es el área delimitada donde se desarrollan un conjunto específico de conceptos, reglas y entidades relacionadas con un sistema de software.

- En el contexto de [[programming.architecture.domain-driven-design|📝 DDD]], ayuda a establecer los límites claros y responsabilidades de un [[software.development.domain-concept|📝 Dominio (software)]] particular dentro de un sistema más grande.

> [!example] Ejemplos de contextos en el diseño estragético:
> En una aplicación de e-Commerce podemos tener:
> - Contexto de compras: Encargado de gestionar el proceso de compra de los clientes.
> - Contexto de gestión de inventario: Administra el inventario de productos disponibles en el sistema.

## Términos comunes del diseño estratégico

- Además del contexto, cuando hablamos de dominio estratégico también estamos hablando de modelo de dominio, lenguaje ubicuo y contextos acotados:

> [!info] ¿Qué es un modelo de dominio?
> Es la representación conceptual de la solución al problema que presenta el [[software.development.domain-concept|📝 Dominio (software)]]. Refleja los conceptos acordados con el [[lenguaje ubicuo]] y las reglas del negocio. Puede incluir entidades, objetos de valor, servicios, eventos y otros elementos relevantes para el problema.

> [!info] ¿Qué es el lenguaje ubicuo?
> Los términos acordados entre los equipos, expertos de dominio y demás interesados para utilizar, desarrollar y/o conversar alrededor de un modelo de dominio.

- En lugar de tener funciones con nombre "CreateUser", en un contexto de productos por subscripción, tendríamos "CreateSubscription".

> [!info] ¿Que son los contextos acotados?
> Los límites acordados entre los que un modelo de dominio y su lenguaje ubicuo puede ser definido y aplicable.

- Por ejemplo, si tenemos un modelo "Ticket" para una lista de espera y otro para un servicio de cliente, con definiciones distintas, debemos separarlos en su contexto para que sean entendidos y realicen su función.

[^ref1]: [DDD - GeeksforGeeks](https://www.geeksforgeeks.org/domain-driven-design-ddd/)
[^ref2]: [Domain Driven Design: principios, beneficios y elementos — Primera Parte | by Jonathan Loscalzo | Medium](https://medium.com/@jonathanloscalzo/domain-driven-design-principios-beneficios-y-elementos-primera-parte-aad90f30aa35)
[^ref3]: [Aprende DDD en 20 minutos ⚡ | Domain-Driven Design - YouTube](https://www.youtube.com/watch?v=dH5aSQLXtKg&list=PLZVwXPbHD1KMsiA7ahRSbIwS3QMsQ0SbL&index=14&t=706s)
[^ref4]: [Ep.4 - El Modelo del Dominio, Bounded Context, Context Mapping, Entidades (DDD en Español) - YouTube](https://www.youtube.com/watch?v=TKWRzfU4Tlo&list=PLRYYxG5OI8qjgIksW6uOO16zDKD-itbiq&index=5)
[^ref5]: [DDD en Español - YouTube](https://www.youtube.com/watch?v=VdK9ARwdHYk&list=PLRYYxG5OI8qjgIksW6uOO16zDKD-itbiq&index=4)
[^ref6]: [DDD, ventajas y proceso básico](https://blog.hubspot.es/website/que-es-ddd)