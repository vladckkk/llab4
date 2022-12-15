function maxValue1 (obj) {
	var a = Number(obj.num1.value);
	var b = Number(obj.num2.value);
	var c = Number(obj.num3.value);
	var d = Number(obj.num4.value);
	var e = Number(obj.num5.value);
	
	obj.result1.value = Math.max(Math.max(Math.max(Math.max(a, b), c), d), e);
}

function maxValue2 (obj) {
	var a = Number(obj.num6.value);
	var b = Number(obj.num7.value);
	var c = Number(obj.num8.value);
	var d = Number(obj.num9.value);
	var e = Number(obj.num10.value);
	var res = a;

	if (b > res) {
		res = b;
	}
	if (c > res) {
		res = c;
	}
	if (d > res) {
		res = d;
	}
	if (e > res) {
		res = e;
	}

	/*if (b > res) {
		res = b;
	} else if (c > res) {
		res = c;
	} else if (d > res) {
		res = d;
	} else {
		res = e;
	}*/

	obj.result2.value = res;
}

function triangle() {
	var first = prompt('Введите длину первой стороны');
	var second = prompt('Введите длину второй стороны');
	var third = prompt('Введите длину третьей стороны');

	if (first + second > third && first + third > second && second + third > first) {
		alert('Треугольник может существовать');
	} else {
		alert('Треугольник не может существовать');
	}
}










/*function array() {
	var array = new Array(5);
	var i;
	
	for(i=0;i<=5;i++) {
		array[i]=prompt("Введите " +i+" -е число:");
	}
}*/