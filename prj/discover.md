---
layout: prj
tags: prj
title: Discover
brief: |
    Discover scans binaries for n-day vulnerabilities, using a combination of lightweight binary analysis and machine learning (ML).
---

Most modern software systems have significant third-party dependencies, where source code is often unavailable. Typically, both developers and system users are unaware of known, exploitable bugs in this third-party code. Once a vulnerability is discovered, there is a race between malicious actors trying to exploit the vulnerability, and defenders of critical infrastructure. Deployed systems must be continuously scanned for known vulnerabilities, and repaired with patches before the attackers breach them.

To ensure software security in the presence of third-party dependencies, the use of Software Bills of Materials (SBOMs) is becoming an industry best practice. Within the US Federal Government, SBOMs were recognized as an essential aspect of securing the software supply chain in a recent [Executive Order](https://www.whitehouse.gov/briefing-room/presidential-actions/2021/05/12/executive-order-on-improving-the-nations-cybersecurity/).

Discover, and our associated commercial tool [CodeSentry](https://www.grammatech.com/codesentry-sca), is a deep binary scanner for identifying the presence of known vulnerable components. By using a combination of lightweight binary analysis and machine learning (ML), Discover scans binaries for n-day vulnerabilities. It provides a comprehensive and up-to-date cybersecurity assessment, and helps cyber defenders prioritize remediation. Discover can also be used to independently verify vendor-provided or supply-chain-provided SBOM information.

Unlike state-of-the-art n-day vulnerability detection tools, Discover is able to scan binaries with no metadata or additional artifacts; it can handle stripped binaries, binary code, and third-party binary dependencies. Because it performs a deep semantic scan of the binary, it can detect vulnerabilities even in the presence of variations in compiler versions, minor code changes etc. Finally, our analysis can identify if the vulnerable components are actually exercised by the application during execution. We report such components prominently as readily exploitable, encouraging analysts to prioritize them for patching.
