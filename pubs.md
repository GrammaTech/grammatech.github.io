---
title: Publications
layout: default
---

{% for bib in collections.bibSort %}
**{{ bib.data.TITLE |clean }}**{% if bib.data.BOOKTITLE %} *{{ bib.data.BOOKTITLE | clean }}*{% endif %}{% if bib.data.NOTES %} (_**{{ bib.data.NOTES|clean }}**_){% endif %}{% if bib.data.URL %}, [link]({{ bib.data.URL }}){% endif %}{% if bib.data.BIBURL %}, [bibtex]({{ bib.data.BIBURL }}){% endif %}
:   {{ bib.data.AUTHOR | clean | listAnd | andList }}
{% endfor %}
