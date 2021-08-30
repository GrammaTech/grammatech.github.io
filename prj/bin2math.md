---
layout: prj
tags: prj
title: Bin2Math
brief: |
    Bin2Math uses program analysis and machine learning to extract the mathematical algorithms implemented in binary programs.
---

The goal of Bin2Math is to help subject matter experts (SMEs) in the areas of Cyber-Physical Systems (CPS) extract and understand the mathematical algorithms implemented in binary programs. Existing state-of-the-art tools for understanding binaries target fairly
low-level representations (such as assembly or decompilation to source-like listings) or are limited in scope. Bin2Math aims to address this gap by recovering natural and human-understandable mathematical representations from software. This has the potential to bring an order-of-magnitude improvement in the productivity of SMEs who seek to understand the software and/or evaluate it for reuse in a new setting.

In the CPS domain, and in particular in applications such as control systems and signal processing, it is common to rely on modeling tools that represent systems as block diagrams; each block consists of a set of mathematical equations. Bin2Math aims to recover such representations from binaries automatically. It works by using binary analysis to extract suitable intermediate representations, and machine learning (ML) to translate the intermediate representations into mathematical equations.

