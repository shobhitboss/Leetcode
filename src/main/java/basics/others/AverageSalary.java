//1491. Average Salary Excluding the Minimum and Maximum Salary

package basics.others;

public class AverageSalary {

	public static double average(int[] salary) {
		double min = salary[0], max = salary[0], sum = 0;
		for (int i : salary) {
			min = min > i ? i : min;
			max = max < i ? i : max;
			sum += i;
		}
		return ((sum - min - max) / (salary.length - 2));
	}

	public static void main(String[] args) {
		int[] arr = { 4000, 3000, 34, 43, 23, 444, 1000, 2000 };
		System.out.println(average(arr));
	}

}
