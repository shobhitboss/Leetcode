package Apple;

public class MergeSortedLinkedList {


    public static void main(String[] args) {

        ListNode node1 = new ListNode(2);
        ListNode node2 = new ListNode(3);
        ListNode node3 = new ListNode(4);
        ListNode node4 = new ListNode(5);
        ListNode node5 = new ListNode(6);
        ListNode node6 = new ListNode(7);

        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        node4.next = node5;
        node5.next = node6;
    }


    public ListNode mergeTwoListsIterative(ListNode list1, ListNode list2) {
        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;

        while (list1 != null && list2 != null) {
            if (list1.val < list2.val) {
                curr.next = list1;
                list1 = list1.next;
            } else {
                curr.next = list2;
                list2 = list2.next;
            }
            curr = curr.next;
        }

        // Append remaining elements from either list
        curr.next = list1 != null ? list1 : list2;

        return dummy.next;
    }

    public ListNode mergeTwoListsRecursive(ListNode list1, ListNode list2) {
        if (list1 == null) return list2;
        if (list2 == null) return list1;

        if (list1.val < list2.val) {
            list1.next = mergeTwoListsRecursive(list1.next, list2);
            return list1;
        } else {
            list2.next = mergeTwoListsRecursive(list1, list2.next);
            return list2;
        }
    }

    public static class ListNode {
        int val;
        ListNode next;

        ListNode(int x) {
            val = x;
        }
    }
}
