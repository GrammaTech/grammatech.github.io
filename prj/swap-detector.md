---
layout: oss
tags: oss
title: Swap Detector
link: https://github.com/GrammaTech/swap-detector
techs:
  - name: Machine Learning
    slug: machine-learning
brief: |
    A library to check swapped arguments in function calls, and a Clang
    Static Analyzer plugin used to demonstrate the library.
---

Swap Detector is a tool that uses statistical information about code usage patterns to detect instances of swapped arguments in API function calls, as in the following [OpenSSL](https://www.openssl.org/docs/manmaster/man3/RSA_get0_key.html) usage example:

```c
/* Apparent swap of 'e' and 'n' based on parameter names. */
RSA_get0_key(rkey, &e, &n, NULL);
```

Swap Detector is available as [open-source software](https://github.com/GrammaTech/swap-detector).

We describe concepts and algorithms behind Swap Detector in a [research paper](https://arxiv.org/abs/2009.09117), published in the [2020 IEEE Source Code Analysis and Manipulation Conference](http://www.ieee-scam.org/2020/). A [video](https://www.youtube.com/watch?v=aIOdPiTqBqc) from our presentation is available. Note that not all algorithms, heuristics, and features described in the research paper are present in our open-source release.

This material is based on research sponsored by the Department of Homeland
Security (DHS) Office of Procurement Operations, S&T acquisition Division via
contract number 70RSAT19C00000056. The views and conclusions contained herein
are those of the authors and should not be interpreted as necessarily
representing the official policies or endorsements, either expressed or
implied, of the Department of Homeland Security.
