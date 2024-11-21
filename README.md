# Change Next Char
Provides two new commands:

- **(^U)** `uppercaseNext`

- **(^L)** `lowercaseNext`

These command will capitalize or lowercase the character immediately following the cursor.
I find these much handier to fix variable names / ChangeCases than having to delete and retype a character.

If the document has a selection, the command will use the cursor's active position.
Supports multiple cursors.
