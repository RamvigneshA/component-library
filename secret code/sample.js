const press = [];
const scode = ['ArrowRight', 'ArrowUp', 'ArrowDown', 'Backspace']
const heads = document.querySelectorAll('h1');

window.addEventListener('keyup',(e)=>{
	press.push(e.key);
	const newarr = press.slice(-scode.length)
	if(JSON.stringify(scode) === JSON.stringify(newarr)){
		const header = [...heads];
		header.map(heed => {
			heed.innerText="hacked!"
		})
	}
});