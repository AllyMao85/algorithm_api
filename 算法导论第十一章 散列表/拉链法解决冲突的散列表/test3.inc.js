//������������ɢ�б�

var m=13;//MΪɢ�б�T�ĳ���(ע:m��Ҫ������������޸�!!!!!!!!!!!!!!!)

var hash=5381;//hashΪɢ�к�����һ���ȽϺõ�ɢ��ֵ

//----------------------------------------------------//
//ɢ�к�������ʵ��//
//----------------------------------------------------//
//����:time33 Hash����

//����ɢ�з�
function h1(k){
	var hash=5381;
	for(var i=0;i<k.length;i++){
	hash=hash*33+k.charCodeAt(i);
	}
	hash=hash%m;
	return hash;
}

//�˷�ɢ�з�
function h1_1(k){
	var hash=5381;
	for(var i=0;i<k.length;i++){
	hash=hash*33+k.charCodeAt(i);
	}           
	var A=(Math.sqrt(5)-1)/2;
	hash=Math.floor(m*((hash*A)%1));
	return hash;
}

//---------------------------------------------------------------------//
//ɢ�б�Ĳ�������(����)(����)(ɾ��)//�˴���ɾ������,ɾ��������������Ϊ��
//--------------------------------------------------------------------//
function Hash_insert(T,k){
	var j=h1(k);
	var node=new List();
	if(T[j]==null){
		T[j]=node;
		node.Push(k);
	}else{
		T[j].Push(k);
	}
}

function Hash_search(T,k){
	var j=h1(k);
	var m=T[j].first;
	while(m!=null){
		if(m.item==k){
			return true;
		}else{
			m=m.next;
		}
	}
	return false;
}

function Hash_delete(T,k){
	var j=h1(k);
	var m=T[j];
	if(Hash_search(T,k)){
		m.Remove_d(k);
		return true;
	}else{
		return false;
	}
}

function Hash_show(T){
	for(var i=0;i<T.length;i++){
		if(T[i]==null){
			document.write(i+':<br/>elements in save as follows: <br/>null<br/>');
		}else{
			document.write(i+':<br/>');T[i].Print();
		}
		
	}
	document.write('---------------------------------------------------------------<br/>');
}











