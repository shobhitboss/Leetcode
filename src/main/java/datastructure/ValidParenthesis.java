package datastructure;

import java.util.Stack;

public class ValidParenthesis {

    public static boolean validParenthesis(String str) {
        Stack<Character> stack = new Stack<>();
        for (char ch : str.toCharArray()) {
            if (ch == '(' || ch == '{' || ch == '[')
                stack.push(ch);
            else if (!stack.isEmpty() && ch == ')' && stack.peek() == '(')
                stack.pop();
            else if (!stack.isEmpty() && ch == '}' && stack.peek() == '{')
                stack.pop();
            else if (!stack.isEmpty() && ch == ']' && stack.peek() == '[')
                stack.pop();
            else
                return false;
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println(validParenthesis("[{((()))}]"));
    }

}
