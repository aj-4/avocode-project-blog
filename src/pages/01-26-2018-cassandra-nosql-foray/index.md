---
path: '/cassandra-101'
title: 'Intro to Cassandra (1.2)'
published: true
date: '2018-01-27'
---

### What Does Cassandra Do, Exactly?
Chances are, if you're reading this, you understand the basics of databases. At the highest level, there are two types: noSQL and SQL -- or document-model and relational structures, respectively. 

Cassandra claims to be the industry standard for noSQL at scale and is incredibly robust due to a multiplicative clustering system -- where its databases auto-scale and sync to handle larger loads.

This has led to wide adoption in the industry by everyone from Facebook to Twitter to Reddit. A fun fact: the largest Cassandra cluster in production has over 100TB of data.

Essentially, the coupling of Cassandra's fast write speed with its scalability made it a natural choice for the system design project.

### Cassandra's Quirks
Cassandra, although a noSQL database, operates a bit differently than SQL and mongoDB. In fact there is one quirk about it that puts Cassandra in a strange grey area between these classifications: its query language. 

Aptly named CQL, Cassandra's query language resembles SQL almost identically -- if you are an SQL user this might put you at ease.

If you prefer a more SQL-like ORM with models and nstance insertion, the npm module 'express-cassandra' is a great tool and for this project it will be the tool of choice.

### The Hard Parts
So how does this clustering work? Essentially, duplicates are spun up automatically by Cassandra by configuration of the number of nodes, and replication factor. It's a formula that allows the user to spread data horizontally. The challenge is to keep each node synchronized by emitting from and receiving to certain ports. Cassandra by default reserves port 9407 and a few others.

### Deployment on AWS
Inevitably, all real, scalable web apps must be deployed in some shape or form. One completely feasible way to do this is via Docker and Amazon S2 -- more of those to come.