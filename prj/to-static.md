---
layout: prj
tags: prj
title: To Static Binary Consolidation
trl: 4
support:
  agencies:
  - the Navy
  - the Office of Naval Research
  contracts:
  - N68335-17-C-0700
brief: |
    Binary transform that rewrites a binary executable and all dynamic libraries into
    a single statically linked executable.
---

Installing software with dynamic libraries can be a
complicated task, sometimes leading to cascading issues on the host
system, conflicts with existing libraries, and surprising bugs due to
particulars of the versions of the libraries on the host system
(i.e. "DLL Hell").  

To-static is a binary rewriting software transformation that takes a
COTS binary executable along with the dynamic libraries it would load
at runtime, and consolidates them all into a single statically linked
binary executable. This is useful in cases where the
equivalent statically linked executable cannot be built from source:
for example, because the original source code or build system are
unavailable, or are available but cannot be modified to accommodate
static linking. To-static allows a system to be developed using dynamic
libraries (easier development; faster
and simpler builds) but deployed as a single self-contained statically
linked executable--without requiring alterations (or access) to the
software source or build system for the core package or any libraries.

To-static provides all the benefits of
static linking---simplified distribution, reduced runtime
requirements, streamlined cross-library function calls---while
ensuring that any subsequent binary transformations---e.g., control
flow integrity (CFI), hardening, debloating, optimization---will
automatically apply to library code as well as to the main executable
code.

An example application of to-static to the curl utility is illustrated below.

<center>
    <img src="{{ "/img/to-static.svg"|url }}" class="w3-light-grey gt-smaller-on-small w3-padding w3-round">
</center>
