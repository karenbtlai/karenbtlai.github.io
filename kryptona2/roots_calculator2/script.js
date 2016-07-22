
window.onload = function() {
	getKeys();

};


/*
RegEx stuff to fix:
-default 0 in input
-negative and positive button
-edit display if a,b,c = 0
*/

function getKeys() {

	var keys = document.querySelectorAll('#calculator span');
	var values = ["a", "b", "c"];
	var j = 0;

	function reset() {
		document.getElementById("a").innerHTML = "a";
		document.getElementById("b").innerHTML = "b";
		document.getElementById("c").innerHTML = "c";
		document.getElementById("root").innerHTML = "";
		document.getElementById("display").innerHTML = "";
		j = 0;
	}	

	document.addEventListener("keydown", function(event) {
		var input = document.querySelector("#root");
		var code = event.keyCode;
		console.log(code);
			
		if (j > 3) {
				//console.log("j > 3");
				reset();
			}

		if (code <= 105 && code >= 96) {
			input.innerHTML += (code - 96);
			document.getElementById("ent").className = "keydown";
			document.addEventListener("keyup", function(event) {
				document.getElementById("ent").className = "key span";
			});

		} else if (code <= 57 && code >= 48) {
			input.innerHTML += (code - 48);
			document.getElementById("ent").className = "keydown";
			document.addEventListener("keyup", function(event) {
				document.getElementById("ent").className = "key span";
			});		

		} else if (code == 13) {
				
			document.getElementById("ent").className = "keydown";
			document.addEventListener("keyup", function(event) {
				document.getElementById("ent").className = "key span";
			});

			if (j < 3) {
				document.getElementById(values[j]).innerHTML = input.innerHTML; 
				input.innerHTML = "";
				j++;
			} 
			
			if (j == 3) {
				discriminant();
				j++;
			}

		} else if (code == 46 || code == 8) {
			input.innerHTML = "";
			document.getElementById("del").className = "keydown";
			document.addEventListener("keyup", function(event) {
				document.getElementById("del").className = "key span";
			});
		} else if (code == 27) {
			reset();
			document.getElementById("clear").className = "keydown";
			document.addEventListener("keyup", function(event) {
				document.getElementById("clear").className = "key span";
			});
		}
	});

	for (var i = 0; i < keys.length; i++) {

		keys[i].onclick = function(e) {
			var input = document.querySelector("#root");
			var inputVal = input.innerHTML;
			var btnVal = this.innerHTML;

			if (j > 3) {
				//console.log("j > 3");
				reset();
			}

			if (btnVal == "C") {
				reset();
			} else if (btnVal == "Del") {
				input.innerHTML = "";
			} else if (btnVal == "Ent") {

				if (j < 3) {
					document.getElementById(values[j]).innerHTML = inputVal; 
					input.innerHTML = "";
					j++;
				} 
				if (j == 3) {
					discriminant();
					j++;
				} 

			} else if (btnVal == "-") {
				input.innerHTML += "-";
				//input.innerHTML.replace(/^/, "-");
			} else {
				input.innerHTML += btnVal; 
			}

		}

	}
} 

function discriminant() {

	var a = document.getElementById("a").innerHTML;
	var b = document.getElementById("b").innerHTML;
	var c = document.getElementById("c").innerHTML;
	var x;
	var dis = (b*b) - (4*a*c);
	var dis1 = (-b);
	var dis2 = 2*a;

	if (a == 0) {
		document.getElementById("display").innerHTML = "Please enter an integer.";
	} else {

		if (dis > 0) {
			document.getElementById("display").innerHTML = "2 real solutions.";
		} else if ( dis == 0) {
			document.getElementById("display").innerHTML = "Repeated root."
		} else if (dis < 0) {
			document.getElementById("display").innerHTML = "No real solution.";
		}
		//document.getElementById("equation").innerHTML = a + "x\u00B2" + "+" + b + "x" + c + "=0";
		var rootVal = roots(dis, dis1, dis2);
		document.getElementById("root").innerHTML = rootVal;

	}	
}

function roots(dis, dis1, dis2) {
	var absDis = Math.abs(dis);
	var radVal = radical(absDis);
	//var ratVal = rational(dis1, dis2);

	if (absDis !== dis) {
		var ratio = rational(dis1, dis2, radVal[0]);
		var roots = "(" + ratio[0] + "+/-" + ((ratio[2] == 1) ? "" : ratio[2]) + "\u221A" + radVal[1] + "i" + ")" + ((ratio[1] == 1) ? "" : "/" + ratio[1]);
		return roots;
	} else if (absDis == 0) {
		//console.log("dis == 0");
		var ratio = rational(dis1, dis2);
		var roots = ratio[0] + ((ratio[1] == 1) ? "" : "/" + ratio[1]);
		return roots;
	} else if (radVal[1] == 1) {
		var root1 = rational((dis1 + radVal[0]), dis2);
		var root2 = rational((dis1 - radVal[0]), dis2);
		//console.log("roots(): " + root1);
		//console.log("roots(): " + root2);
		var roots = [ (root1[1] == 1) ? root1[0] : root1[0] / root1[1], (root2[1] == 1) ? root2[0] : root2[0] / root2[1]];
		return roots;
	} else if (radVal[0] == 1) {
		//console.log("radVal[0] == 1");
		var roots = "(" + dis1 + "+/-" + radVal[1] + ")/" + ((dis2 == 1) ? "" : "/" + dis2);
		return roots;
	} else {
		//console.log("else");
		var ratio = rational(dis1, dis2, radVal[0]);
		var roots = "(" + ratio[0] + "+/-" + ((ratio[2] == 1) ? "" : ratio[2]) + "\u221A" + radVal[1] + ")" + ((ratio[1] == 1) ? "" : "/" + ratio[1]);
		return roots;
	}

	/*if (absDis == dis) {
		var i = /i/i;
		roots.replace(i, "");
	}*/
}

function radical(dis) {
	var output = 1;
	for ( i = 4; i < dis; i++) {
		if ( (Math.sqrt(i) % 1) === 0 && (dis % i) === 0) {
			output *= i;
			//console.log("radical(): " + output);
		}
	}
	var radical = dis/output;
	var multiplier = Math.sqrt(output);

	return [multiplier, radical];
	
	/*if (radical == 1) {
		return multiplier;
	} else if (multiplier == 1) {
		return "\u221A" + radical;
	} else {
		return multiplier + "\u221A" + radical;
	}*/

} 

function rational(m, n, o) {
	function gcd(h, k) {
		return k ? gcd(k, h % k) : h;	
	}
	if (o) {
		var gcd = gcd(m, gcd(n, o));
		//console.log("rational(): " + m);
		//console.log("rational(): " + n);
		//console.log("rational(): " + o);
		return [m/gcd, n/gcd, o/gcd];
	} else {
		o = 0;
		var gcd = gcd(m, n);
		//console.log("rational(): " + m);
		//console.log("rational(): " + n);
		return [m/gcd, n/gcd];
	}
}