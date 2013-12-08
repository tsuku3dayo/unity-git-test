#pragma strict

function Start () {

}

function Update () {
	transform.RotateAround (Vector3.zero, Vector3.up, 200 * Time.deltaTime);
}
