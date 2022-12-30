---
layout: prj
tags: prj
title: Variegate
support:
  projects:
  - Debloat
  - BUGINJECTOR
  agencies:
  - the Navy
  - the Office of Naval Research
  - DARPA
  contracts:
  - N68335-17-C-0700
  - D17PC00096
brief: |
    Variegate applies source-to-source transformations for binary diversification.
---

Variegate is a source code diversification tool. It addresses the problem of
IT monocultures, where malware attacks that succeed on one instance of a
deployed program often succeed against all instances. By diversifying the
deployed programs in a functionality-preserving way, Variegate creates a population
of correct versions of the same program with a varied attack surface.

Variegate takes in an original program and a test suite, and produces a set of
program variants that retain functionality while achieving binary diversity.
Variegate works by applying *mutations* to the source code of the original
program. Mutations range from simple (code deletions) to
complex (structured refactorings such as variable or
function inlining or extraction).

Variegate ensures that mutations do not affect the program's functionality,
by checking that the transformed program behaves correctly on the test suite.
If an extensive test suite is not available, Variegate can sill be used if it
is restricted to safe, functionality-preserving mutations, such as those that
mimic refactoring code changes.

[SEL]: {{ "/prj/sel"|url }}
[automated software engineering]: {{ "/ra/automated-software-engineering"|url }}
