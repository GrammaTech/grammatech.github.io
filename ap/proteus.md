---
layout: ap
tags: ap
title: Proteus
brief: |
    Automatically _find_ and _fix_ vulnerabilities in software binaries.
    Use _exploitability analysis_ to automatically prioritize software weaknesses
    and select patch templates.
---

Exploitability Analysis
=========

## About the area
Automatically _find_ and _fix_ vulnerabilities in software binaries.  Use _exploitability analysis_ to automatically prioritize software weaknesses and select patch templates.

## Benefits
- Discover root causes of crashes and corrupted data.
- Automatically discover inputs that demonstrate vulnerabilities in binaries. (Zero false positives.)
- Automatically prioritize bugs based on exploitability.
- Reduce costs and improve precision in evaluation of software security.
- Protect systems that must be deployed in hostile environments.
- Provide risk management options when insecure software must be deployed.

## Technologies
- Error amplification: Automatically instrument binaries with monitors that detect state corruption.
- Automatic input generation: Combine fuzzing and symbolic execution techniques to automatically generate inputs that demonstrate problems in the Subject Under Test (SUT).
- Channel capacity: Given an input that corrupts internal program data, estimate potential attacker control of the program.
- Binary hardening: Weave monitors into a software binary that detect attempted attacks and stop them.
- Binary patching: Select and apply "patch templates" to fix common causes of vulnerabilities and allow continued, secure execution in the face of an attack.

## Graphic

<img src="{{ "/img/Proteus-graphic.gif"|url }}" alt="Proteus Architecture Diagram" width="100%">

## Links to major tools/contracts
- Link to Proteus.
