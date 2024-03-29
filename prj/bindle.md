---
layout: prj
tags: ap
title: Bindle
support:
  projects:
  - DIU
  - HACCS
  agencies:
  - the Air Force
  - Army
  - DIU
  - DARPA
  contracts:
  - W15QKN-18-9-1013
  - HR0011-18-C-0061
brief: |
    Bindle enables automatic fuzzing harness generation and seed-input collection. This
    makes dynamic testing of software binaries more accessible, by reducing the need
    for reverse engineering and domain knowledge.
---

Dynamic testing, such as fuzzing, of software requires the development of an
application-specific _harness_ to provide inputs on all the input channels
expected by the software.  Today's state-of-the-art _mutational_ fuzzing is also
much more effective when it starts with sample, or _seed_, inputs that exercise
some of the software's behavior.

Collecting good seed inputs requires an in-depth understanding of the
application, while writing harnesses requires reverse-engineering and
software-development expertise.  Bindle eliminates these barriers, making
dynamic testing much easier and faster to deploy.  The tool's initial focus is
on Linux applications.

## Approach

Bindle collects seed inputs and generates harnesses automatically by learning
from the tester simply running the software, as follows:

- Record
    - Observe execution - monitor the execution of the software, whether it is
      run manually or using a test script
    - Record inputs - observe the software's input channels, such as files,
      network sockets, and command line; collect observed input as candidate
      seed inputs
- Create
    - Generate a harness and seed inputs - suggest input channels for mutation
      and effective seed inputs to be reviewed by the tester
    - Aggregate inputs - combine seed inputs on all channels for mutation by
      fuzzer
- Run
    - Install harness - start the software with Bindle run-time interceding
      between the fuzzer and the software
    - _Demultiplex_ inputs - separate the fuzzer's mutated input into component
      inputs on the software's input channels; supply data on demand.

## Demo
The following video demonstrates the usage of Bindle to harness an
application for fuzz testing.

<center>
<div class="w3-hide-medium w3-hide-large">
<video width=300px height=187px playsinline controls muted>
<source src="https://static.grammatech.com/research/bindle-demo.mp4#t=0.01" type="video/mp4">
</video>
</div>
<div class="w3-hide-small">
<video width=800px height=500px playsinline controls muted>
<source src="https://static.grammatech.com/research/bindle-demo.mp4#t=0.01" type="video/mp4">
</video>
</div>
</center>
