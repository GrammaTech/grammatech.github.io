GrammaTech GitHub Site
======================

![travis-ci badge](https://travis-ci.com/grammatech/grammatech.github.io.svg?branch=main)

https://grammatech.github.io/

## Preview

1. Run this to install the required software.

    ```shell
    npm install
    ```

2. Run the following to launch a local server to preview the built site.

    ```shell
    npx eleventy --serve
    ```

## Dealing with Bibtex

1. First the bibtex must be split into separate files.  The following
   Emacs macro can do this assuming we're using a common key format
   that starts with "DBLP:".

   ```lisp
    (fset 'extract-bibtex-to-file
       (kmacro-lambda-form [return ?\C-\M-f ?\C-f ?\C-  ?\C-e ?\C-b ?\M-w ?\C-a ?\C-p ?\C-y ?\C-a ?\M-d ?\C-d ?\C-  ?\C-e ?\M-% ?/ return ?- return ?! ?\C-e ?. ?b ?i ?b ?\C-a ?\C-  ?\C-e ?\M-w ?\C-  ?\C-a ?\C-w ?\C-d ?\C-  ?\C-\M-f ?\C-\M-f ?\C-w ?\C-x ?\C-f ?\C-y ?\M-y return ?\C-y ?\C-a ?\C-k ?\C-y ?\M-y ?\C-x ?\C-s ?\C-x ?k return ?\M-f ?\M-b] 0 "%d"))
   ```

2. Then just commit the separated `.bib` files into the repository.
   They'll be parsed by the `bibtex-parse` JavaScript library directly
   from the split `.bib` files by Eleventy and used to create content
   via the relevant templates in `_include/bib.liquid`.

3. For eleventy to actually serve these files we'll need empty
   markdown files next to each one.  Bonus, if we ever want any
   web-page specific commentary we can add it to these empty markdown
   files and it will appear as `content` in the bibtex template.

   ```shell
   for file in bib/*.bib;do
       touch ${file%.bib}.md
   done
   ```

## Adding videos

Videos should be added via upload to GrammaTech's static file server, in the `/static/files/research` subdirectory. For credentials to upload to that server, please contact IT. They can then be linked from website pages using the url `https://static.grammatech.com/research/filename`.
