---
layout: ra
tags: ra
title: Platform Security
slug: ps
prjs:
  - name: FVA
    slug: fva
  - name: TFPGA
    slug: tfpga
brief: |
    Ensure trust in the computing platform, including hardware, from design through deployment. Assess
    risk due to use of untrusted supply chains of FPGA and ASIC
    devices.
---

## About
Our platform security technologies provide trust in the computing platform upon which software is executed. Our current projects, [FVA][] and [TFPGA][], focus on hardware assurance. We have also worked on securing physical and virtual computing platforms, including Virtual Trusted Platform Modules and FPGA PUF design.

## Benefits
- Extract higher-level design understanding from third-party FPGAs
- Detect Trojans and other vulnerabilities in unknown/undocumented third-party FPGA designs
- Automate development of FPGA designs to test all FPGA resources; enumerate and grade each resource to obtain coverage metrics
- Enable advanced FPGA design techniques, such as precisely controlled, relocatable macros, automatically generated and graded test suites, and device characterization

## Technologies

- FPGA reverse engineering allows deriving netlists and higher-level intermediate representations from devices
- FPGA testing and test suite grading allows accurate detection of anomalies and potential vulnerabilities


[FVA]: {{ "/prj/fva"|url }}
[TFPGA]: {{ "/prj/tfpga"|url }}
