---
layout: ap
tags: ap
title: Bindle
brief: |
    Automatic harness generation and seed-input collection to eliminate the need
    for reverse engineering and domain knowledge in dynamic testing of software
    binaries.
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
