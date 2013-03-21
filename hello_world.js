// JavaScript Document


    var camera, scene, renderer;
    var geometry, material, mesh;

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

        geometry = new THREE.CubeGeometry( 200, 200, 200 );
        material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

        mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );
		
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
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.02;
		
		mesh.position.x = 500*Math.sin(move);
		mesh.position.y = 200*Math.cos(move);
		move+=0.01;
		//mesh.scale = 0.5;
		
		//mesh.translateX(100+Math.random()*100-50);
//		mesh.translateY(100+Math.random()*100-50);
		
		//mesh.position.x+=10;
        
		
		renderer.render( scene, camera );
		renderer.render( scene, camera2 );
		
    }
