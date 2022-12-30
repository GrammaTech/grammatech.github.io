---
layout: prj
tags: prj
title: MergeResolver
support:
  projects:
  - BUGINJECTOR
  - IDAS
  agencies:
  - the Air Force
  - DARPA
  contracts:
  - D16PC00103
  - D17PC00096
  - FA8750-20-C-0208
brief: |
    MergeResolver automates resolving merge conflicts in a syntax- and
    semantics-aware way.
---

<center>

Available at [https://mergeresolver.github.io][].

</center>

MergeResolver is a tool to automate the resolution of merge conflicts that arise
during development. It is a sophisticated tool that is aware of the
code's syntax and semantics. This allows automated conflict resolution in cases
where simple text-based differencing would fail.

MergeResolver works by parsing the source code into abstract syntax trees (ASTs)
using GrammaTech's [SEL][]. It then computes a custom tree-based
difference over these trees, tailored for good performance
over source code. The developer can view the result in an intuitive
and standard workflow, such as via the GitHub Checks API.

In some cases, this approach is not sufficient to resolve merge conflicts. In
this case, optionally,  MergeResolver can search the space of possible
conflict resolutions until it finds one that passes the program's test suite.
It can present this resolution to a developer for review and further modification.

[https://mergeresolver.github.io]: https://mergeresolver.github.io
[SEL]: {{ "/prj/sel"|url }}
[automated software engineering]: {{ "/ra/automated-software-engineering"|url }}
