---
layout: ra
tags: ra
title: Platform Security
slug: ps
prjs:
  - name: TFPGA
    slug: tfpga
brief: |
    Ensure trust in the computing platform, including hardware and
    virtualization layers, from design through deployment.  Assess
    risk due to use of untrusted supply chains of FPGA and ASIC
    devices.
---

## About
Our platform security technologies provide trust in the computing platform upon which software is executed. 
This is organized into two main areas:

- Hardware Assurance
- Securing Physical & Virtual Computing Platforms


## Benefits
- Ensure security cannot be compromised from beneath the software
- Verify platform trust during design or at deployment
- Detect vulnerability in unknown/undocumented 3rd Party IP Designs
	- Extract higher-level design understanding
- Identify the location of Trojan circuits within digital designs
- Automate development of FPGA designs to test all FPGA resources
	- Enumerate & Grade each resource to get coverage metrics
- Enable advanced FPGA design techniques:
	- Precisely controlled, relocatable macros
	- Automatically generated/graded test-suites
	- Device Characterization

## Technologies
### Hardware Assurance
GrammaTech is researching and developing methods to secure FPGA/ASIC devices against both post-manufacturing modification of the silicon and vulnerabilities in the design itself. This, combined with reverse engineering techniques, enables trust verification at deployment.

- Vulnerability Identification in ASIC/FPGA netlists
- Detection of FPGA silicon modification (i.e., Trojan Insertion)
- FPGA reverse engineering
- FPGA testing & test-suite grading 
- Precise FPGA design
	- custom placement/ routing constraints
	- custom full/partial route procedures
	- resource targeted routing
- Custom FPGA Tool Design Capabilities

### Securing Physical & Virtual Computing Platforms
For us, everything beneath the operating systems is part of the platform. This includes any firmware, hypervisor, and hardware technologies that must be trusted in the underlying hardware. GrammaTech has experience with developing hardware security techniques used for isolation and trusted execution.

- Virtual Trusted Platform Modules (VTPM)
- Hypervisor hardening techniques
- Bare-metal software monitoring

## Projects

- FVA Vulnerability Analysis Tools (NAVY STTR - Phase II)
- Trusted FPGA (Air Force SBIR - Phase II)
- Virtual TPM (prior Air Force SBIR - Phase II)
- Prior projects include:
 	- FPGA PUF design
 	- kernel monitoring
 	- hypervisor hardening
