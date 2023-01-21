'use strict';

const vscode = require('vscode');
const merge = require('lodash.merge')

const generic = require('./snippets/frameworks/generic.json')
const jasmine = require('./snippets/frameworks/jasmine.json')
const mocha = require('./snippets/frameworks/mocha.json')
const jest = require('./snippets/frameworks/jest.json')

function activate(context) {
    vscode.languages.registerCompletionItemProvider(
        {language: 'javascript', scheme: 'file'},
        {
            provideCompletionItems(document, position, token, context) {
                const quote = vscode.workspace.getConfiguration('javascript-test-snippets').get('quoteStyle', '"')
                const framework = vscode.workspace.getConfiguration('javascript-test-snippets').get('framework', 'mocha')

                let definedCompletions = generic

                if (framework === 'mocha') {
                    definedCompletions = merge(definedCompletions, mocha)
                } else if (framework === 'jest') {
                    definedCompletions = merge(definedCompletions, jest)
                } else {
                    definedCompletions = merge(definedCompletions, jasmine)
                }

                const completions = []
                for (const testCompletion in definedCompletions) {
                    let item = new vscode.CompletionItem(
                        {
                            label: definedCompletions[testCompletion].prefix,
                            description: definedCompletions[testCompletion].description,
                        },
                        vscode.CompletionItemKind.Snippet
                    )
                    let insertTextOriginal = definedCompletions[testCompletion].body
                    const newQuoteInsertText = insertTextOriginal.replaceAll("'", quote)
                    item.insertText = new vscode.SnippetString(newQuoteInsertText)
                    completions.push(item)
                }

                return new vscode.CompletionList(completions)

            }
        }
    )
}

// this method is called when your extension is deactivated
function deactivate() {}

// eslint-disable-next-line no-undef
module.exports = {
	activate,
	deactivate
}
