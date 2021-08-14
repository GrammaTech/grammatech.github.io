---
layout: index
title: GrammaTech Research
anchors:
  - text: Research Areas
    slug: research-areas
  - text: Technologies
    slug: technologies
  - text: Products
    slug: products
  - text: Open Source Software
    slug: open-source-software
---

<div class="w3-row-padding gt-large-only-middle-line gt-large-only-bottom-line">
<div class="w3-half w3-margin-bottom">
<div class="w3-container gt-small-only-bottom-line">

### Open Source Software

We are a commercial company and we develop and sell proprietary
software products. However, we release the core technology underlying
these products — the libraries on which these product's power and
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

</div>
</div>
<div class="w3-half w3-margin-bottom">
<div class="w3-container gt-small-only-bottom-line">

### Tools

{% for ap in collections.ap %}

[{{ ap.data.title }}]({{ ap.url |url }})
:   {{ ap.data.brief }}

{% endfor %}

</div>
</div>
</div>
<div class="w3-row-padding gt-large-only-middle-line gt-large-only-bottom-line">
<div class="w3-half w3-margin-bottom">
<div class="w3-container gt-small-only-bottom-line">

### Research Areas

{% for ra in collections.ra %}

[{{ ra.data.title }}]({{ ra.url |url }})
:   {{ ra.data.brief }}

{% endfor %}

</div>
</div>
<div class="w3-half w3-margin-bottom">
<div class="w3-container gt-small-only-bottom-line">

### Technologies

{% for tech in collections.tech %}

[{{ tech.data.title }}]({{ tech.url |url }})
:   {{ tech.data.brief }}

{% endfor %}

</div>
</div>
</div>
