const vscode = require("vscode");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  context.subscriptions.push(
	
    vscode.commands.registerCommand("changeCase.upcaseNext", () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        return;
      }
      const selections = editor.selections;
	  const newSelections = [];
      editor.edit((editBuilder) => {
        selections.forEach((selection) => {
          const nextCharacter = new vscode.Range(
            selection.active,
            new vscode.Position(
              selection.active.line,
              selection.active.character + 1
            )
          );
          editBuilder.replace(
            nextCharacter,
            editor.document.getText(nextCharacter).toUpperCase()
          );
          newSelections.push(new vscode.Selection(
	      	selection.active,
	      	selection.active,
	      ))
        });
        editor.selections = newSelections;
      });
      vscode.commands.executeCommand("cursorRight");
    }),

    vscode.commands.registerCommand("changeCase.lowercaseNext", () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
		  return;
		}
		const selections = editor.selections;
		const newSelections = [];
		editor.edit((editBuilder) => {
		  selections.forEach((selection) => {
			const nextCharacter = new vscode.Range(
			  selection.active,
			  new vscode.Position(
				selection.active.line,
				selection.active.character + 1
			  )
			);
			editBuilder.replace(
			  nextCharacter,
			  editor.document.getText(nextCharacter).toLowerCase()
			);
			newSelections.push(new vscode.Selection(
				selection.active,
				selection.active,
			))
		  });
		  editor.selections = newSelections;
		});
		vscode.commands.executeCommand("cursorRight");
	  }),
  );
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
