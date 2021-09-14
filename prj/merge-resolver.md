---
layout: prj
tags: prj
title: Merge Resolver
support:
  projects:
  - BUGINJECTOR
  - IDAS
  agencies:
  - Air Force
  - DARPA
  contracts:
  - D16PC00103
  - D17PC00096
  - FA8750-20-C-0208
brief: |
    MergeResolver is a new GitHub app that automates resolving merge conflicts
    — but leaves developers in control.
---

<center>

Available at [https://mergeresolver.github.io][].

</center>

MergeResolver parses source code into abstract syntax trees (ASTs)
using GrammaTech's [SEL][].  It then performs a custom tree-based
difference over these trees which is tailored for good performance
over source code.  In some cases simply differencing at the tree level
is sufficient to resolve merge conflicts.  When conflicts remain
MergeResolver searches the space of possible conflict resolutions
until it finds a resolution which passes the program's test suite.

MergeResolver continues GrammaTech's [machine programming][] mission
to free developers from the tedious and automatable work of
professional software development.

[https://mergeresolver.github.io]: https://mergeresolver.github.io
[SEL]: {{ "/prj/sel"|url }}
[machine programming]: {{ "/ra/machine-programming"|url }}
