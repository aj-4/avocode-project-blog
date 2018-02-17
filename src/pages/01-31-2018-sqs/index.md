---
path: '/aws-sqs'
title: 'SQS Queues (1.5)'
published: true
date: '2018-01-31'
---

### Amazon's SQS queue
Amazon's Simple Queue Service is fortunately just that. Simple. With a fast configuration (much faster than many of Amazon's other offerings) an AWS user can set up an account and be up and running with a reasonable amount of time.

### Simple Queues Explained
Queues are asynchronous processes than can allow for many possibilites within a system. In terms of AWS offerings, there are two distinct queues: FIFO and Simple:

- FIFO offers higher accuracy but a lower throughput.
- Simple offers maximal throughput at some risk of duplication.

By maximal throughput, the flow can be scaled to an obscene rate on a simple queue: put simply it will never be a bottleneck.

