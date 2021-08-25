---
layout: ra
tags: ra
title: Machine Programming
image: /img/synthesis.png
slug: mp
prjs:
  - name: Mnemosyne
    slug: mnemosyne
  - name: Merge Resolver
    slug: merge-resolver
  - name: Variegate
    slug: variegate
  - name: Software Search Replace
    slug: ssr
  - name: GenPatcher
    slug: genpatcher
brief: |
    Combine machine-learning and genetic-programming techniques (aka
    evolutionary computation) to automate the software-development
    lifecycle through source-code synthesis, evaluation, and
    transformation.  Create environments and toolchains to augment
    developers with the most advanced developer-assist technology.
---

## About the area

Automation of software development through source code synthesis,
evaluation, and transformation.

## Benefits
- Industry leading source code transformation built on our open-source
  software evolution library.
- Providing an integrated developer's assistant leveraging formal,
  evolutionary, and statistical machine learning tools to suggest and
  check tests, types, code, and documentation for software projects.
- Tools to automate mundane software development tasks including merge
  conflict resolution and upgrading third-party dependencies.

## Technologies
- SEL leverages evolutionary computation techniques to search the
  space of alternate implementations of software projects enabling
  applications ranging from optimization to automated program repair.
- SEL is implemented in Common Lisp.  We leverage the many powerful
  features of CL from interactive programming to generic functions and
  a sophisticated object system to enable a range of activities from
  fast-paced experimentation to development and maintenance of
  polished high-performance libraries and tools.
- We leverage leading industrial front-ends for the languages SEL
  supports including [Acorn](https://github.com/acornjs/acorn) for
  JavaScript and [Clang](https://clang.llvm.org) for C/C++.  We have
  upstreamed our own code into Clang adding JSON AST export which
  drives SEL's C/C++ front-end.
