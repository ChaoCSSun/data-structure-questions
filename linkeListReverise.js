

function ListNode(val) {
    this.val = val;
     this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head) return head;
     ListNode pre = null;
     ListNode current = head;
    while(current != null) {
        current.next = pre;
        pre = current;
        curr = current.next
    }

};