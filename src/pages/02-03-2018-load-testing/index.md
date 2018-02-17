---
path: '/load-testing-artillery'
title: 'Load Testing With Artillery (1.8)'
published: true
date: '2018-02-03'
---

### Load Testing
What is an app worth if not put under extreme conditions? 

Artillery is one such tool that can simulate an attack on one of your endpoints. Coupled with an analytics tool like New Relic (featuring a free 14 day trial) - a user can gain extremely meaningful process-based insights on a given system architecture.

#### Artillery Explained
As a completely open-source load-test software, artillery allows you to send requests to an endpoint, with parameters defined in a .yml file. 

.yml is very similar to JSON in that it simply defines nested properties with a slightly different syntax.

Artillery's getting started guide is a great place to start -- here are just a few of the things this powerful open-source tool can do:

- REST API Requests incl. Get / Post / Patch / Put + parameters
- Custom speed of requests / unique request sources
- Command - line execution and test metric responses

Consider the screenshot below

// image //

Here are artillery requests visualized into a compartmentalized graph with a separate tool, New Relic. Note: this tool is paid. 

### Testing the Essentials
When load testing a system, there are two critical metrics: throughput and latency.

Throughput is the quantity of requests per time block: requests per second (RPS) or requests per minute (RPM)