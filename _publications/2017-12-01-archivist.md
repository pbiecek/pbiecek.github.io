---
title: "archivist: An R Package for Managing, Recording and Restoring Data Analysis Results"
authors: "Przemyslaw Biecek, Marcin Kosiński"
collection: publications
permalink: /publication/2017-12-01-archivist
hashtags: '<font color="#00006B">#R</font> <font color="#006B00">#software</font>'
excerpt: 'This article introduces archivist, an R package that enhances reproducible research by archiving R objects along with their metadata, creation context, and relationships. It enables efficient storage, retrieval, verification, and sharing of analytical results, opening new possibilities for traceable and interactive data analysis workflows.'
date: 2017-12-01
venue: 'Journal of Statistical Software'
paperurl: 'https://www.jstatsoft.org/article/view/v082i11/0'
---

Everything that exists in R is an object (Chambers 2016). This article examines what would be possible if we kept copies of all R objects that have ever been created. Not only objects but also their properties, meta-data, relations with other objects and information about context in which they were created. We introduce archivist, an R package designed to improve the management of results of data analysis. Key functionalities of this package include: (i) management of local and remote repositories which contain R objects and their meta-data (objects' properties and relations between them); (ii) archiving R objects to repositories; (iii) sharing and retrieving objects (and their pedigree) by their unique hooks; (iv) searching for objects with specific properties or relations to other objects; (v) verification of object's identity and context of its creation. The presented archivist package extends, in a combination with packages such as knitr and the function Sweave, the reproducible research paradigm by creating new ways to retrieve and validate previously calculated objects. These new features give a variety of opportunities such as: sharing R objects within reports or articles; adding hooks to R objects in table or figure captions; interactive exploration of object repositories; caching function calls with their results; retrieving an object's pedigree (i.e., information about how the object was created); automated tracking of the performance of considered models, restoring R packages to the state in which the object was archived.

