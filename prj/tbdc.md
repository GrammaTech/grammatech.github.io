---
layout: prj
tags: prj
title: TBDC
support:
  agencies:
  - the Air Force
  contracts:
  - FA8650-20-C-1106
brief: |
    TBDC is a dynamic disassembler and decompiler that lifts obfuscated binary software to assembly and source code.
---

The TBDC (Trace-Based Decompiler) is a dynamic disassembler and decompiler. It aims to lift obfuscated binary software to assembly and source code, to enable analysis and human understanding. It works by observing dynamic execution to recover instruction streams for code that is actually executed. This allows it to produce an assembly level representation that captures actual program behavior, and can then be passed to a decompiler to produce source code. 

Because of the dynamic approach used, TBDC is able to overcome several limitations of static disassembly and decompilation tools: it can accurately capture all library dependencies, it can handle features such as complex indirect control-flow, and it can observe self-modifying/packed code. This makes it particularly suited for analysis of deliberately obfuscated malware.
