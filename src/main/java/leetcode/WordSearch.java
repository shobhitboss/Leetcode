package leetcode;

public class WordSearch {
    boolean isFound = false;

    public static void main(String[] args) {
        WordSearch ws = new WordSearch();
        char[][] board = {{'A', 'B', 'C', 'E'}, {'S', 'F', 'C', 'S'}, {'A', 'D', 'E', 'E'}};
        String word = "ABCCED";
        System.out.println(ws.exist(board, word));
    }

    public boolean exist(char[][] board, String word) {
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[0].length; j++) {
                if (isFound)
                    return isFound;
                traverseBoard(board, word, i, j, 0);
            }
        }
        return isFound;
    }

    public void traverseBoard(char[][] board, String word, int r, int c, int ind) {
        if (isFound || r < 0 || c < 0 || r >= board.length || c >= board[0].length || board[r][c] == '#' || board[r][c] != word.charAt(ind))
            return;

        if (ind == word.length() - 1) {
            isFound = true;
            return;
        }

        char ch = board[r][c];
        board[r][c] = '#';

        traverseBoard(board, word, r - 1, c, ind + 1);
        traverseBoard(board, word, r, c - 1, ind + 1);
        traverseBoard(board, word, r + 1, c, ind + 1);
        traverseBoard(board, word, r, c + 1, ind + 1);

        board[r][c] = ch;
    }
}
