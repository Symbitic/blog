---
title: Python and Machine Learning
date: '2020-02-03'
spoiler: The benefits and limitations of using Python for machine learning.
draft: true

---

As anyone who even casually follows technology and computing these days knows, Python has experienced an upsurge in interest, largely due to widespread use for machine learning. Data Scientists praise the language for being easy to learn, a large standard library and a large number of packages.

Me, I'm not at all convinced Python will remain the undisputed king of machine learning forever. 


## Drawbacks

### Python is extremely slow

I have not yet heard a single person who even bothers to dispute this. *Python is very slow*. One of the slowest modern-day scripting languages in fact.

### Cost and carbon footprint

The wasted compute cycles of Python have a very real impact. Running a python script on your laptop is nothing to be ashamed of, but with the sheer number of people (academics, big tech companies, amateur enthusiasts, etc), that has a very real impact in terms of the total amount of energy that goes to waste.

### Lack of Loyalty

This might be surprising for some.

As an example, just look to TensorFlow. Google has invested incredible amounts of their time and money to make TensorFlow a production-quality system. For large-scale deployment, TensorFlow remains the king to beat. Which makes it all the more surprising how quickly TensorFlow was abandoned by data scientists.

Now I don't mean completely abandoned. TensorFlow is still alive and well, but it has been replaced by PyTorch remarkably quickly.


## Potential Alternatives

Here are some other languages that I think might have a chance to carve out a position as real competitors to Python.

### Julia

[Julia](https://en.wikipedia.org/wiki/Julia_(programming_language)) is underappreciated tool for data science. 

### C/C++

I know what you're thinking: *C and C++ are too hard to learn; nobody is using them anymore.*

Nothing could be further from the truth. People keep predicting that this or that new technology or programming language will make C/C++ obsolete every few years. So far it hasn't happened. If anything the proliferation of embedded and edge computing, combined with the need for high-performance software, has lead to an increase in the use of C and C++.

Almost all Deep Learning frameworks like PyTorch, MXNet, and TensorFlow have the computational part written in C. There's just no way to handle the sheer volume of arithmetic operations at the speed required for training a model. So they are forced to use bindings that offload those kinds of computations to a CUDA-compatible GPU.




### JavaScript/TypeScript

