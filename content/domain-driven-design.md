---
id: 1HEVRKGCC
title: 🗺 Diseño guiado por el dominio
desc: Nota para reunir los conocimientos de un determinado área
updated: 1700826780816
created: 1699728736
tags:
  - queued/area
  - type/🗺
---

<!---
```dataviewjs
let daysOld = timeStr(new Date() - dv.current().file.ctime);
let lastTended = timeStr(new Date() - dv.current().file.mtime);

function timeStr(i) {
	let temp = i/(60*60*24*1000); // a dias
	if(temp/(12*30) >= 1) return parseFloat(temp/12*30).toFixed(1) + " year/s"; // a anhos
	if(temp/30 >= 1) return parseFloat(temp/30).toFixed(1) + " month/s"; // a meses
	if(temp <= 0.1) return "a moment";
	return parseFloat(temp).toFixed(1) + " day/s";
}

dv.el("small","This 🗺 is " + daysOld + " old, and was tended " + lastTended + " ago.");
```
-->

# [[programming.architecture.domain-driven-design|📝 Diseño guiado por el dominio (DDD)]]

- Conceptos:
	- [[software.development.domain-concept|📝 Dominio (software)]]
	- [[Integración continua]]
- Herramientas de diseño:
	- [[domain-driven-design.tactical-design|📝 Diseño táctico (DDD)]]
		- [[domain-driven-design.tactical-design.aggregate|Agregados]]
		- [[domain-driven-design.tactical-design.repository|Capa de repositorio]]
		- [[domain-driven-design.tactical-design.factory|Factoría]]
		- [[domain-driven-design.tactical-design.layered-architecture|Arquitectura en capas]]
	- [[domain-driven-design.strategic-design|📝 Diseño estratégico (DDD)]]
		- Términos comunes:
			- [[Modelo de dominio]]
			- [[domain-driven-design.tactical-design.ubiquous-language|Lenguaje ubicuo]]
			- [[domain-driven-design.tactical-design.bounded-context|Contexto acotado]]

---

- [[domain-driven-design.model-driven-design|Model-Driven Design]]
- [[domain-driven-design.strategic-design.context-map]]
- [[domain-driven-design.strategic-design.big-ball-mud]]
- [[domain-driven-design.strategic-design.anticorruption-layer]]
- [[domain-driven-design.strategic-design.separate-ways]]
- [[domain-driven-design.strategic-design.open-host-service]]
	- [[domain-driven-design.strategic-design.published-language]]
- [[domain-driven-design.strategic-design.customer-supplier-team]]
- [[domain-driven-design.strategic-design.shared-kernel]]
- Diseño táctico
- [[domain-driven-design.tactical-design.service|Capa de servicio]]
- [[domain-driven-design.tactical-design.entity]]
- [[domain-driven-design.tactical-design.value-object]]
- [[domain-driven-design.tactical-design.domain-event|Evento de dominio]]