---
layout: prj
tags: prj
title: CRAM
support:
  agencies:
  - DARPA
  contracts:
  - HR001122C0025
brief: |
    Semi-automatically migrate well-designed, general-purpose C++ code
    into the Rust programming language.
---

The goal of GrammaTech's "C++ to Rust Assisted Migration" ("CRAM")
project is to semi-automatically migrate well-designed,
general-purpose C++ code into the Rust programming language. The
motivation is to benefit from Rust's safe programming abstractions,
especially its memory access interface, enforced via an elaborate
ownership model. The end-goal is to reduce program crashes, hangs, and
security vulnerabilities caused by low-level memory management
performed by the programmer, a common risk associated with legacy
languages. The migrated source code will be human-readable and ready
for further development in Rust.

Our philosophy is that Rust's programming abstractions merely enforce
what a safety-conscious C++ programmer should be doing anyway, even if
the C++ language does not require it. Our migration therefore first
refactors the given C++ program to a new C++ program, attempting to
enforce many of the Rust programming abstractions at the C++
level. This prepares and facilitates, possibly even enables, the
actual translation into Rust. Our migration then continues by
identifying computational patterns in the C++ program and translating them
into Rust code templates, supported by a library for code pattern
translation.

<center class="gt-smaller-on-small">
  {% include ../img/cram.svg %}
</center>


## Demo

The following video demonstrates the usage of CRAM to refactor a C++
code base towards a Rust implementation of the same program, and then
ultimately translate the refactored C++ to an idiomatic Rust
implementation.  Note this is a rough demo video of tooling that is
still very much a work in progress.

<center>
<div class="w3-hide-medium w3-hide-large">
<video width=300px height=187px playsinline controls muted>
<source src="https://download.grammatech.com/research/lilac-rough-demo.mp4#t=0.01" type="video/mp4">
</video>
</div>
<div class="w3-hide-small">
<video width=800px height=500px playsinline controls muted>
<source src="https://download.grammatech.com/research/lilac-rough-demo.mp4#t=0.01" type="video/mp4">
</video>
</div>
</center>

[Mnemosyne]: {{ "/prj/mnemosyne"|url }}
[machine programming]: {{ "/ra/machine-programming"|url }}
