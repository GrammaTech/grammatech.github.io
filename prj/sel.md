---
layout: oss
tags: oss
title: SEL
link: https://github.com/grammatech/sel
support:
  projects:
  - MUSE
  - BUGINJECTOR
  - BRASS
  - Debloat
  - IDAS
  - OPS-5G
  agencies:
  - Air Force
  - DARPA
  - Navy
  - Office of Naval Research
  contracts:
  - FA8750-16-C-0007
  - D16PC00103
  - D17PC00096
  - FA8750-15-2-0270
  - N68335-17-C-0700
  - HR001120C0159
  - FA8750-20-C-0208
brief: |
    Software Evolution Library (SEL) provides a programmatic interface
    for the parsing, analysis, and rewriting of software source code in
    *many* programming languages through a single generic API.
---

SEL uses GitHub's [tree-sitter][] generated parsers to parse dozens of
programming languages into parse trees.  These parse trees are built
using GrammaTech's [functional-trees][] applicative data structure
providing cheap copy and undo operations, efficient storage of large
populations of program variants, and fast updates.  Common Lisp's
object system [CLOS][] and [generic functions][] power a generic
programming model providing ergonomic traversal, analysis, and
rewriting of program source code.  SEL's program rewriting produces
developer-quality diffs which only change the mutated portion of the
program text, and handle indentation and the minutiae of `;`s and `,`s
for the developer.

SEL APIs are available in:
- **Common Lisp** documented in the [SEL manual][], and
- **Python** available in the `asts` package at [pypi.org/asts][]

<center class="gt-smaller-on-small">
  {% include ../img/sel-asts.svg %}
</center>


[tree-sitter]: https://tree-sitter.github.io/tree-sitter/
[functional-trees]: https://github.com/grammatech/functional-trees
[CLOS]: https://lispcookbook.github.io/cl-cookbook/clos.html
[generic functions]: https://gigamonkeys.com/book/object-reorientation-generic-functions.html
[SEL manual]: https://grammatech.github.io/sel
[pypi.org/asts]: https://pypi.org/project/asts/
