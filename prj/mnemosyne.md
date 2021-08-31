---
layout: oss
tags: oss
title: Mnemosyne
link: https://grammatech.gitlab.io/Mnemosyne/docs/
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

Mnemosyne is open-source with development taking place on
[GitLab/GrammaTech/Mnemosyne][].

[Mnemosyne's main page]: https://grammatech.gitlab.io/Mnemosyne/docs/
[SEL]: {{ "/prj/sel"|url }}
[GitLab/GrammaTech/Mnemosyne]: https://gitlab.com/GrammaTech/Mnemosyne

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
</script>
