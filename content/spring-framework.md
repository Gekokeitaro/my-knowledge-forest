---
id: 1H9LN6RHS
title: 🗺 Spring Framework
desc: Nota para reunir los conocimientos de un determinado área
updated: 1700582421987
created: 1694019841
tags:
  - queued/area
  - type/🗺
---

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

# [[java.web.spring-framework|📝 Spring Framework]]

## Principios de Spring Framework

- [[DI)](../Private/50_Archive/Patrón de inyección de dependencias (DI|Patrón de inyección de dependencias (DI)]].md) a través de un contenedor que hace una implementación del [[IoC)](../Private/50_Archive/Principio de Inversión de control (IoC|principio de inversión de control (IoC)]].md)
	- Este contenedor es responsable de **crear y gestionar** las instancias de los **JavaBeans**, y el **ApplicationContext**, que da una **visión unificada** de la configuración de toda la aplicación.
- [[../Private/50_Archive/Programación orientada a aspectos (AOP|Programación orientada a aspectos]].md)

## Módulos

- [[java.web.spring.core-module|Spring Core]]. Proporciona la funcionalidad del contenedor de [[IoC)](../Private/50_Archive/Principio de Inversión de control (IoC|inversión de control (IoC)]].md) e [[DI)](../Private/50_Archive/Patrón de inyección de dependencias (DI|inyección de dependencias (DI)]].md), así como la configuración y administración de los objetos de la aplicación. Además, incluye características como la internacionalización (i18n), validación y programación basada en anotaciones.
- [[MVC)](spring-framework.module.spring-web-mvc.md|📝 Spring Web (MVC)]]. Provee de la infraestructura [[../Private/programming.architecture.model-view-controller.md|MVC]] para el desarrollo de aplicaciones web. Incluye soporte para [[spring-framework.module.spring-web-mvc#Anotaciones|anotaciones]], manejo de errores, validación y más.

## Proyectos

- [[spring-framework.module.boot|Spring Boot]]
- [[Spring Cloud]]
- [[Spring Cloud Data Flow]]
- [[spring data|Spring Data]]
- [[java.spring.integration|Spring Integration]]
- [[Spring Batch]]
- [[../Private/50_Archive/Spring Security.md|Spring Security]]