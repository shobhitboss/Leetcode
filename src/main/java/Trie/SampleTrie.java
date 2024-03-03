package Trie;

import java.util.ArrayList;
import java.util.List;

public class SampleTrie {
    List<String> res = new ArrayList<>();

    public static void main(String[] args) {
        SampleTrie st = new SampleTrie();
        char[][] board = {{'a', 'b', 'c', 'd'}, {'r', 'a', 'u', 'g'}, {'t', 'g', 'v', 'w'}, {'v', 'r', 'p', 'w'}};
        String[] arr = {"art", "bag", "cav"};
        System.out.println(st.findWords(board, arr));
    }

    public List<String> findWords(char[][] board, String[] words) {
        Trie root = buildTrie(words);
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[0].length; j++) {
                traverseBoard(board, root, i, j);
            }
        }
        return res;
    }

    public Trie buildTrie(String[] words) {
        Trie root = new Trie();
        for (String word : words) {
            Trie t = root;
            for (char ch : word.toCharArray()) {
                if (t.next[ch - 'a'] == null) {
                    t.next[ch - 'a'] = new Trie();
                }
                t = t.next[ch - 'a'];
            }
            t.word = word;
        }
        return root;
    }

    public void traverseBoard(char[][] board, Trie t, int r, int c) {
        if (r < 0 || c < 0 || r >= board.length || c >= board[0].length
                || board[r][c] == '#' || t.next[board[r][c] - 'a'] == null)
            return;

        Trie next = t.next[board[r][c] - 'a'];
        if (next.word != null) {
            res.add(next.word);
            next.word = null;
        }

        t = next;
        char ch = board[r][c];
        board[r][c] = '#';

        traverseBoard(board, t, r - 1, c);
        traverseBoard(board, t, r, c - 1);
        traverseBoard(board, t, r + 1, c);
        traverseBoard(board, t, r, c + 1);

        board[r][c] = ch;
    }

    public class Trie {
        public Trie[] next = new Trie[26];
        public String word;
    }
}
