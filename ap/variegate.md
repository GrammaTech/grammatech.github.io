---
layout: ap
tags: ap
title: Variegate
brief: |
    Variegate applies source-to-source transformations for binary diversification.
---

Variegate is a source-to-source software transformation tool which
takes in an original program and a test suite and produces a set of
program variants that retain functionality on the test suite while
achieving binary diversity.  Binary diversity is measured by compiling
the software variants to binary executables and then comparing the
results against the compiled binary of the original program.
Diversity is achieved by repeatedly selecting a *mutation* from a
large set of candidates and applying it to the source code of the
original program.  Mutations range from simple (e.g., `delete`) to
complex (e.g., structured software refactorings such as variable or
function inlining or extraction).  Repeated application of mutations
in a search-based algorithm that maximizes diversity can evolve a
population of functionally equivalent variants with significant
differences from the original binary and from one another

<center class="w3-text-light-grey">
  {% include ../img/variegate.svg %}
</center>

## Usage

The `variegate` executable takes a SOURCE path to a source tree and a
TEST-SCRIPT.  The second, TEST-SCRIPT, argument should take an
executable compiled from SOURCE as its only argument and should exit 0
if the executables successfully passes the regression tests.

[SEL]: {{ "/oss/sel"|url }}
[machine programming]: {{ "/ra/machine-programming"|url }}
