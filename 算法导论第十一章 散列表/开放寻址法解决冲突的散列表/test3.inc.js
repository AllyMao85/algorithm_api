//���ڿ���Ѱַ����ɢ�б�,����Ԫ�ص�����NС�ڵ���ɢ�б�T������M

var m=13;//MΪɢ�б�T�ĳ���(ע:m��Ҫ������������޸�!!!!!!!!!!!!!!!)

var hash=5381;//hashΪɢ�к�����һ���ȽϺõ�ɢ��ֵ

function Node(k){
	this.key=k;
	this.hash=0;
}

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

//����ɢ�к���,�������ɢ�к���h1,��������˫��ɢ�е�̽�鷽��
//(ע:Ϊ���ܲ�������ɢ�б�,h2(k)��ֵҪ���Ĵ�С m ����)
function h2(k){
	var hash=5381;
	var m_2=m-1;
	for(var i=0;i<k.length;i++){
	hash=hash*33+k.charCodeAt(i);
	}
	hash=1+(hash%m_2);
	return hash;
}


//----------------------------------------------------//
//����Ѱַ������ʵ��//
//----------------------------------------------------//
//����̽��
function Linear_Probing(k){//�����kΪɢ��ֵ����,������ɢ�б�T��
	var i = arguments[1] ? arguments[1] : 0;//����ƫ��ֵi�ĳ�ʼֵΪ0,��k��Ӧ��T�ĳ�ʼ�ռ��Ѿ�ռ��,��ͨ��ƫ��ֵ�ĸı��ƶ�k��T�����յĴ洢�ռ�,ֱ��i==m,��������ɱ���T,�����޷�����k,����ζ����ʧ��
	
	return ( h1(k) + i ) % m;
}

//����̽��(ԭ��ͬ����̽��,ֻ��ƫ��ֵ�޸�Ϊ2�α���)
function Quadratic_Probing(k){
	var i = arguments[1] ? arguments[1] : 0;//����ƫ��ֵi�ĳ�ʼֵΪ0,��k��Ӧ��T�ĳ�ʼ�ռ��Ѿ�ռ��,��ͨ��ƫ��ֵ�ĸı��ƶ�k��T�����յĴ洢�ռ�,ֱ��i==m,��������ɱ���T,�����޷�����k,����ζ����ʧ��
	
	var c1 = arguments[2] ? arguments[2] : 0;
	var c2 = arguments[3] ? arguments[3] : 0;
	return ( h1(k) + c1*i + c2*i*i ) % m;
}

//˫��ɢ��(���ŷ���)
function Double_Probing(k){
	var i = arguments[1] ? arguments[1] : 0;//����ƫ��ֵi�ĳ�ʼֵΪ0,��k��Ӧ��T�ĳ�ʼ�ռ��Ѿ�ռ��,��ͨ��ƫ��ֵ�ĸı��ƶ�k��T�����յĴ洢�ռ�,ֱ��i==m,��������ɱ���T,�����޷�����k,����ζ����ʧ��
	
	return ( h1(k) + i*h2(k) ) % m;
}


//---------------------------------------------------------------------//
//ɢ�б�Ĳ�������(����)(����)//�˴�����ɾ������,ɾ��������������Ϊ��
//--------------------------------------------------------------------//
function Hash_insert(T,k){
	var i=0;
	var node=new Node();
	node.key=k;
	node.hash=h1(k);
	do{
		// var j=Linear_Probing(k,i);
		// var j=Quadratic_Probing(k,i);
		var j=Double_Probing(k,i);
		if(T[j]==null){
			T[j]=node;
			return T;
		}else{
			i++;
		}
	}while(i<m)
	return('hash table overflow!');	
}

function Hash_search(T,k){
	var i=0;
	do{
		var j=Double_Probing(k,i);//�˴��Ŀ���Ѱַ��Ӧ������ķ�����ͬ
		if(T[j].key==k){
			return j;
		}else{
			i++;
		}
	}while((i<m)||(T[j]==null))
	return null;
}

function Hash_show(T){
	for(var i=0;i<T.length;i++){
		if(T[i]==null){
			document.write(' * |');
		}else{
			document.write(' '+T[i].key+' | ');
		}
	}
	document.write('<br/>');
}











