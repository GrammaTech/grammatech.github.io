---
layout: prj
tags: prj
title: ConfINE
brief: |
    ConfINE is an end-to-end toolchain for configuring and securing complex network-composed systems.
---
Modern deployed systems incorporate many general-purpose commercial off-the-shelf (COTS) and open-source software (OSS) components. Each of these components must be configured appropriately, in order for the larger system to meet its operational requirements, while simultaneously minimizing safety and security risks. Today, configuration of such systems is often suboptimal, with many critical parameters left in their factory settings, exposing unnecessary attack surfaces and weakening the security of the system.

ConfINE (Configuration Identification, Normalization and Enforcement) is an end-to-end toolchain for configuring and securing complex, network-composed systems built from commercial off-the-shelf (COTS) and open-source components. It provides the following capabilities:
* Build comprehensive, rigorous models of network-composed systems-of-systems. The models describe the behavior of each system component and of the system as a whole, as well as the functional and security requirements for the system.
* Interact with external configuration-synthesis tools that generate secure configurations for each operational context.
* Provide facilities for the system operator to deploy configuration settings on the target system, and to effectively transition the system from one operational context to another.
* Continuously monitor the deployed system configuration for integrity. If a change in the system’s configuration is detected, alert the system operator to determine the best course of action (e.g., whether to transition to a different operational context, or to restore the configuration that has been synthesized for the current operational context).

To accomplish its goals, ConfINE uses Natural Language Processing (to ingest and process system documentation), program analysis (to build models of software components), and mission distribution (to interface with the target system to access, deploy, and monitor its configuration).


