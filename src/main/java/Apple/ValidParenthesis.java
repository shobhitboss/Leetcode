package Apple;

public class ValidParenthesis {
    public static void main(String[] args) {
        System.out.println(checkValidParenthesis("()"));
    }

    public static boolean checkValidParenthesis(String str) {
        StringBuilder sb = new StringBuilder();
        for (char ch : str.toCharArray()) {
            if (ch == '(' || ch == '{' || ch == '[') {
                sb.append(ch);
                continue;
            }
            if (sb.length() > 0) {
                char c = sb.charAt(sb.length() - 1);
                if ((ch == ')' && c == '(') || (ch == '}' && c == '{') || (ch == ']' && c == '[')) {
                    sb.deleteCharAt(sb.length() - 1);
                    continue;
                }
            }
            sb.append(ch);
        }
        return sb.length() == 0;
    }
}
