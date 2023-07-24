								// Map
var a=[10,20,30,40,50]
var b=["mango","banana","apple"]
var c=[ 
		{ id:1,
		 name:"bat",
		 price:5000,
		 img:"images/images1.jpg"
		},

		{ id:2,
		 name:"ball",
		 price:50,
		 img:"images/images2.jpg"
		},
		
		{ id:3,
		 name:"bike",
		 price:50000,
		 img:"images/images3.jpg"
		},
		
		{ id:4,
		 name:"pen",
		 price:50
		},

		{ id:5,
		 name:"Mobile",
		 price:5000
		}
		]
 var output=c.map ( function(e){
		return e.price=5000;
		
        })
 console.log (c);

					// ForEach
					
var a=[1,10,20,25,90,250,467];
 a.forEach( function(e){
      if (e%2==0){
      console.log(e);
	  }
	})	  
					
	// Map UpperCase
	
var a=["mango","apple","banana"];
var output=a.map(function (e){
	return e.toUpperCase();
      })
 console.log(output);
 
  // filter
  
 var a=[1,10,15,20,49,199,200];
var output=a.filter(function (e){
	return e%2==0;
      })
 console.log(output);