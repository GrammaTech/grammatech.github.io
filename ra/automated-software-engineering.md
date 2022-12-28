---
layout: ra
tags: ra
title: Automated Software Engineering
image: /img/synthesis.png
slug: ase
prjs:
  - name: Mnemosyne
    slug: mnemosyne
  - name: CRAM
    slug: cram
  - name: Spec-Map
    slug: spec-map
  - name: Merge Resolver
    slug: merge-resolver
  - name: Variegate
    slug: variegate
  - name: Software Search Replace
    slug: ssr
  - name: GenPatcher
    slug: genpatcher
  - name: Bug-Injector
    slug: bug-injector
brief: |
    Leverage machine-learning, formal methods, and evolutionary
    computation to automate the software-development lifecycle through
    source-code synthesis, evaluation, and transformation.  Build
    automated tools that integrate into the modern software development
    environment.
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
- We leverage the [tree-sitter](https://tree-sitter.github.io/tree-sitter/)
  library to parse and transform source code representations from
  a variety of languages, including C/C++, Rust, Python, Java,
  JavaScript/TypeScript, and Go.
