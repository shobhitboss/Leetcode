package Trie;

public class NewTrie {
    Trie root = new Trie();

    public Trie buildTrie(String[] arr) {
        for (String word : arr) {
            Trie t = root;
            for (char ch : word.toCharArray()) {
                if (t.next[ch - 'a'] == null)
                    t.next[ch - 'a'] = new Trie();
                t = t.next[ch - 'a'];
            }
            t.word = word;
        }
        return root;
    }

    public class Trie {
        public Trie[] next = new Trie[26];
        String word;
    }
}
