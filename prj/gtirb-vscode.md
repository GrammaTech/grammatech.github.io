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

The GTIRB VSCode extension allows VSCode to open a [GTIRB][] file
displaying an assembly file listing of the file's contents.  When used
in combination with GrammaTech's [DDisasm][] disassembler, the GTIRB
VSCode extension provides a reverse engineering UI with unparalleled
accuracy.  The VSCode UI provides the following features (all
demonstrated in the video below):

- **Navigation:**

    - **Address.** Jump to the listing line corresponding to a
      specified address

    - **Definition.** Jump to a definition from any symbolic reference

    - **Reference.** List, preview, and jump to the references of any
      symbol

- **Static Analysis.** Hovering over a line in the listing will bring
    up any AuxData associated that address in the binary.  This can
    contain arbitrary static analysis information, and will at least
    contain local data-flow information for GTIRB files produced by
    DDisasm.

- **Decompilation.** Display the decompilation of a function by
    hovering over the function name.  Only available when the backing
    GTIRB file has embedded decompilation information.

- **Binary Rewriting.** Directly edit the assembly code listing
    through the VSCode UI, and then save the file in VSCode.  When the
    edits are made, the GTIRB VSCode extension records the code blocks
    that were modified and saves their references to portions of the
    modified assembly file.  Then when the file is saved, the GTIRB
    VSCode extension loops through every modified basic block and
    updates it in the backing GTIRB file using the [gtirb-rewriting][]
    API.  After updating the GTIRB file, the [GTIRB-PPrinter][] is
    used to assemble and link a new modified binary reflecting the
    user's interactive edits.

    <center>
    <div class="w3-hide-medium w3-hide-large">
    <video width=300px height=187px playsinline controls muted>
    <source src="https://download.grammatech.com/research/vscode-demo-short.mp4#t=0.01" type="video/mp4">
    </video>
    </div>
    <div class="w3-hide-small">
    <video width=800px height=500px playsinline controls muted>
    <source src="https://download.grammatech.com/research/vscode-demo-short.mp4#t=0.01" type="video/mp4">
    </video>
    </div>
    </center>

[GTIRB]: {{ "/prj/gtirb"|url }}
[DDisasm]: {{ "/prj/ddisasm"|url }}
[GTIRB-PPrinter]: https://github.com/grammatech/gtirb-pprinter
[gtirb-rewriting]: https://github.com/grammatech/gtirb-rewriting
