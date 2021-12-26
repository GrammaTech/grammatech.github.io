---
title: Publications
layout: default
---

{% for bib in collections.bib %}
**[{{ bib.data.TITLE }}]({{ bib.url|url }})**
:   {{ bib.data.AUTHOR }}
{% endfor %}
