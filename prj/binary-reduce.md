---
layout: prj
tags: prj
title: Binary Reduction
trl: 6
support:
  agencies:
  - the Navy
  - the Office of Naval Research
  contracts:
  - N68335-17-C-0700
brief: |
    Techniques that transform binaries to remove unused code.
---

Modern software typically includes the union of all functionality needed by
any user. This means individual users end up with more functionality—and
consequently more bugs, inefficiency, and attack surface—than they
need. A classic example are JavaScript engines in PDF readers; the majority
of users do not need them, but are still impacted by the associated increased
vulnerability to malicious scripts. This problem is amplified by
modern development practices, where developers pull in
external libraries with more functionality than required
by any one application.

Our binary reduction tools automatically rewrite binary
executables and libraries to strip out unused
functionality, as well as enabling users to selectively
remove features. This improves efficiency and reduces attack
surface. We describe two of our binary software reduction
techniques below.

### Conservative CFG-based Reduction

This binary rewriting software transformation takes as input a COTS binary
executable and a set of entry points, and rewrites the
executable to remove all code not transitively reachable from the given
set of entry points. We calculate reachability by following the control flow
graph of the binary and identifying symbolic references. This is
particularly useful for reducing library code; libraries often include much
more functionality than what is needed for any particular application.

<center class="w3-text-dark-grey gt-smaller-on-small">
  {% include '../img/cfg-reduce.svg' %}
</center>

### Aggressive Test-based Reduction

This binary rewriting software transformation
takes as input a COTS binary executable and a test suite, and rewrites the
executable to remove all code which is not required to continue to
pass the test suite. The search for a minimal subset of the code
required to retain test-suite functionality is performed quickly and
deterministically using delta-debugging. This is a speculative
transformation which can achieve very significant reduction in
program size but will likely break untested program behavior.

<center class="w3-text-dark-grey gt-smaller-on-small">
  <div class="w3-light-grey w3-round" style="width:228.70804pt">
    {% include '../img/test-reduce.svg' %}
  </div>
</center>
