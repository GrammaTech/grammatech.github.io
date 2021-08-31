---
layout: prj
tags: prj
title: SSR
brief: |
    Software Search Replace (SSR) is an AST-aware `sed` that enpowers
    developers to automate repository-wide refactoring using a simple yet
    powerful pattern matching syntax tailored to source code.
---

<div class="w3-hide-medium w3-hide-small" style="display:absolute;width:100px;position:fixed;top:12px;left:12px;">
  {% include ../img/ssr.svg %}
</div>
<div class="w3-hide-large" style="display:absolute;width:100px;position:fixed;top:12px;left:45%;width:10%;">
  {% include ../img/ssr.svg %}
</div>

Software Search and Replace (SSR) is a software transformation and
exploration tool that operates on abstract syntax trees (ASTs), such
as those produced by parsers for C, C++, Javascript, and other
languages. Rules specify which ASTs to match and what actions to take
against matches: for example, users can specify code rewriting actions
to implement sophisticated refactorings. Rule application order,
including simultaneous application, is fully under user control;
multiple SSR passes can be used to iterate to a stable,
fully-rewritten result.

SSR is based on the Software Evolution Library ([SEL][]), a modular
toolkit for representating and manipulating software objects. This
foundation allows SSR to support all languages supported by SEL,
including C, C++, JavaScript, Java, and Common-Lisp.

[SEL]: {{ "/prj/sel"|url }}
[machine programming]: {{ "/ra/machine-programming"|url }}
