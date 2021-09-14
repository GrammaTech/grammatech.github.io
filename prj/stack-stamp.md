---
layout: prj
tags: prj
title: Stack Stamp binary hardening
support:
  agencies:
  - Office of Naval Research
  contracts:
  - N68335-17-C-0700
brief: |
    Binary transform to apply 'stack stamp' protections to a binary.
---

Stack stamping is a technique to help mitigate
<abbr title="Return Oriented Programming">ROP</abbr> style attacks.
This is done by 'stamping' the return address on the stack, thus
encrypting it.  Before it is popped off the stack and used, it is
decrypted by 'un-stamping' it.  This can be an efficient protection,
as no registers are needed, and while flags are affected, they are
only affected at function entry/exits where they do not need to be
preserved.  By encoding and decoding this return address, an attacker
has a more difficult task, since the replacement data would need to be
properly encoded, such that when it is un-stamped, it results in the
desired address.

<center>
  <img src="{{ "/img/stack-stamp.svg"|url }}" class="w3-light-grey w3-padding w3-round gt-smaller-on-small">
</center>
