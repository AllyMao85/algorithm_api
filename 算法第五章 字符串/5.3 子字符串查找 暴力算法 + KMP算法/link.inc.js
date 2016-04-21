/*���ļ�������ʵ�ֵ�������list����,�Լ�ͨ������ʵ�ֶ���queue�Լ���ջstack����*/

//-------����node����-----------------------------------------//
    var Node = function(newData){  
        this.next = null;  
        this.item = null;  
        this.Init = function(){  
            this.item = newData;  
        };  
        this.Init();  //����һ��node����,���� var m= new Node(n)����ʵ����ʱ,��n��ֵ��m.item
    }  
	
	
//-------����list����-----------------------------------------//  
    var List = function(){  
        this.first = null;  
        this.size = 0;  
        this.Init = function(){  
            this.first = null; 		
            this.size = 0;  
        }  //����һ��list����,���� var m= new List()����ʵ����ʱ,��List.first�Լ�List.size
        this.Init();  //��ʼ��Ϊ0;
		
		//-----list���Push����-����������ͷ��(��β��),����Ϊ��Ҫ�����node��item----------//
        this.Push = function(newData){  
            this.size += 1;  
            var newNode = new Node(newData);  
            if(this.first == null){  //���firstΪ��,����Ϊ��,������ͷָ��������node
                this.first = newNode;  
                return;  
            }  
            var tempNode = this.first; //���first�ǿ�,������Ԫ��,
            this.first=new Node();
			this.first=newNode;              //�˶�Ϊ���½ڵ��ǰ�˲���,��ԭ����first����,��
			this.first.next=tempNode;        //�µ�first��ʼ��,ʹ�����newNode,��first.next��
        };                                   //��Ϊԭ���ľ�first(tempNode)
		
		//-------------�˶�Ϊ���½ڵ�Ӻ�˲���-------------//
		this.backPush = function(newData){  
            this.size += 1;  
            var newNode = new Node(newData);  
            if(this.first == null){  //���firstΪ��,����Ϊ��,������ͷָ��������node
                this.first = newNode;  
                return;  
            }  
            var tempNode = this.first; //���first�ǿ�,������Ԫ��,
            while(tempNode.next != null)  
                tempNode = tempNode.next; //�˶�Ϊ���½ڵ�Ӻ�˲���,ͨ������nextΪnull��
            tempNode.next = newNode;      //�ڵ㼴���ڵ�,��next����ΪnewNode������
			//---------------------------------------------------------------------------//
		};
		
		//----list���pop����,Ϊ������ͷ���ڵ�,�����ظýڵ㴢���itemֵ---------//
		this.Pop = function(){
			this.size--;
			if(this.first == null){          //�˶�Ϊ���ڵ��ͷ������,�����ظ�ֵ
				return null;
			}
			var result = this.first.item;
			this.first = this.first.next;
			return result;
			//---------------------------------------------------------------------------//
		}
		
		//------------------�Ӻ�˵����ڵ㲢���ؼ�ֵ-----------------//
		this.backPop = function(){
			this.size--;
			if(this.first == null){          //�˶�Ϊ���ڵ��β������,�����ظ�ֵ
				return null;
			}
			var tempNode = this.first;
			while(tempNode.next!=null){
				tempNode=tempNode.next;
			}
			var tempNode_2 = this.first;
			while(tempNode_2.next!=tempNode){
				tempNode_2=tempNode_2.next;
			}
			tempNode_2.next=null;
			return(tempNode.item);		
			//---------------------------------------------------------------------------//
		}
		
        //---------��øò���λ�õ�itemֵ(�����0��ʼ)-------------//
        this.GetData = function(pos){  
            if(pos >= this.size || pos < 0)  
                return null;    
            else{  
                tempNode = this.first;  
                for(i = 0;i < pos;i++)    
                    tempNode = tempNode.next;    
                return tempNode.item;    
             }  
        };  
        
        //ɾ����pos���ڵ�(�����0��ʼ) 
        this.Remove = function(pos){  
            if(pos >= this.size || pos < 0)  
                return null;      
            this.size -= 1;  
            tempNode = this.first;  
            if(pos == 0){  
                this.first = this.first.next;  
                return this.first;  
            }  
            for(i = 0;i < pos - 1;i++){  
                tempNode = tempNode.next;  
            }  
            var result = tempNode.next;
			tempNode.next = tempNode.next.next;  
            return result.item;                    
        }
						
		//-------------��ӡ�����е�Ԫ��--------------------//
        this.Print = function(){  
            document.write("elements in save as follows: <br> ");  
            tempNode = this.first;  
            while(tempNode != null){  
                document.write(tempNode.item + "->");  
                tempNode = tempNode.next;  
            }  
            document.write("<br>");  
        }; 
		
		//-----------�������ĳ���------------------------//
		this.getSize = function(){
			return(this.size);
		}
		
		//----------���������Ƿ�Ϊ��----------------------//
		this.isEmpty = function(){
			if(this.first == null){
				return(1);
			}
			return(0);
		}
		
		//----------ɾ����ֵΪ����ֵ�����нڵ�-----------//
		this.Remove_d = function(del){
			var i=0;
			var tempNode = this.first;
			while(i<this.size){
				if(tempNode.item==del){
					this.Remove(i);
					i--;
				}
				tempNode=tempNode.next;
				i++;
			}
		}
		
		//----------�ҳ�����ֵ�Ľڵ���Ų���������--------//
		this.max = function(){
			var i=0;
			var index=new Array();
			var max=0;
			var tempNode = this.first;
			if(this.first==null){
				return 0;
			}
			for(i=0;i<this.size;i++){
				if(tempNode.item>max){
					max=tempNode.item;
				}
				tempNode=tempNode.next;
			}
			tempNode = this.first;
			for(i=0;i<this.size;i++){
				if(tempNode.item==max){
					index.push(i);
				}
				tempNode=tempNode.next;
			}
			return index;
		}
		
		this.toArray = function(){//ת��Ϊ������ʽ
			tempNode = this.first; 
			var arr=new Array();
            while(tempNode != null){ 
				arr.push(tempNode.item);
                tempNode = tempNode.next;  
            } 
			return arr;
		}
			
    }; 
	
