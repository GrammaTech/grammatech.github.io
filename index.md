---
layout: index
title: GrammaTech Research
brief: GrammaTech Research
anchors:
  - text: Cyber Security Solutions
    slug: cyber-security-solutions
  - text: Research Areas
    slug: research-areas
  - text: Open Source Software
    slug: open-source-software
  - text: Publications
    url: /pubs
---

<div class="gt-bottom-line">

### Cyber Security Solutions

{% assign row = 0 %}
{% for ap in collections.ap %}
{% if row == 0 %}
<div class="w3-row-padding">
{% endif %}
<div class="w3-half w3-margin-bottom">
<div class="w3-container w3-card gt-card">

[{{ ap.data.title }}]({{ ap.url |url }})
:   {{ ap.data.brief }}

</div>
</div>
{% if row > 0 %}
</div>
{% assign row = 0 %}
{% else %}
{% assign row = 1 %}
{% endif %}
{% endfor %}
</div>
</div>

<div class="gt-bottom-line">

### Research Areas

<div id="use-case-table" class="w3-table w3-margin-bottom">
<center>Projects by use case, development stage, and research area.</center>

|           | Develop                                                        | Test/Integrate                                                                            | Deploy/Execute                                  | Reuse                                                                                                                          |
|-----------|----------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| Automate  | [MergeResolver][], [Mnemosyne][], [Software Search Replace][] | [Bindle][], [Bug-Injector][], [Mnemosyne][], [Proteus][], [REAFFIRM][], [Swap Detector][] |                                                 |                                                                                                                                |
| Optimize  |                                                                | [Binary-Reduce][]                                                                         |                                                 | [Binary-Reduce][]                                                                                                              |
| Repair    | [GenPatcher][]                                                 | [Proteus][], [REAFFIRM][]                                                                 | [AMBER][], [ARTCAT][],  [SySense][]             | [Proteus][], [REAFFIRM][], [GTIRB-VSCode][]                                                                                    |
| Diversify | [Variegate][]                                                  |                                                                                           |                                                 |                                                                                                                                |
| Harden    | [Mnemosyne][], [CRAM][]                                        | [Binary-Reduce][], [Proteus][], [REAFFIRM][], [Stack-Stamp][], [To-Static][]              | [AMBER][], [ARTCAT][], [ConfINE][], [SySense][] | [Binary-Reduce][], [Proteus][], [REAFFIRM][], [Stack-Stamp][], [To-Static][]                                                   |
| Assure    |                                                                | [A-CERT][]                                                                                |                                                 | [A-CERT][]                                                                                                                     |
| Assess    | [Spec-Map][]                                                   | [A-CERT][], [Discover][], [Mnemosyne][], [Proteus][], [REAFFIRM][]                        | [AMBER][], [ARTCAT][], [ConfINE][], [SySense][] | [A-CERT][], [Bin2Math][], [DDisasm][], [Discover][], [FVA][], [Proteus][], [REAFFIRM][], [TBDC][], [TFPGA][], [GTIRB-VSCode][] |

</div>

{% assign row = 0 %}
{% for ra in collections.ra %}
{% if row == 0 %}
<div class="w3-row-padding">
{% endif %}
<div class="w3-half w3-margin-bottom">
<div id="{{ ra.data.slug }}" class="w3-container w3-card gt-card">

[{{ ra.data.title }}]({{ ra.url |url }})
:   {{ ra.data.brief }}

</div>
</div>
{% if row > 0 %}
</div>
{% assign row = 0 %}
{% else %}
{% assign row = 1 %}
{% endif %}
{% endfor %}
</div>
</div>

### Open Source Software

We are a commercial company and we develop and sell proprietary
software products. However, we release the core technology underlying
these products — the libraries on which these products' power and
correctness depend.  GrammaTech recognizes that only by encouraging
outside use and review of our software can we achieve the
reproducibility, objectivity, accuracy, quality, and security our
customers require.

{% for oss in collections.oss %}

[{{ oss.data.title }}]({{ oss.url |url }})
:   {{ oss.data.brief }}

{% endfor %}

We not only publish but *participate* in the open-source community,
through
[multiple](https://github.com/angr/angr/commit/8a13278d5bd54b0ea45d492eb0a56aa745f8b24f)
[contributions](https://github.com/souffle-lang/souffle) to
[significant](https://github.com/llvm/llvm-project/blob/master/clang/include/clang/AST/JSONNodeDumper.h)
open-source projects, and [accepting significant
contributions](https://github.com/GrammaTech/ddisasm/blob/master/README.md#external-contributors)
to projects we maintain in return.  Find more of our open-source
repositories on [GitHub/GrammaTech](https://github.com/GrammaTech) and
[GitLab/GrammaTech](https://gitlab.com/GrammaTech).

[REAFFIRM]: {{ "/prj/reaffirm"|url }}
[AMBER]: {{ "/prj/amber"|url }}
[ARTCAT]: {{ "/prj/artcat"|url }}
[A-CERT]: {{ "/prj/acert"|url }}
[Bindle]: {{ "/prj/bindle"|url }}
[Bin2Math]: {{ "/prj/bin2math"|url }}
[Proteus]: {{ "/prj/proteus"|url }}
[ConfINE]: {{ "/prj/confine"|url }}
[SySense]: {{ "/prj/sysense"|url }}
[Discover]: {{ "/prj/discover"|url }}
[TBDC]: {{ "/prj/tbdc"|url }}
[Swap Detector]: {{ "/prj/swap-detector"|url }}
[GenPatcher]: {{ "/prj/genpatcher"|url }}
[Mnemosyne]: {{ "/prj/mnemosyne"|url }}
[CRAM]: {{ "/prj/cram"|url }}
[Spec-Map]: {{ "/prj/spec-map"|url }}
[Variegate]: {{ "/prj/variegate"|url }}
[Bug-Injector]: {{ "/prj/bug-injector"|url }}
[MergeResolver]: {{ "/prj/merge-resolver"|url }}
[Software Search Replace]: {{ "/prj/ssr"|url }}
[DDisasm]: {{ "/prj/ddisasm"|url }}
[To-Static]: {{ "/prj/to-static"|url }}
[Stack-Stamp]: {{ "/prj/stack-stamp"|url }}
[Binary-Reduce]: {{ "/prj/binary-reduce"|url }}
[FVA]: {{ "/prj/fva"|url }}
[TFPGA]: {{ "/prj/tfpga"|url }}
[GTIRB-VSCode]: {{ "/prj/gtirb-vscode"|url }}
