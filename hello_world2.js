
init_scene();
add_sphere();

// draw!
while(1)
renderer.render(scene, camera);

function add_sphere(){
	// set up the sphere vars
	var radius = 50,
		segments = 16,
		rings = 16;
	
	// create a new mesh with
	// sphere geometry - we will cover
	// the sphereMaterial next!
	var sphere = new THREE.Mesh(
	
	  new THREE.SphereGeometry(
		radius,
		segments,
		rings),
	
	  sphereMaterial);
	
	// add the sphere to the scene
	scene.add(sphere);
	// create the sphere's material
	var sphereMaterial =
	  new THREE.MeshLambertMaterial(
		{
		  color: 0xCC0000
		});
	  
	// create a point light
	var pointLight =
	  new THREE.PointLight(0xFFFFFF);
	
	// set its position
	pointLight.position.x = 10;
	pointLight.position.y = 50;
	pointLight.position.z = 130;
	
	// add to the scene
	scene.add(pointLight);
}

function init_scene(){
	// set the scene size
	var WIDTH = 400,
	  HEIGHT = 300;
	
	// set some camera attributes
	var VIEW_ANGLE = 45,
	  ASPECT = WIDTH / HEIGHT,
	  NEAR = 0.1,
	  FAR = 10000;
	
	// get the DOM element to attach to
	// - assume we've got jQuery to hand
	//var $container = $('#container');
	
	// create a WebGL renderer, camera
	// and a scene
	var renderer = new THREE.WebGLRenderer();
	var camera =
	  new THREE.PerspectiveCamera(
		VIEW_ANGLE,
		ASPECT,
		NEAR,
		FAR);
	
	var scene = new THREE.Scene();
	
	// add the camera to the scene
	scene.add(camera);
	
	// the camera starts at 0,0,0
	// so pull it back
	camera.position.z = 300;
	
	// start the renderer
	renderer.setSize(WIDTH, HEIGHT);
	
	// attach the render-supplied DOM element
	//$container.append(renderer.domElement);
	document.body.appendChild( renderer.domElement );
}