//------------------��list�����ջstack����-----------------//	
	var Stack = function(){
		var list = new List();
		this.Push = function(newData){
			list.Push(newData);
		}
		this.Pop = function(){
			return(list.Pop());
		}
		this.Print = function(){
			list.Print();
		}	
		this.getSize = function(){
			return(list.getSize());
		}		
		this.isEmpty = function(){
			return(list.isEmpty());
		}
		this.toArray = function(){
			return(list.toArray());
		}
	}
	
//------------------��list�������Queue����-----------------//	
	var Queue = function(){
		var list = new List();
		this.Push = function(newData){
			list.backPush(newData);
		}
		this.Pop = function(){
			return(list.Pop());
		}
		this.Print = function(){
			list.Print();
		}		
		this.getSize = function(){
			return(list.getSize());
		}		
		this.isEmpty = function(){
			return(list.isEmpty());
		}
		this.toArray = function(){
			return(list.toArray());
		}
	}	

//------------------��list����˫�����Dueue����-----------------//	
	var Dueue = function(){
		var list = new List();
		this.pushLeft = function(newData){
			list.Push(newData);
		}
		this.pushRight = function(newData){
			list.backPush(newData);
		}
		this.popLeft = function(){
			return(list.Pop());
		}
		this.popRight = function(){
			return(list.backPop());
		}
		this.Print = function(){
			list.Print();
		}		
		this.getSize = function(){
			return(list.getSize());
		}		
		this.isEmpty = function(){
			return(list.isEmpty());
		}
		this.toArray = function(){
			return(list.toArray());
		}
	}	
	
	
/* ���Դ���
	var list=new List();
	list.Push('je');
	list.Push('has');
	list.Push('kokk');
	list.Push('math');
	list.Push('jeb');
	list.Print();
	console.log(list.GetData(0));
	list.Print();
*/