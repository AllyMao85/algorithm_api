/*���ļ�������ʵ�ֵ�������list����,�Լ�ͨ������ʵ�ֶ���queue�Լ���ջstack����*/
//���ļ�Ϊ��Ȩ�����ػ�,node����ֵ��չΪDirectedEdge ����� v,w,weight,��ֵΪ�ߵ���������,��ߵ�Ȩ��ֵ

//-------����DirectedEdge(�����)����-------------------------------------//
    var DirectedEdge = function(v,w,weight){  
		this.next = null;  
		this.v = null;
		this.w = null;
		this.weight = null;		
		this.Init = function(){  
			this.v = v;  
			this.w = w; 
			this.weight = weight; 
		};  
		this.Init();
		
		this.get_weight = function(){
			return this.weight;
		}
		this.from = function(){//����ߵ����
			return this.v;
		}
		this.to = function(v){//����ߵ��յ�
			return this.w;
		}
		// this.toString = function(){
			// document.write(this.w+"|"+this.w+"|"+this.weight+"|<br/>");
		// }
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
        this.Push = function(v,w,weight){  
            this.size += 1;  
            var newNode = new DirectedEdge(v,w,weight);  
            if(this.first == null){  //���firstΪ��,����Ϊ��,������ͷָ��������node
                this.first = newNode;  
                return;  
            }  
            var tempNode = this.first; //���first�ǿ�,������Ԫ��,
            this.first=new DirectedEdge();
			this.first=newNode;              //�˶�Ϊ���½ڵ��ǰ�˲���,��ԭ����first����,��
			this.first.next=tempNode;        //�µ�first��ʼ��,ʹ�����newNode,��first.next��
        };                                   //��Ϊԭ���ľ�first(tempNode)
		
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
		
		//-------------��ӡ�����е�Ԫ��--------------------//
        this.Print = function(){  
            document.write("elements in save as follows: <br> ");  
            tempNode = this.first;  
            while(tempNode != null){  
                document.write("|"+tempNode.v+"|"+tempNode.w+"|"+tempNode.weight+"| -> ");  
                tempNode = tempNode.next;  
            }  
            document.write("<br>");  
        }; 
		
		
		this.toArray = function(){//ת��Ϊ������ʽ
			tempNode = this.first; 
			var arr=new Array();
            while(tempNode != null){ 
				arr.push(tempNode.v);
                tempNode = tempNode.next;  
            } 
			return arr;
		}
		
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
			
		//----------���������Ƿ�Ϊ��----------------------//
		this.isEmpty = function(){
			if(this.first == null){
				return(1);
			}
			return(0);
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

