//394. Decode String
package leetcode;

import java.util.Stack;

public class DecodeString {
    public static void main(String[] args) {
        DecodeString ds = new DecodeString();
        String str = "3[a]2[bc]";
        int a= str.indexOf('[');
        System.out.println(a);
        System.out.println(str.indexOf(']', a));
    }

    public String decodeString(String s) {
        Stack<Character> st = new Stack<>();
        for (int i = s.length() - 1; i >= 0; i--) {
            if(s.charAt(i) == '['){

            }
        }
        return null;
    }
}
