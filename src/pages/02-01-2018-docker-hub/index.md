---
path: '/docker-and-beyond'
title: 'Docker and Beyond (1.6)'
published: true
date: '2018-02-01'
---

#### Docker Hub -- A Different Kind of Image Sharing 
To mention Docker without Dockerhub is more or less unforgivable - in many ways its the core of the service and makes one very important thing possible: persistence.

Having a library of different pre-made images makes certain things incredibly easy. For example, instead of installing node manually, one can simply use a node image, then build a different image on top of it before ultimately a container.

This is done using the FROM command in an image's Dockerfile.

#### The Magic of Dockerfiles
How is an image defined? In essence, this source code is called a Dockerfile -- here the specifications of an image are laid out according to many different executable commands.

A few examples:

- FROM pulls in other Dockerfiles to build on top of
- RUN executes command line scripts
- EXPOSE sets ports to open, which can communicate to the outside world

#### Docker Cloud + Swarm
One of the things that Dockerhub allows you to do is to scale. In fact, Docker cloud and swarm are very new but are akin in spirit to Amazon CloudFormation. Docker Cloud can even connect directly with your AWS account and control your EC2 instances to auto-scale.

Interesting it almost seems like Docker is stealing some of Amazon's own thunder by controlling their service but as long as you are using EC2s Amazon definitely doesn't mind which infrastructure tool you might be using.

Keep in mind that Docker Swarm in particular is still in Beta -- that means the bugs might not all be squashed.