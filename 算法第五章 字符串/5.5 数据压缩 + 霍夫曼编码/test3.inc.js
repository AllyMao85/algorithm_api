//̰���㷨������������(�㷨����16.3)
var Huffman = function(C){
	
	this.Q=new IndexMinPQ();
	var n=C.length;
	for(var i=0;i<n;i++){
		this.Q.Insert(C[i][0],C[i][1]);//�����ȶ����ﴢ������c�Ľڵ�
	}
	for(var j=0;j<n-1;j++){//��������������
		var z=new HuffmanNode();
		var x=this.Q.delMin();//ÿ��ȡ���ȶ�������Сֵ�������ڵ���кϲ�,�������ɵ��½ڵ������¼������ȶ�����
		var y=this.Q.delMin();
		z.left=x;
		z.right=y;
		z.item=x.item+y.item;
		this.Q.Insert(z,z.item);//������еĽڵ㶼�ۼ���һ������ʱ,���������������,��ʱ�Ӷ��㿪ʼ,��������'0',��������'1',������������������ʱ,���µ�'0'��'1'�������һ����ַ����Ժ�,�������Ҷ�ӽڵ���ַ������������������
	}
	
	this.getTree = function(){
		return this.Q.delMin();
	}
	
	this.getHuffmanCode = function(){
		var tree=this.Q.delMin();
		var code=new Array();
		var string='';
		this.getHuffmanCode_i(tree,string,code);
		return code;
	}
	
	this.getHuffmanCode_i = function(node,string,code){
		if(_typeof(node.index)!='string'){
			this.getHuffmanCode_i(node.index.left,string+'0',code);
			this.getHuffmanCode_i(node.index.right,string+'1',code);	
		}
		if(_typeof(node.index)=='string'){
			code[node.index]=string;
		}		
	}


//-----------------------�жϽڵ������ڵ㻹���ַ��͵�Ҷ�ӽڵ�----------------------------//
	var class2type = {} ;
	"Boolean Number String Function Array Date RegExp Object Error".split(" ").forEach(		function(e,i){
		class2type[ "[object " + e + "]" ] = e.toLowerCase();
	});
	function _typeof(obj){
		if ( obj == null ){
			return String( obj );
		}
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ class2type.toString.call(obj) ] || "object" :
			typeof obj;
	}		
}


var HuffmanNode = function(left,right){//���������ڵ�,ӵ��������,�������������ֵitem
	this.left=null;
	this.right=null;
	arguments[0]?arguments[0]:null;
	arguments[1]?arguments[1]:null;
	this.Init = function(){  
		this.left=left;
		this.right=right;		
	};  
	this.Init();
}

