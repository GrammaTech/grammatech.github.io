---
layout: prj
tags: prj
title: ARTCAT
support:
  projects:
  - ARTCAT
  agencies:
  - the Navy
  - the Office of Naval Research
  contracts:
  - N68335-19-C-0200
  - N00014-15-C-0126
  - N00014-14-C-0261
brief: |
    ARTCAT is a defense-in-depth solution that monitors running applications and ensures they act as expected.
---

ARTCAT (Autonomic Response To Cyber-Attack) is a defense-in-depth solution that monitors running applications and ensures they act as expected. At the core of ARTCAT are specifications that describe correct behavior for individual applications. These are automatically mined from correct program executions, with optional human input. When a program violates a specification, ARTCAT mitigates the problem with an automatic response. Response capabilities range from fast, simple fixes at the time and location of the error, to process-level actions and long-term repairs directed by a Reasoning Engine.

[![ARTCAT diagram](/img/artcat-diagram.jpg)](/img/artcat-diagram.jpg)

The full ARTCAT system includes:

* semi-automated program policy generation tools, to quickly develop and deploy policies for target applications to monitor at runtime
* stealthy, introspective application monitoring, allowing monitors to observe program-internal data, verify invariants and other program properties, carry out pre-defined reflex responses, and report events to the Reasoning Engine
* an external Reasoning Engine which aggregates instrumentation events, applies online machine learning classifiers to identify attacks, and carries out secondary, reasoned responses and long-running remediation responses to address them

Modern runtime security solutions in the same space include Security Information and Event Management (SIEM) and Runtime Application Self-Protection (RASP) systems. State-of-the-art tools focus on observable artifacts (e.g., network traffic and program output), which facilitates wide deployment but limits the scope of offered protections. ARTCAT is capable of deep program state introspection, allowing customization of monitors and protections. In addition, because ARTCAT specifies and allows only correct behavior, it protects against both _known_ and _unknown_ attacks.

The video below is a presentation of Tiffin and mgen, core technologies underlying ARTCAT and other GrammaTech autonomic projects. The presentation was originally given at the [HCSS](https://cps-vo.org/group/hcss_conference) 2022 conference.

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
