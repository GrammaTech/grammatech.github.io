---
layout: prj
tags: prj
title: Test-based binary reduction
trl: 6
brief: |
    Remove all code in a binary not executed by a test suite.
---

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
