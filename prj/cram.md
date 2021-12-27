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
identifying computational patterns in the C++ program and migrate them
into Rust code templates, supported by a library for code pattern
migration.

<center class="w3-text-dark-grey gt-smaller-on-small">
  <div class="w3-light-grey w3-round" style="width:400pt;padding:0.5em;">
    {% include ../img/cram.svg %}
  </div>
</center>


[Mnemosyne]: {{ "/prj/mnemosyne"|url }}
[machine programming]: {{ "/ra/machine-programming"|url }}
