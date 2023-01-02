---
layout: prj
tags: oss
title: GTIRB
link: https://github.com/grammatech/gtirb
support:
  agencies:
  - the Navy
  - the Office of Naval Research
  contracts:
  - N68335-17-C-0700
brief: |
    An intermediate representation for binary analysis and rewriting.
    GTIRB seeks to be an LLVM-IR for reverse engineering.
---

GTIRB is GrammaTech's Intermediate Representation for Binary analysis
and rewriting.  It seeks to be for binaries what LLVM is for source -
allowing researchers and developers to compose tools and leverage each
other's work. GTIRB is described in a [blog][], [whitepaper][],
[tutorial][], and in its [manual][].  

We have built an ecosystem of tools around GTIRB,
  many of them available as open source and listed in the table below. In
 brief, our disassembler [DDisasm][] generates GTIRB from binaries, while
 [GTIRB-PPrinter][] can pretty-print GTIRB as assembly or as a binary executable.
 A variety of analyses run top of GTIRB, such as [Retypd][] for binary
 type recovery. The [gtirb-rewriting][] API supports modifying GTIRB files. It
 forms the foundation for a number of transforms that harden, optimize or debloat
 binaries, such as [gtirb-stack-stamp][]  and [to-static][].
  [GTIRB-VSCode][] allows developers to work with GTIRB
 files in the VSCode IDE, while [gtirb-ghidra-plugin][] suports Ghidra integrations.

 <center>

 | Repository                       | Description                                                         |
 |----------------------------------|---------------------------------------------------------------------|
 | [GTIRB][]                        | Intermediate Representation for Binaries                            |
 | [DDisasm][]                      | Fast and accurate disassembler which produces GTIRB                 |
 | [GTIRB-PPrinter][]               | Utility that pretty prints GTIRB to assembler or a binary executable         |
 | [gtirb-functions][]              | APIs for working with functions in GTIRB files                      |
 | [gtirb-capstone][]               | Integration with the [Capstone][] decoder                           |
 | [gtirb-types][]                  | APIs for working with types in GTIRB files                          |
 | [Retypd][]                       | Binary type analysis                                                |
 | [GTIRB-ddisasm-retypd][]         | DDisasm front-end for Retypd type analysis                                        |
 | [gtirb-rewriting][]              | Python API for rewriting GTIRB files                                |
 | [gtirb-stack-stamp][]            | Hardening transform over GTIRB                                      |
 | [GTIRB-VSCode][]                 | VSCode extension to read, navigate, and (re)write GTIRB files       |
 | [gtirb-ghidra-plugin][]          | Import/Export GTIRB files to/from Ghidra                            |

 </center>


[Reduce]: {{ "/prj/binary-reduce"|url }}
[blog]: https://blogs.grammatech.com/open-source-tools-for-binary-analysis-and-rewriting
[whitepaper]: https://arxiv.org/abs/1907.02859
[manual]: https://grammatech.github.io/gtirb
[tutorial]: https://grammatech.github.io/gtirb/md_stack-stamp.html
[standard AuxData tables]: https://grammatech.github.io/gtirb/md__aux_data.html#sanctioned-auxdata-tables
[GTIRB]: {{ "https://github.com/grammatech/gtirb" }}
[DDisasm]: {{ "/prj/ddisasm"|url }}
[GTIRB-PPrinter]: https://github.com/grammatech/gtirb-pprinter
[gtirb-rewriting]: https://github.com/grammatech/gtirb-rewriting
[gtirb-functions]: https://github.com/grammatech/gtirb-functions
[gtirb-types]: https://github.com/grammatech/gtirb-types
[gtirb-ghidra-plugin]: https://github.com/grammatech/gtirb-ghidra-plugin
[gtirb-stack-stamp]: https://github.com/grammatech/gtirb-stack-stamp
[gtirb-capstone]: https://github.com/GrammaTech/gtirb-capstone
[GTIRB-VSCode]: {{ "/prj/gtirb-vscode"|url }}
[Capstone]: https://www.capstone-engine.org
[Retypd]: https://github.com/grammatech/retypd
[GTIRB-ddisasm-retypd]: https://github.com/grammatech/GTIRB-ddisasm-retypd
[GTIRB-function-prototypes]: https://github.com/grammatech/gtirb-function-prototypes
[GTIRB-dynamic-function-names]: https://github.com/grammatech/gtirb-dynamic-function-names
[to-static]: {{ "/prj/to-static"|url }}
[Byte-Equivalent Decompilation]: http://storm-country.com/blog/evo-deco
