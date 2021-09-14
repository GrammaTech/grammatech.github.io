---
layout: prj
tags: prj
title: Bug-Injector
support:
  projects:
  - BUGINJECTOR
  agencies:
  - DARPA
  contracts:
  - D16PC00103
  - D17PC00096
  - CPVI-2017-105
brief: |
    Bug-Injector injects flaws into software source code enabling the
    evaluation of cyber security tools.
---

A tool for generating cyber defense evaluation benchmarks through the
injection of vulnerable code into existing host software.
Bug-Injector is highly configurable, providing users the transparency
required of a tool used to compare commercial products and perform
security audits, and the customizability to enable focused evaluation
of specific defensive tools, host programs, domains, and vulnerability
classes.  Bug-Injector is implemented independently of leading cyber
defensive techniques, thus avoiding the potential circularity in which
technical shortcomings limit the generated benchmark used to evaluate
those very same techniques.

<center>
    <img src="{{ "/img/bi-pipeline.svg"|url }}" class="w3-padding w3-light-grey w3-round gt-smaller-on-small">
</center>

Bug-Injector can support continuous DevSecOps pipeline assurance as
shown below.  Bugs, flaws, and vulnerabilities are injected into the
source code of the software project.  This buggy code is then passed
through the DevSecOps process, including on-commit checks, the build
process, and all assurance processes including Static Application
Security Testing (SAST) and Dynamic Application Security Testing
(DAST).  At the end of this process the complete list of injected bugs
are compared against the reports from the SAST/DAST processes to
identify caught bugs, missed bugs, and any systematic blind spots in
the DevSecOps pipeline.  This process is fully automated allowing it
to be repeated regularly for *continuous* assessment of the health of
the DevSecOps pipeline. This continuous reassessment is vital as the
proper functioning SAST/DAST tools can be brittle with respect their
many parameters, ever-changing test suites, and ever-changing software
source code and environment in which small changes can have
catastrophic effects on the detection rate of SAST/DAST tools.

<center>
    <img src="/img/bi-ci-cd.svg" class="w3-padding w3-light-grey w3-round gt-smaller-on-small">
</center>

[SEL]: {{ "/prj/sel"|url }}
[machine programming]: {{ "/ra/machine-programming"|url }}
