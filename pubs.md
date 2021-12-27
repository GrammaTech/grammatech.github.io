---
title: Publications
layout: default
---

{% for bib in collections.bibSort %}
**[{{ bib.data.TITLE |clean }}]({{ bib.url|url }})**{% if bib.data.BOOKTITLE %} *{{ bib.data.BOOKTITLE | clean }}*{% endif %}{% if bib.data.NOTES %} (_**{{ bib.data.NOTES|clean }}**_){% endif %}
:   {{ bib.data.AUTHOR | clean }}
{% endfor %}
