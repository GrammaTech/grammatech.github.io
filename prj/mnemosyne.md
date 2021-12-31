---
layout: prj
tags: oss
title: Mnemosyne
link: https://grammatech.gitlab.io/Mnemosyne/docs/
support:
  projects:
  - IDAS
  agencies:
  - the Air Force
  - DARPA
  contracts:
  - FA8750-20-C-0208
brief: |
    An extensible software development assistant bringing cutting edge
    program synthesis research to bear against real-world programming
    tasks in the modern integrated development environment.
---

Visit [Mnemosyne's main page][] for more information on GrammaTech's
automated software development assistant.  Mnemosyne leverages
GrammaTech's [SEL][] to parse and modify source code across dozens of
programming languages.

The following video demonstrates the use of Mnemosyne from VSCode.
Mnemosyne coordinates multiple automated programming aids to perform
tasks from automatically running tests and dynamically identifying
invariants; to synthesizing tests, repairs, and stability
improvements.

<div class="w3-container w3-margin-bottom w3-padding-top">
<center>
<div style="max-width: 1000px;">
<video id="player" playsinline controls muted>
    <source src="https://grammatech.gitlab.io/Mnemosyne/docs/video/integrated-demo-june.mp4#t=0.01" type="video/mp4">
</video>
</div>
</center>
</div>

## Mnemosyne and OpenAI's Codex Code Generating Model

The following demo shows the integration of the [OpenAI Codex model][]
into Mnemosyne where it works synergistically with Mnemosyne's
existing automated testing support to automate the development of
*reliable* software.  In this video:

1. Codex generates a method body from a documentation string.
   Unfortunately as is true of many ML-generated functions this
   implementation has a bug.
2. After the generated code is inserted, Mnemosyne's Hypothesis muse
   engages to test the new code.
3. Hypothesis finds an example illustrating an error in the generated
   code.
4. The developer updates the documentation to describe newly
   identified edge case.
5. Codex then generates a more correct function body in response to
   the enhanced documentation string.

<div class="w3-container w3-margin-bottom w3-padding-top">
<center>
<div style="max-width: 1000px;">
<video id="player2" playsinline controls>
    <source src="https://grammatech.gitlab.io/Mnemosyne/docs/video/function-generator-hypothesis-demo-1.mp4#t=0.01" type="video/mp4">
</video>
</div>
</center>
</div>

## Open Source

Mnemosyne is open-source with development taking place on
[GitLab/GrammaTech/Mnemosyne][].

[Mnemosyne's main page]: https://grammatech.gitlab.io/Mnemosyne/docs/
[SEL]: {{ "/prj/sel"|url }}
[GitLab/GrammaTech/Mnemosyne]: https://gitlab.com/GrammaTech/Mnemosyne
[OpenAI Codex model]: https://openai.com/blog/openai-codex/

<script src="https://cdn.plyr.io/3.6.7/plyr.js"></script>
<script>
  // Video player
  const player = new Plyr('#player', {
    title: 'Mnemosyne Integrated Demo',
    muted: true,
    autoplay: false,
    captions: { active:true, language: 'auto', update: false},
    controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
  });
  const player2 = new Plyr('#player2', {
    title: 'Mnemosyne Integrated Demo',
    muted: true,
    autoplay: false,
    captions: { active:true, language: 'auto', update: false},
    controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
  });
</script>
