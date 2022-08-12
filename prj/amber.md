---
layout: prj
tags: prj
title: AMBER
support:
  projects:
  - SCAN
  - WARP Ph 1
  - WARP Ph 2
  agencies:
  - DLA
  - the Air Force
  contracts:
  - SP4701-21-P-0010
  - FA9453-16-M-0464
  - FA9453-17-C-0489
brief: |
    AMBER is a solution to harden IoT devices against cyber attacks, including runtime monitoring and attack mitigation, blockchain-based security event logging, and a Reasoning Engine for offline diagnostics and mitigations.
---

AMBER (Autonomic Monitoring and Mitigation with Blockchain-Enabled Reporting) is a solution to harden Internet of Things (IoT) devices against cyber attacks. AMBER provides end-to-end protections, relying on:
* a framework for semiautomatically generating runtime verification policies and attack mitigation techniques
* functionality for installing the policies and mitigation techniques on IoT devices through binary instrumentation
* a distributed, blockchain-based logging framework to encode and report perceived attacks across devices, supporting
 secure, redundant real-time reporting as well as forensic playback
* a Reasoning Engine server software application and tools. These perform secondary, offline forensic and remediation efforts to mitigate future attacks, as well as reporting suspected attacks to system administrators and analysts.

AMBER works by identifying expected (correct) device-specific behavior and reporting deviations. Unlike many state-of-the-art techniques that only attempt to identify previously-seen attacks, AMBER's approach allows protecting against both *known* and *unknown* attacks. AMBER provides comprehensive and persistent cyber protection for devices and software, without interfering with the ability to carry out mission-essential functions.

The video below is a presentation of Tiffin and mgen, core technologies underlying AMBER and other GrammaTech autonomic projects. The presentation was originally given at the [HCSS](https://cps-vo.org/group/hcss_conference) 2022 conference.

<center>
<div class="w3-hide-medium w3-hide-large">
<video width=300px height=187px playsinline controls muted>
<source src="https://static.grammatech.com/research/tiffin-hcss-2022.mp4#t=0.01" type="video/mp4">
</video>
</div>
<div class="w3-hide-small">
<video width=800px height=500px playsinline controls muted>
<source src="https://static.grammatech.com/research/tiffin-hcss-2022.mp4#t=0.01" type="video/mp4">
</video>
</div>
</center>
