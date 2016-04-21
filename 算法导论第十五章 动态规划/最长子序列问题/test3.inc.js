//��̬�滮��������������(LCS)����
//�ؼ���ʽ:����c[i,j]��ʾx[i]��y[j]��LCS����

//           |-- 
//           |   0   (��i=0��j=0)
//           |
//   c[i,j]= |   c[i-1,j-1]+1   (��i,j>0 �� x[i]=y[j])   (��b�� '\')
//           |
//           |   max( c[i-1,j] , c[i,j-1] )   (��i,j>0 �� x[i]!=y[j])   (��b�� '-'��'|')
//           |--


function LCS_length(x,y){
	var m=x.length;
	var n=y.length;
	
	var c=new Array(m+1);
	for(var i=0;i<=m;i++){
		c[i]=new Array(n+1);
	}

	var b=new Array(m);
	for(i=0;i<=m;i++){
		b[i]=new Array(n);
	}
	
	for(i=0;i<=m;i++){
		c[i][0]=0;
	}
	for(var j=0;j<=n;j++){
		c[0][j]=0;
	}
	
	for(i=1;i<=m;i++){
		for(j=1;j<=n;j++){
			if(x[i-1]==y[j-1]){//ע��:��Ϊ�㷨����������������1��ʼ,����������������0��ʼ,���Ϊ��ʹ��ά����c��Ӧx,y�����Ԫ��,��Ӧ��Ԫ��Ϊx[i-1]��y[j-1]
				c[i][j]=c[i-1][j-1]+1;
				b[i][j]='\\';
			}else if(c[i-1][j]>=c[i][j-1]){
				c[i][j]=c[i-1][j];
				b[i][j]='|';
			}else{
				c[i][j]=c[i][j-1];
				b[i][j]='-';
			}
		}
	}
	
	var x=new Array();
	x[0]=c;x[1]=b;
	return x;
	
}

function Print_LCS(b,x,i,j){
	var result = arguments[4] ? arguments[4] : new Array();
	if((i==0)||(j==0)){
		return;
	}
	if(b[i][j]=='\\'){
		result.push(x[i]);
		Print_LCS(b,x,i-1,j-1,result);
	}else if(b[i][j]=='|'){
		Print_LCS(b,x,i-1,j,result);
	}else{
		Print_LCS(b,x,i,j-1,result);
	}
	return result;
}

function Print_LCS_extra(c,x,i,j){//�Ľ���LCS�жϷ���,��������b,�ܹ���ʡ�����b�Ŀռ�
	var result = arguments[4] ? arguments[4] : new Array();
	if((i==0)||(j==0)){
		return;
	}
	if((c[i][j]!=c[i-1][j])&&(c[i][j]!=c[i][j-1])){
		result.push(x[i]);
		Print_LCS_extra(c,x,i-1,j-1,result);
	}else if(c[i][j]==c[i-1][j]){
		Print_LCS_extra(c,x,i-1,j,result);
	}else{
		Print_LCS_extra(c,x,i,j-1,result);
	}
	return result;
}




