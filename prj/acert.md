---
layout: prj
tags: prj
title: A-CERT
brief: |
    A-CERT is a solution to automate evidence generation when certifying software for use in high-assurance systems.
---

A-CERT (Advancing Certification Evidence Rigor and Traceability) is a solution to automate the process of evidence generation when certifying software for use in high-assurance systems. Current certification processes rely on human-driven mechanisms for evidence generation. As the size and complexity of systems increases, the cost of producing and tracing evidence for certification outpaces the cost of development. Moreover, reuse of legacy and third-party software is hindered due to reliance on source code in order to generate certification evidence. Automated means to produce high-confidence evidence on the built, binary software could greatly reduce certification costs as well as enable cost savings through greater reuse.

A-CERT uses cutting-edge technologies to achieve several key automation goals:
* Natural Language Processing, to automate the generation of requirements-based testing scenarios from natural language requirements.
* Our [REAFFIRM][] tool, to support white-box testing of binaries without the original source and/or build chain.
* Binary analysis and instrumentation, to establish a reliable metric for test suite effectivness in binary-only workflows, instead of traditional source-based coverage criteria (e.g., [MC/DC](https://shemesh.larc.nasa.gov/fm/papers/Hayhurst-2001-tm210876-MCDC.pdf))
* Fuzzing and other techniques, to automate the generation of test cases that improve a test suite’s effectiveness.

[REAFFIRM]: {{ "/prj/reaffirm"|url }}
