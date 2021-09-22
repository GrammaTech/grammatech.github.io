---
layout: prj
tags: [prj, gtirb-proprietary]
title: Binary Reduction
trl: 6
support:
  agencies:
  - the Navy
  - the Office of Naval Research
  contracts:
  - N68335-17-C-0700
brief: |
    Remove unused code from a binary.  Both conservative and aggressive options are provided.
---

GrammaTech provides two methods of binary software reduction.  Both
remove unused code from a binary executable improving efficiency and
reducing attack surface.

## Conservative CFG-based Reduction

GTIRB Reachable is a library to assist in a binary rewriting software transformation
which takes a COTS binary executable and a set of entry points and rewrites the
executable to remove all code which is not transitively reachable from the given
set of entry points.  Reachability is calculated by following the control flow
graph of the binary and identifying symbolic references.  This may be
particularly useful when reducing library code as libraries often include much
more functionality than what is needed for any particular application.

<center class="w3-text-dark-grey gt-smaller-on-small">
  {% include ../img/cfg-reduce.svg %}
</center>

## Aggressive Test-base Reduction

Search-reduce is a binary rewriting software transformation which
takes a COTS binary executable and a test suite and rewrites the
executable to remove all code which is not required to continue to
pass the test suite.  The search for a the minimal subset of the code
required to retain test-suite functionality is performed quickly and
deterministically using delta-debugging.  First the minimum set of
required functions is found, then the minimum set of basic blocks
within each of these functions is found.  This is a speculative
transformation which is able to achieve very significant reduction in
program size but will likely break untested program behavior.

<center class="w3-text-dark-grey gt-smaller-on-small">
  <div class="w3-light-grey w3-round" style="width:228.70804pt">
    {% include ../img/test-reduce.svg %}
  </div>
</center>

## Use Cases

### Automated Debloating
Software typically includes the union of all functionality needed by
any user.  So any given users ends up with more functionality—and
consequently more bugs, inefficiency, and attack surface—than they
need.  (A classic example is JavaScript engines in PDF readers; most
people never need it, but everyone pays for it in terms of
vulnerability to malicious scripts.) This problem is multiplied by
modern development practices which encourage developers to pull in
external libraries which provide much more functionality than required
by any one application.

GrammaTech provides tools for automatically rewriting binary
executables and libraries to (1) combine multiple binaries into a
single executable which is easily deployed, (2) stripping all unused
functionality from binaries, and (3) enabling users to selectively
remove features from binaries.

