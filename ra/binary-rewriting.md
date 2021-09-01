---
layout: ra
tags: ra
title: Binary Rewriting
slug: rw
prjs:
  - name: Datalog Disassembler
    slug: ddisasm
  - name: GTIRB
    slug: gtirb
  - name: To Static binary transform
    slug: to-static
  - name: Stack Stamp binary transform
    slug: stack-stamp
  - name: Binary reduction
    slug: binary-reduce
brief: |
    Using high-fidelity binary ingestion, perform automated
    transformation of binary software executables and libraries to
    improve functionality, security, maintainability, and performance.
    Specific aims include software hardening, optimization,
    diversification, and attack-surface reduction.
---

## About the area
Automatic transformation of binary software executables and libraries
to improve functionality, security, and efficiency.

## Benefits
- Industry leading binary analysis and transformation built on our
  revolutionary datalog-driven reassembleable disassembler and our
  open-source binary intermediate representation.
- Binary security through hardening, diversification, and attack
  surface minimization.
- Binary efficiency through aggressive optimization.
- Binary robustness and portability through static repackaging of
  dynamic binaries.

## Technologies
- Datalog is used for compact and efficient expression of disassembly
  heuristics in our [Datalog Disassembler](https://github.com/GrammaTech/ddisasm).
- GrammaTech Intermediate Representation for Binaries
  ([GTIRB](https://github.com/GrammaTech/gtirb)) allows uniform
  representation and transformation of binaries.
- Satisfiability Modulo Theory (SMT) solvers including Quantifier Free
  Bit Vector (QFBV) logics enable efficient formal reasoning about the
  behavior of binary software.
- Dynamic programming and heuristic search techniques enable efficient
  exploration of large spaces of candidate replacement binaries.
- Low-level software instrumentation and emulation enable dynamic
  analysis of binary behavior.
