export class TrieNode {
  constructor(char, isWord = false) {
    this.char = char;
    this.isWord = isWord;
    this.children = {};
  }

  addChild(char) {
    this.children[char] = new TrieNode(char);
    return this.children[char];
  }

  hasChild(char) {
    return Boolean(this.children[char]);
  }

  getChild(char) {
    return this.children[char];
  }

  hasChildren() {
    return Object.keys(this.children).length > 0;
  }
}

export class Trie {
  constructor() {
    this.root = new TrieNode('*');
  }

  populate(dict) {
    dict.forEach(word => {
      let current = this.root;
      for (let i = 0; i < word.length; i++) {
        let char = word.charAt(i);
        if (current.hasChild(char)) {
          current = current.getChild(char);
        } else {
          current = current.addChild(char);
        }
      }
      current.isWord = true;
    });
  }

  isPrefix(prefix) {
    let current = this.root;
    for (let i = 0; i < prefix.length; i++) {
      let char = prefix.charAt(i);
      if (current.hasChild(char)) {
        current = current.getChild(char);
      } else {
        return false;
      }
    }
    return current.hasChildren();
  }

  isWord(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      let char = word.charAt(i);
      if (current.hasChild(char)) {
        current = current.getChild(char);
      } else {
        return false;
      }
    }
    return current.isWord;
  }
}
