---
title: Publications
layout: default
---

{% for bib in collections.bibSort %}
**[{{ bib.data.TITLE |clean }}]({{ bib.url|url }})** *{{ bib.data.BOOKTITLE | clean | xspace }}{{ bib.data.YEAR }}*
:   {{ bib.data.AUTHOR | clean }}
{% endfor %}
