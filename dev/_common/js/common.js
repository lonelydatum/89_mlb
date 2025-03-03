import {olg} from "./proline"
const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
	ease: "power3.out"
});

const {w, h} = size

const READ_PRE = {
	t1: 1.5,
	t2: 1.4,
	t3: 1,
}



const READ = READ_PRE



function init(){	
	const tl = new TimelineMax({onComplete:()=>{
		if(document.getElementById("legalBtn")){			
			TweenLite.set("#legalBtn", {display:"block"})
		}
	}})
	tl.set(".frame1", {opacity:1})
	return tl
}



function stag(vh){
	return { duration:.3, opacity:0, stagger: .1, ...vh }
}



function start_landscape(vh={x:-size.w}){
	const tl = init()	
	tl.add("start")
	// const barTL = barOptions.verHor==="h" ? animate_bars_vertical(barOptions, false) : animate_bars_horizontal(barOptions)
	
	
	// tl.add(barTL, "start")	
	// return
	tl.from('.t1', stag(vh), "start+=.3");	
	tl.from('.logos', {opacity:0, duration:.3});	
	tl.to([".hero", ".t1", "#bars"], {duration:.3, opacity:0}, `+=${READ.t1}`)
	
	// const barTL2 =barOptions2.verHor==="h" ? animate_bars_vertical(barOptions2) : animate_bars_horizontal(barOptions2)
	// tl.add(barTL2, "end")	
	tl.from('.t2', stag(vh), "+=.3");		
	tl.to([".t2", ".logo", ".bars"], {duration:.3, opacity:0}, `+=${READ.t2}`)

	tl.add("f3")
	tl.from('.t3', stag(vh), "f3");		
	tl.add(olg(), "f3")
	tl.from(".end_smart", {duration:.2, opacity:0}, "f3")

	tl.to(".t3", {duration:.3, opacity:0}, `+=${READ.t3}`)
	tl.from('.t3', stag(vh), "+=.3");		
	
	

	tl.from([".end_cta", ".legalBtn",  ".end_logo"], {duration:.3, opacity:0})
	
}

function start(vh={x:-size.w}){
	const tl = init()		

	tl.from('.t1', stag(vh), "start");		
	tl.to('.t1', {duration:.3, opacity:0}, `+=${READ.t1}`);		

	tl.from('.t2', stag(vh));	
	

	tl.to('.frame2', {opacity:1, duration:.3}, `+=${READ.t2}` );		

	tl.from('.t3', stag(vh));	

	tl.from([".end_logo", ".end_cta", ".end_smart"], {duration:.3, opacity:0});	


	


	
	// tl.from([".cta", ".legalBtn", ".playsmart"], {duration:.3, opacity:0}, "+=.4")
	
	
	tl.add(olg())
}




export {size, init, start, start_landscape}



