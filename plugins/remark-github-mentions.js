'use strict';

// Converts bare @username mentions in markdown text nodes to GitHub profile links.
// Skips mentions that are already inside a link node.

const MENTION_RE = /@([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,37}[a-zA-Z0-9])?)/g;

function remarkGithubMentions() {
  return (tree) => {
    walk(tree, null);
  };
}

function walk(node, parent) {
  if (node.type === 'text' && parent && parent.type !== 'link') {
    const replacements = splitMentions(node.value);
    if (replacements) {
      const idx = parent.children.indexOf(node);
      parent.children.splice(idx, 1, ...replacements);
      return idx + replacements.length;
    }
  }

  if (node.children) {
    let i = 0;
    while (i < node.children.length) {
      const result = walk(node.children[i], node);
      i = result !== undefined ? result : i + 1;
    }
  }
}

function splitMentions(text) {
  MENTION_RE.lastIndex = 0;
  const nodes = [];
  let lastIndex = 0;
  let match;

  while ((match = MENTION_RE.exec(text)) !== null) {
    const [full, username] = match;
    const before = text.slice(lastIndex, match.index);
    if (before) nodes.push({type: 'text', value: before});
    nodes.push({
      type: 'link',
      url: `https://github.com/${username}`,
      children: [{type: 'text', value: full}],
    });
    lastIndex = match.index + full.length;
  }

  if (!nodes.length) return null;

  const after = text.slice(lastIndex);
  if (after) nodes.push({type: 'text', value: after});

  return nodes;
}

module.exports = remarkGithubMentions;
