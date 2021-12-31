---
layout: prj
tags: [prj, gtirb-proprietary]
title: GTIRB VSCode Extension
support:
  agencies:
  - the Navy
  - the Office of Naval Research
  contracts:
  - N68335-17-C-0700
brief: |
    Read, navigate, and (re)write GTIRB files through VSCode.
---

The GTIRB VSCode extension allows VSCode to open a GTIRB file
displaying an assembly file listing of the GTIRB file contents.

- **Hovering** over a line in the file will bring up any AuxData
    associated with the current line.

- **Navigation** to definitions and references is supported by
    leveraging symbol information from the GTIRB file.  Finally,
    binary rewriting is also supported.

- **Binary Rewriting** is supported by directly editing the assembly
    code through the VSCode UI, and then saving the file in VSCode.
    When the edits are made, the GTIRB VSCode extension records the
    code blocks that were modified and saves their references to
    portions of the modified assembly file.  Then when the file is
    saved, the GTIRB VSCode extension loops through every modified
    basic block and updates it in the backing GTIRB file using the
    [gtirb-rewriting][] API.  After updating the GTIRB file, the
    [GTIRB-PPrinter][] is used to assemble and link a new modified
    binary reflecting the user's interactive edits.  The following
    short video demonstrates a simple interactive binary rewrite.

    <center>
    <div class="w3-hide-medium w3-hide-large">
    <video width=300px height=187px playsinline controls muted>
    <source src="https://download.grammatech.com/research/simple-binary-rewrite-vscode-gtirb-smaller.mp4#t=0.01" type="video/mp4">
    </video>
    </div>
    <div class="w3-hide-small">
    <video width=800px height=500px playsinline controls muted>
    <source src="https://download.grammatech.com/research/simple-binary-rewrite-vscode-gtirb-smaller.mp4#t=0.01" type="video/mp4">
    </video>
    </div>
    </center>

[GTIRB-PPrinter]: https://github.com/grammatech/gtirb-pprinter
[gtirb-rewriting]: https://github.com/grammatech/gtirb-rewriting
