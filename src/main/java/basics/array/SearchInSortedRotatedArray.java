//33. Search in Rotated Sorted Array
package basics.array;

public class SearchInSortedRotatedArray {

    public static int search(int[] nums, int target) {
        return searchHelper(nums, target, 0, nums.length - 1);
    }

    private static int searchHelper(int[] nums, int target, int start, int end) {
        if (start > end)
            return -1;
        int mid = start + ((end - start) / 2);
        if (nums[mid] == target)
            return mid;
        if (nums[mid] >= nums[start]) {
            if (target >= nums[start] && target <= nums[mid])
                return searchHelper(nums, target, start, mid - 1);
            else
                return searchHelper(nums, target, mid + 1, end);
        }
        if (nums[mid] <= nums[end]) {
            if (target >= nums[mid] && target <= nums[end])
                return searchHelper(nums, target, mid + 1, end);
            else
                return searchHelper(nums, target, start, mid - 1);
        }
        return -1;
    }

    public static void main(String args[]) {
        int[] arr = {4, 5, 6, 7, 0, 1, 2};
        System.out.println(search(arr, 0));
    }

}
