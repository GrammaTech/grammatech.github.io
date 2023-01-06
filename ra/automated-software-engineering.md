---
layout: ra
tags: ra
title: Automated Software Engineering
image: /img/synthesis.png
slug: ase
prjs:
  - name: Bug-Injector
    slug: bug-injector
  - name: CRAM
    slug: cram
  - name: MergeResolver
    slug: merge-resolver
  - name: Mnemosyne
    slug: mnemosyne
  - name: Software Search Replace
    slug: ssr
  - name: Spec-Map
    slug: spec-map
  - name: Variegate
    slug: variegate
brief: |
    Automate aspects of software development through
    source code transformation and synthesis. Build
    tools that integrate into modern
    workflows to support collaborative, human/automated software development.
---

## About the area

In the Automated Software Engineering team, we apply the latest research
advances to create tools for source code transformation and synthesis.
We integrate them into IDEs and DevSecOps workflows to support collaborative,
human/automated software development.


## Benefits
- Source code transformation and synthesis tools help achieve *faster*
 development of *better* software via: automating mundane software development
 tasks, software hardening and diversification, cross-language migration, and
 helping stress-test DevSecOps tooling.
- Our [Mnemosyne][] framework allows every programmer to access cutting edge
research in automated software development, right in their IDE.

## Technologies
- The [Software Evolution Library][SEL] together with
[tree-sitter](https://tree-sitter.github.io/tree-sitter/)
  allows us to parse and transform source code representations from
  a variety of languages, including C/C++, Rust, Python, Java,
  JavaScript/TypeScript, and Go. We use evolutionary computation techniques
  to search the space of alternate implementations of software projects, supporting
  applications from optimization to automated program repair.
- [Mnemosyne][]'s Argot protocol allows integration of programmer assistant
tools into multiple IDEs via extensions of the [Language Server Protocol].

[Mnemosyne]: {{ "/prj/mnemosyne"|url }}
[SEL]: {{ "/prj/sel"|url }}
[Language Server Protocol]: {{ "https://microsoft.github.io/language-server-protocol/"|url }}
