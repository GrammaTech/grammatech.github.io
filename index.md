---
layout: index
title: GrammaTech
brief: GrammaTech
anchors:
  - text: Cyber Security Solutions
    slug: cyber-security-solutions
  - text: Areas of Expertise
    slug: expertise-areas
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

### Areas of Expertise

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

{% for oss in collections.oss %}

[{{ oss.data.title }}]({{ oss.url |url }})
:   {{ oss.data.brief }}

{% endfor %}

Find more of our open-source
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
