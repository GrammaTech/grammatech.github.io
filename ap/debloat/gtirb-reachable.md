GTIRB Reachable
===============

TRL: 6

Identify code in GTIRB which is transitively reachable from a set of entry
points.

![GTIRB Reachable signature graphic.](.gtirb-reachable.svg)

## Abstract

GTIRB Reachable is a library to assist in a binary rewriting software transformation
which takes a COTS binary executable and a set of entry points and rewrites the
executable to remove all code which is not transitively reachable from the given
set of entry points.  Reachability is calculated by following the control flow
graph of the binary and identifying symbolic references.  This may be
particularly useful when reducing library code as libraries often include much
more functionality than what is needed for any particular application.

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
