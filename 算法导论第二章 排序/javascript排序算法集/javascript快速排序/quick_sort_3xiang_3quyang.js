var count=0;
function sortUp(){//<<算法>>快速排序(三向切分)(标志值采用随机取数组内3个数,取其中位数置于开始位)--
	var s="1 0 0 1 1 1 1 1 2 1 2 2 0 2 2 1 1 0 2 0 0 0 2 0 2 2 1 1 1 0 2 2 2 2 2 1 2 1 1 0 1 1 1 2 0 2 1 0 2 2 0 1 0 2 2 0 0 1 2 0 0 0 0 1 2 1 2 1 0 1 2 2 2 0 2 1 0 2 2 0 0 2 0 2 0 0 1 1 0 2 2 0 2 0 1 2 2 1 0 1 0 0 1 0 0 2 2 1 1 0 1 0 1 1 0 0 0 0 1 1 0 2 2 1 1 1 0 0 2 1 2 1 1 2 0 2 0 1 0 2 2 2 2 1 2 1 2 2 2 0 1 1 1 1 0 1 1 1 2 2 0 0 2 1 1 2 1 1 1 1 2 1 2 0 1 1 2 2 0 2 2 1 1 1 2 1 0 2 0 1 1 2 1 1 0 0 0 2 2 1 0 0 0 2 0 1 1 1 0 0 2 2 1 2 1 0 0 0 0 1 1 0 2 1 2 1 1 1 0 2 0 0 1 2 2 2 2 2 0 1 1 0 2 1 2 0 0 2 2 0 0 0 1 0 1 0 1 2 1 1 2 1 1 1 0 0 1 2 2 1 2 2 2 0 0 0 2 2 0 2 2 2 1 1 0 0 1 2 2 2 0 1 2 0 2 2 0 0 0 0 0 0 0 2 0 1 2 0 1 0 0 2 2 1 0 0 2 0 1 1 2 0 0 1 1 2 2 2 2 2 1 2 0 1 1 1 0 0 1 0 2 1 2 1 0 0 0 2 2 1 1 1 1 0 1 2 0 1 0 0 1 0 2 1 2 1 1 0 2 2 2 2 0 2 1 0 1 2 1 0 0 0 2 2 2 0 2 2 0 2 1 1 0 0 1 2 0 1 0 1 1 2 2 0 2 1 1 0 1 2 1 0 0 0 1 0 1 1 1 1 1 0 2 0 1 2 2 1 1 1 2 0 2 2 2 0 1 0 1 2 1 1 1 2 2 2 0 2 2 2 2 0 2 0 2 2 0 1 0 1 1 1 0 0 1 2 0 0 1 1 0 0 0 2 1 1 1 0 1 2 2 2 0 1 0 2 1 0 0 1 1 2 1 2 0 1 0 1 2 1 1 2 0 2 1 1 0 1 2 2 1 1 2 2 1 0 2 1 2 1 1 1 1 2 0 2 2 2 2 1 1 1 1 1 1 2 0 2 1 2 0 1 2 2 1 2 1 0 0 2 1 2 0 0 2 2 0 0 0 0 1 2 1 1 0 0 2 0 2 0 2 0 0 0 0 1 2 0 0 0 0 2 1 1 0 2 1 0 0 1 0 2 2 2 2 1 1 0 1 0 1 1 0 1 1 0 0 1 2 1 0 2 0 0 0 1 0 2 2 0 0 1 1 1 1 0 0 0 1 2 2 2 2 1 2 2 2 0 2 0 2 1 0 1 0 2 0 1 1 0 2 1 1 1 1 0 1 0 2 1 0 0 2 2 1 1 1 0 2 1 1 1 0 2 1 2 0 0 1 2 2 1 2 0 1 2 2 0 2 2 2 1 0 0 2 0 0 1 0 1 1 2 1 1 2 2 1 2 0 0 1 1 2 2 1 0 1 1 1 2 0 2 0 2 0 0 1 2 0 2 0 1 0 2 2 2 2 2 2 0 0 2 2 2 1 1 1 2 1 1 0 1 0 1 1 2 1 1 2 1 1 0 2 0 1 0 2 1 2 0 1 1 1 1 0 2 0 2 2 0 2 2 1 0 0 0 1 2 2 0 2 1 2 0 0 1 1 1 0 2 1 2 0 1 0 2 2 2 0 1 1 2 2 0 0 1 0 2 0 2 2 2 1 2 1 1 1 2 1 1 0 0 1 1 2 0 0 2 0 2 0 1 2 0 1 1 1 0 1 2 2 0 0 2 0 0 2 0 0 2 0 2 1 1 0 1 2 0 1 1 0 2 0 2 1 0 2 2 0 1 1 2 2 0 0 1 1 1 0 1 0 2 1 0 2 1 0 0 1 1 0 0 1 2 2 0 2 2 1 0 1 0 2 1 1 2 0 2 0 0 0 0 1 1 0 2 2 0 2 2 1 0 0 1 0 2 1 2 2 0 0 0 2 0 2 0 1 2 1 0 0 1 2 1 1 0 1 0 2 1 0 1 2 1 2 1 2 1 0 1 0 1 2 2 0 0 2 0 0 1 2 0 1 0 1 0 0 0 0 2 0 1 1 1 2 0 0 0 1 2";
	var a=s.split(' ');
	var lo=0;var hi=a.length-1;
	quick_sort(a,lo,hi);
	
}
function quick_sort(a,lo,hi){
	if(hi<=lo){
		return;
	}
	var j=qiefen(a,lo,hi);//返回边界值后,对左右子数组各进行切分迭代,直至其长度为1
	quick_sort(a,lo,j[0]-1);
	quick_sort(a,j[1]+1,hi);
}

function qiefen(a,p,r){
	var K=zhongweishu(a,p,r);//先取出K=a[p]作为标志值
	var i=p;//以i以及其左边的空间储存比K小的值
	var k=p;//以i~k之间储存与K相等的值
	for(j=p+1;j<=r;j++){//以i与j之间的空间储存比K大的值,当j增长,遇到比K小的值时,使其先与a[k+1]的值
		if(a[j]<K){//(此时属于k)进行交换,再与a[i+1](此时属于i)进行交换,并且将i++,k++,此时i与k
			exch(a,k+1,j);//区间增长,i区间依然保持皆小于K,k区间为等于K的值
			exch(a,k+1,i+1);
			i++;
			k++;
		}else if(a[j]==K){
			exch(a,k+1,j);
			k++;
		}
	}
	exch(a,p,i);//当j完成p+1至r的扫描时,将标志值K与i,k的边界值进行交换,此时K的左边皆为小于K
	return[i,k];   //的值,k,j边界右边皆为大于K的值,并返回边界值i,k
}

function zhongweishu(arr,low,high){//三取样切分:取出数组第一,最后以及其中间点三个数
	var mid=Math.floor((low+high)/2);//通过比较此三个数,得出其中位数,将中位数移动至
	var a=arr[low];                //第一位,并返回其以作切分的标志值
	var b=arr[mid];                //这种方法可避免当数组排序为反序时,标志值不会是
	var c=arr[high];               //最大的数或最小的数,导致切分只能去除1个数,保证
	if (((a>b)&&(b>c))||((c>b)&&(b>a))){//其为中位数,可通过切分分解成两个长度更相近  
        exch(arr,mid,low);         //的子数组
    }  
    else if (((b>c)&&(c>a))||((a>c)&&(c>b))){  
        exch(arr,high,low);  
    }
	
	return arr[low];
}