// JavaScript Document


    var camera, scene, renderer;
    var geometry, material;
	var mesh = new Array();
	var numcubes = 7;
	var cubesize = 200;

    init();
    animate();

    function init() {

		//Camera
		
        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000000 );
        camera.position.z = 1000;
		
		camera2 = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 10000 );
		camera2.position.z = 1000;
		
		
		//
	
        scene = new THREE.Scene();
		
		//

        geometry = new THREE.CubeGeometry( cubesize, cubesize, cubesize );
        material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );


		for( var i=0 ; i<numcubes ; i++ ){
        	mesh[i] = new THREE.Mesh( geometry, material );
        	scene.add( mesh[i] );
		}
		//

        renderer = new THREE.WebGLRenderer();
		//renderer = new THREE.CanvasRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );

        document.body.appendChild( renderer.domElement );

    }


		
	var move = 0;

    function animate() {

        // note: three.js includes requestAnimationFrame shim
        requestAnimationFrame( animate );
		renderer.autoClear = false;
        //mesh.rotation.x += 0.01;
        //mesh.rotation.y += 0.02;
		
		
		for(var	 i=0 ; i<numcubes ; i++ ){
			/*
			mesh[i].rotation.z = (2*Math.PI*((i)/numcubes)+move)%(2*Math.PI);
			mesh[i].position.x = 500*Math.sin(2*Math.PI*(i/numcubes));
			mesh[i].position.y = 500*Math.cos(2*Math.PI*(i/numcubes));
			*/
			mesh[i].rotation.z = ((2*Math.PI/numcubes)*(numcubes-i))-move;
			mesh[i].position.x = (((cubesize/2)/Math.tan((2*Math.PI)/numcubes/2))+(cubesize/2))*Math.sin(2*Math.PI*(i/numcubes)+move);
			mesh[i].position.y = (((cubesize/2)/Math.tan((2*Math.PI)/numcubes/2))+(cubesize/2))*Math.cos(2*Math.PI*(i/numcubes)+move);
			
			
			
			
		}
		
		move+=0.01;
		//mesh.scale = 0.5;
		
		//mesh.translateX(100+Math.random()*100-50);
//		mesh.translateY(100+Math.random()*100-50);
		
		//mesh.position.x+=10;
        
		
		renderer.render( scene, camera );
		//renderer.render( scene, camera2 );
		
    }
