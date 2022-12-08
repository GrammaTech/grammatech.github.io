---
layout: prj
tags: prj
title: SySense
support:
  projects:
  - AVAMP
  agencies:
  - the Air Force
  contracts:
  - FA8750-16-C-0138
  - FA8650-17-F-1056
brief: |
    SySense is a cyber security solution to monitor and mitigate attacks on UEFI firmware.
---


SySense is a cyber security solution to monitor the execution of, detect anomalies in, and mitigate potential attacks on, UEFI firmware. On modern COTS PC systems, the UEFI BIOS initializes hardware before the operating system loads. It is composed of hundreds of components, which may come from multiple third-parties with no available source code. Due to the nature of UEFI, the firmware is monolithic, allowing each component to access the entire system. Any malware in UEFI has the potential to subvert any operating system, VM, or container running above it.

[![SySense diagram](/img/sysense.png)](/img/sysense.png)

SySense begins by inspecting the normal operation of the firmware and inferring a policy that specifies normal behavior for each component. Next, it performs runtime monitoring and detects deviations from the policy. This allows detection of malicious software embedded in the firmware through insider attack or supply chain vulnerabilities. When a program violates a policy, SySense mitigates the problem with an automatic response such as blocking the offending operation. It can also log forensic information for offline investigation by a human analyst or automated Reasoning Engine. Because SySense specifies and allows only correct behavior, it protects against both _known_ and _unknown_ attacks. SySense monitors execution using a custom hypervisor; therefore, the firmware does not need to be modified to enable monitoring, nor is source code required.

The video below is a presentation of Tiffin and mgen, core technologies underlying SySense and other GrammaTech autonomic projects. The presentation was originally given at the [HCSS](https://cps-vo.org/group/hcss_conference) 2022 conference.

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
