Reduce
======

TRL: 4

Reduce a binary executable through either explicit or search-based
basic block removal.

![Feature-reduce signature graphic.](.feature-reduce.svg)

## Abstract
Reduce is a binary rewriting software transformation that takes a COTS
binary executable and the executable to remove unwanted code and data.
The code and data to be removed may be specified in two ways.  First,
an explicit list of blocks to remove can be provided.  Second, a
dynamic test of the binary may be provided and as many blocks as
possible will be removed while retaining functionality against the
provided test.  After removal of unwanted code and data the control
flow is re-routed around removed code blocks, and the resulting binary
image is compacted.  This can be useful when software includes
undesirable or unused features, especially when those features have a
negative impact on software performance or security.
