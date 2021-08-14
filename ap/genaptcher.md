---
layout: ap
tags: ap
title: GenPatcher
brief: |
    GenPatcher is a tool for automated software repair.
---

GenPatcher uses a suite of automatic program modifications to modify a
program so that it passes a provided test suite which the original
program could not pass.  GenPatcher uses this automatic modifications
to build a population of program variants, an iterative search process
mimicking natural selection improves this population until a version
of the program is found which passes all tests in the test suite.
Automated program repair done in this manner has been show able to fix
a wide range of real-world bugs, and is currently used in production
by large software companies.

<center class="w3-text-light-grey">
  {% include ../img/genpatcher.svg %}
</center>

## Use Cases

### Automated repair in development
Bugs are frequently introduced during software development as new code
is written and existing code is modified.  Regular testing in a CI
system identifies new bugs.  GenPatcher may be introduced into a CI
system to automatically identify and suggest fixes to new bugs.  In
many cases GenPatcher will find a fix *before* a developer receives
the original bug report.  In these cases the proposed patch may
accompany the bug report saving significant developer time.

### Automated repair in the field
Often bugs are discovered in the field by users or by automatic system
monitoring systems.  GenPatcher may be used to quickly and
automatically patch bugs ensuring continuity of service until a
software developer is available to review the bug and validate the
automated fix or manually develop a complete fix.  In many cases even
a partial patch which has not received developer review is preferable
to an un-patched critical bug.


[SEL]: {{ "/oss/sel"|url }}
[machine programming]: {{ "/ra/machine-programming"|url }}
