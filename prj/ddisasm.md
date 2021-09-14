---
layout: oss
tags: oss
title: DDisasm
support:
  agencies:
  - Office of Naval Research
  contracts:
  - N68335-17-C-0700
brief: |
    A fast and accurate disassembler.  DDisasm is able to disassemble
    real-world stripped binaries with accuracy sufficient to enable modification
    and reassembly.
---

DDisasm is a *fast* disassembler which is *accurate* enough for the
resulting assembly code to be reassembled.  DDisasm is implemented
using the datalog ([souffle](https://github.com/souffle-lang/souffle))
declarative logic programming language to compile disassembly rules
and heuristics.  The disassembler first parses ELF file information
and decodes a superset of possible instructions to create an initial
set of datalog facts.  These facts are analyzed to identify *code
location*, *symbolization*, and *function boundaries*.  The results of
this analysis, a refined set of datalog facts, are then translated to
the [GTIRB](https://github.com/grammatech/gtirb) intermediate
representation for binary analysis and reverse engineering.  The
[GTIRB pretty printer](https://github.com/grammatech/gtirb-pprinter)
may then be used to pretty print the GTIRB to reassemblable assembly
code.

View the repository at [github.com/grammatech/ddisasm][] or read the
USENIX paper "[Datalog Disassembly][]", a distinguished paper award
winner, for more information.

[github.com/grammatech/ddisasm]: https://github.com/grammatech/ddisasm
[Datalog Disassembly]: https://www.usenix.org/conference/usenixsecurity20/presentation/flores-montoya

Use the [grammatech/ddisasm](https://hub.docker.com/r/grammatech/ddisasm)
Docker image to try out `ddisasm` quickly.
