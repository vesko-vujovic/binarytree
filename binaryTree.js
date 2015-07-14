/**
 * This is my impelemntation of binary search tree
 * by Vesko Vujovic
 */

 // create node for binary tree that contains data and left and right links to child nodes
 var nodes   = [];
 var nodes2  = [];
 var nodes3  = [];
 var nodes4  = [];
 var min  = '';
 var max  = '';
 // Initialize node
    function Node(data, left, right){
        this.data    = data;
        this.left    = left;
        this.right   = right;
        this.show    = show;
    }
// displays data stored in node
    function show() {
        return this.data;
    }


    function BST(){
        this.root                = null;
        this.insert              = insert;
        this.inOrderTraversal    = inOrderTraversal;
        this.preOrderTraversal   = preOrderTraversal;
        this.postOrderTraversal  = postOrderTraversal;
        this.getMinimum          = getMinimum;
        this.getMaximum          = getMaximum;
        this.findNode            = findNode;
        this.remove              = remove;
    }


/**
 *      ----- Logic for the binary search tree -----
 * 1. Set the root node to be the current node.
 * 2. If the data value in the inserted node is less than the data value in current node, set
 *  the new current node to be the left child of the current node. If the data value in the
 *  inserted bide us greater than the data value in the current node, skip to step 4
 * 3. If the value of the left child of the current node is null insert the new node here, and
 * exit the loop . Otherwise, skip to the next iteration of the loop
 * 4.Set the current node to be the right child of the current node
 * 5.If the right child of the current node is null, insert new node here, and exit the loop/
 * Otherwise, skip to next iteration of the loop
 */
    function insert(data){

        var n = new Node(data, null, null);
        if(this.root == null){
            this.root = n;
        }
        else {
            var current = this.root;
            var parent;
            while(true){
                parent = current;
                if(data < current.data){
                    current = current.left;
                    if(current == null){
                        parent.left = n;
                        break;
                    }
                }
                else{
                    current = current.right;
                    if(current == null){
                        parent.right = n;
                        break;
                    }
                }
            }
        }

    }
// Traverse the binary tree with inOrder traversal method
    function inOrderTraversal(node) {
        if (!(node == null)) {
            inOrderTraversal(node.left);
            nodes.push(node.show());
            inOrderTraversal(node.right);

        }

        //console.log(nodes);
    }

// preOrder traversal
    function preOrderTraversal(node) {
        if (!(node == null)) {
            nodes2.push(node.show());
            preOrderTraversal(node.left);
            preOrderTraversal(node.right);

        }
    }
// postOrder traversal
    function postOrderTraversal(node){
        if (!(node == null)) {
            postOrderTraversal(node.left);
            postOrderTraversal(node.right);
            nodes3.push(node.show());

        }
    }

/**
 * Here we traverse whole left side of the tree, when current.left is null is reached we have our minimum
 */

// getMin node in the tree
    function getMinimum() {
        var current = this.root;
        while(!(current.left == null)){
            current = current.left;
        }
        return current.data;
    }

// getMax node in the tree
    function getMaximum() {
        var current = this.root;
        while(!(current.right == null)){
            current = current.right;
        }
        return current.data;
    }
// find node in tree
function findNode(data){
    var current = this.root;
    while(data !== current.data){
        if(data < current.left){
            current = current.left;
        }
        else {
            current = current.right;
        }
        if(current == null){
            return null;
        }
    }
    return current.data;
}

/**
 *  Removing leaf and nodes from tree
 *
 *  The first step to take when removing a node in TREE is to check to see if the current node holds the data that
 *  that we are trying to remove. If so, remove that node. If not, then we compare the data in the current node with
 *  the data we are trying to remove . If the data we want to remove is less than the data in current node, move to
 *  the left child of the current node and compare data. If the data we want to remove is greater than the data in
 *  current node, move to the right child of the current node and compare data.
 *
 *  The first case to consider is when the node to be removed is LEAF( a node with no children ). Then all we have
 *  to do is set the link that is pointing to the node of parent node to null.
 *
 *  The node removal is made with a help of two functions. The remove() function simply receives the value to be
 *  removed and calls the second function removeNode(), which does all the heavy lifting. :)
 */


// find smallest node on the right side of the tree
function getSmallestNodeToTheRight(node){
    var current = node;

    while(!(current.left == null )){
        current = current.left;
    }

    return current.data;
}


// remove node
function remove(data){
    var root = removeNode(this.root, data);
}

// function that actually removes nodes
function removeNode(node, data){
    if(node == null){
        return null;
    }
    if(data == node.data){
        // node has no children
        if(node.left == null && node.right == null){
            return null;
        }

        // node has no left child
        if(node.left == null){
            return node.right;
        }
        // node has no right child
        if(node.right == null){
            return node.left;
        }
        // node has two children
        var tempNode = getSmallestNodeToTheRight(node.right);
        node.data    = tempNode.data;
        node.right   = removeNode(node.right, node.data);
        return node;


    }
    else if(data <  node.data){
        node.left = removeNode(node.left, data);
        return node;
    }
    else {
        node.right = removeNode(node.right, data);
        return node;
    }


}










