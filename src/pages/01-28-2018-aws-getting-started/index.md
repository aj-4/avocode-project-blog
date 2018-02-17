---
path: '/aws-101'
title: 'AWS EC2 Architecture (1.3)'
published: true
date: '2018-01-28'
---

### The AWS Architecture Plan
AWS ECS can essentially handle an unlimited number of requests by scaling horizontally and automatically. 100 requests per second will be the minimum requirement for this project but before scaling, a well-designed monolithic infrastructure is the way forward.

## Layers of Containers
Within an ECS architecture, there are many mirrored EC2 instances -- virtual machines running in parallel which are automatically scalable. Sounds simple enough in practice, but it goes a bit deeper. 

### Diving into Docker
Inside each of these containers there will be two Docker instances - also known as containers. Docker is allocated a percentage of CPU memory where it can run different processes in an isolated execution environment. Why is this important? Basically Docker allows a user to save a context with all its environmental variables and scripts into a replicable image that can be used and re-used in our scalable system. What is inside of each of these images? Two important things...

### Cassandra in the VPC
At the lowest level, (ECS > E2 > Docker Container) one container will own a node server which handles our requests (for booking and view events, respectively) and the other will hold a Cassandra DB. This is a one-way flow from the server to Cassandra, which will parse and format the JSON to be inserted into the DB via 'express-cassandra' ORM.

#### In Theory vs. Execution
This flow sounds simple enough, but simply registering and running an E2 instance from scratch requires extensive overhead in terms of setting up keys, security policies, and opening ports.

Connecting to the virtual machine remotely from the command line, at long last, was a glorious moment.

From there, as long as one is comfortable on the command line, the virtual machine's possibilities are the same. You can push files through the command line as well. Editing directly is an option as well, and this, for me, was a good time to get familiar with VIM.

#### AWS Freedom Has Its Limits
AWS is a behemoth that can do so many different things - luckily all with amazing documentation. Fortunate as well is AWS's free trial which lasts for a full year. 

This unfortunately does come with limitations in the form of monthly allowances. Running a single simple instance overnight will run up about 2.5% of the total allowance time. Not too bad, but that's with a single node. In short, being attuned to this allowance will be important going forward.