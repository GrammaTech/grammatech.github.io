---
layout: prj
tags: prj
title: Stack Stamp Binary Hardening
support:
  agencies:
  - the Navy
  - the Office of Naval Research
  contracts:
  - N68335-17-C-0700
brief: |
    Binary transform to apply 'stack stamp' protections to a binary.
---

Stack stamping is a binary hardening technique to help mitigate
<abbr title="Return Oriented Programming">ROP</abbr> style attacks.
It works by 'stamping' the return address on the stack, thus
encrypting it.  Before the address is popped off the stack and used, it is
decrypted by 'un-stamping' it.  This can be an efficient protection,
as no registers are needed, and while flags are affected, they are
only affected at function entry/exits where they do not need to be
preserved. Encoding and decoding the return address makes the ROP attacker's task
more difficult; to succed, the attacker would need to make sure that any replacement data is
properly encoded, so that when it is un-stamped, it results in the
desired address.

We have created a binary software transform to perform stack stamping,
based on our [GTIRB][] intermediate representation and tooling. An open-source
version of this transform is available on GitHub at
[grammatech/gtirb-stack-stamp][]; however, the open-source version is simplified and
does not include full support for the many types of exotic returns, tail-calls, and
non-contiguous functions found in many real-world binaries.

<center>
  <img src="{{ "/img/stack-stamp.svg"|url }}" class="w3-light-grey w3-padding w3-round gt-smaller-on-small">
</center>



[grammatech/gtirb-stack-stamp]: https://github.com/grammatech/gtirb-stack-stamp
[GTIRB]: {{ "/prj/gtirb"|url }}
