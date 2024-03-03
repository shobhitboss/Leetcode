//1678. Goal Parser Interpretation
package basics.simple;

public class GoalParser {

	public static String interpret(String command) {
		char temp;
		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < command.length(); i++) {
			temp = command.charAt(i);
			if (Character.isAlphabetic(temp))
				sb.append(temp);
			if (temp == '(' && command.charAt(i + 1) == ')') {
				sb.append('o');
				i++;
			}
		}
		return sb.toString();
	}

	public static void main(String[] args) {
		String str = "G()(al)";
		interpret(str);
	}
}
