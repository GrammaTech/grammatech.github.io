---
layout: prj
tags: prj
title: FVA
support:
  agencies:
  - the Navy
  - the Office of Naval Research
  contracts:
  - N68335-19-C-0307
  - N68335-20-C-0569
brief: |
    FVA (FPGA Vulnerability Analysis) is a tool that reverse-engineers and detects vulnerabilities in FPGA designs.
---

FVA (FPGA Vulnerability Analysis) is a tool that detects vulnerabilities in FPGA designs. It can be used to provide security vetting of digital designs prior to deployment, as well as enable trust in FPGA leveraging of third-party IP.

FVA's vulnerability detection workflow proceeds as follows:
* First, it reverse-engineers functional FPGA designs (netlists) by inspecting the configuration bits and/or through in-situ monitoring.
* Next, given a reverse-engineered netlist, it lifts the netlist to an intermediate representation (IR) that captures higher-level, human- and machine-readable information about the design.
* Finally, it runs multiple analyses over the IR to detect vulnerabilities in the hardware design and in particular identify hardware Trojans. These analyses produce metric indicators of Trojan location and probability.


