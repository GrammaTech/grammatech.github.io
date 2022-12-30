---
layout: prj
tags: prj
title: Bug-Injector
support:
  projects:
  - BUGINJECTOR
  - STAMP
  agencies:
  - DARPA
  - DHS
  contracts:
  - D16PC00103
  - D17PC00096
  - HHSP233201600062C
  - 70RSAT19C00000056
brief: |
    Bug-Injector injects flaws into software source code to generate benchmarks
    for evaluating cyber security tools.
---

<center>

Read more about Bug-Injector in our [2019 publication][bi-publication].

</center>

Bug-Injector generates test cases to stress-test cyber defense tools. It works
by injecting known *bug templates* into *real-world code*, and seamlessly
weaving the bug into the surrounding code. Bug-Injector can be used to generate,
on demand, test cases for a particular type of bug in a particular host program.
Every test case comes with a *witness* - an input that allows the injected bug
to manifest.

<center>
    <img src="{{ "/img/bi-pipeline.svg"|url }}" class="w3-padding w3-light-grey w3-round gt-smaller-on-small">
</center>

In contrast with cyber defense benchmarks created through other means,
Bug-Injector test cases are realistic, come with ground truth and a triggering
input for each bug, and can be generated on demand in large quantities. They
are also not biased towards or against any specific bug finding techniques.


Bug-Injector can support continuous software assurance by assuring
the quality of DevSecOps pipelines, as
shown below.

<center>
    <img src="/img/bi-ci-cd.svg" class="w3-padding w3-light-grey w3-round gt-smaller-on-small">
</center>

Engineers use Bug-Injector to add bugs, flaws, and vulnerabilities into the
source code of the software project. The buggy code passes through
 the DevSecOps process, including on-commit checks, the build
process, and all assurance processes including Static and Dynamic Application
Security Testing.  At the end, engineers compare the list
of injected bugs against testing reports to identify caught bugs, missed bugs,
and any blind spots in the DevSecOps pipeline. This process is fully automated,
allowing it to be repeated regularly for *continuous* assessment of the health of
the DevSecOps pipeline as it undergoes updates and reconfigurations.


[SEL]: {{ "/prj/sel"|url }}
[automated software engineering]: {{ "/ra/automated-software-engineering"|url }}
[bi-publication]: {{ "https://ieeexplore.ieee.org/document/8930839" | url}}
