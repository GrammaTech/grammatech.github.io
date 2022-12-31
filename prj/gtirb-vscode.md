---
layout: prj
tags: prj
title: GTIRB VSCode Extension
support:
  agencies:
  - the Navy
  - the Office of Naval Research
  contracts:
  - N68335-17-C-0700
brief: |
    VSCode extension allowing users to read, navigate, and (re)write GTIRB files.
---

The GTIRB VSCode extension allows VSCode to open a [GTIRB][] file,
displaying an assembly listing of the contents.  When combined
with GrammaTech's [DDisasm][] disassembler, it provides a reverse engineering
 UI with unparalleled accuracy. It is available as open-source software at
[github.com/grammatech/gtirb-vscode].

[github.com/grammatech/gtirb-vscode]: https://github.com/grammatech/gtirb-vscode

The VSCode UI provides the following features, demonstrated in the
video below:

- **Navigation:** Jump to the listing line corresponding to a
      specified address. Jump to a definition from any symbolic reference. List,
      preview, and jump to the references of any symbol.

- **Static Analysis.** Hover over a line in the listing to bring
    up any AuxData associated with that address in the binary. This can
    contain arbitrary static analysis information, and will at least
    contain local data-flow information for GTIRB files produced by
    DDisasm.

- **Decompilation.** Display the decompilation of a function by
    hovering over the function name. Only available when the backing
    GTIRB file has embedded decompilation information.

- **Binary Rewriting.** Directly edit the assembly code listing
    through the VSCode UI, and save the file in VSCode. The GTIRB VSCode
    extension records the code blocks
    that were modified and saves their references to portions of the
    modified assembly file. When the file is saved, the GTIRB
    VSCode extension loops through every modified basic block and
    updates it in the backing GTIRB file using the [gtirb-rewriting][]
    API.  After updating the GTIRB file, the [GTIRB-PPrinter][] assembles
    and links a new binary reflecting the user's edits.

    <center>
    <div class="w3-hide-medium w3-hide-large">
    <video width=300px height=187px playsinline controls muted>
    <source src="https://static.grammatech.com/research/vscode-demo-short.mp4#t=0.01" type="video/mp4">
    </video>
    </div>
    <div class="w3-hide-small">
    <video width=800px height=500px playsinline controls muted>
    <source src="https://static.grammatech.com/research/vscode-demo-short.mp4#t=0.01" type="video/mp4">
    </video>
    </div>
    </center>

[GTIRB]: {{ "/prj/gtirb"|url }}
[DDisasm]: {{ "/prj/ddisasm"|url }}
[GTIRB-PPrinter]: https://github.com/grammatech/gtirb-pprinter
[gtirb-rewriting]: https://github.com/grammatech/gtirb-rewriting
