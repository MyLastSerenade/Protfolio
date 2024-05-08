/* @typescript-eslint/no-explicit-any */
export default (node, _options = {}) => {
    
	let options = _options;
	let destroyed = false;
	let curtain;
	const handleStart = (e) => {
        node.remove()
		curtain = CurtainStart(e, options);
	};
	const handleStop = () => CurtainStop(curtain);

	function setup() {
		node.classList.add('curtain');
		node.addEventListener('pointerdown', handleStart);
		node.addEventListener('pointerup', handleStart);
		node.addEventListener('touchstart', handleStart);
		destroyed = false;
	}

	function destroy() {
		node.classList.remove('curtain');
		node.removeEventListener('pointerdown', handleStop);
		node.removeEventListener('pointerup', handleStop);
		node.removeEventListener('touchstart', handleStop);
	}

    if (options) setup();
    return {
        update(newOptions) {
          options = newOptions;
          if (options && destroyed) setup();
          else if (!(options || destroyed)) destroy();
        },
        destroy,
      };
};

const defaults = {
    position: 'absolute',
    class: '',
    top: 0,
    left: 0,
    zIndex: 9999,
    height: '100%',
    width: '100%',
    backgroundImage: 'linear-gradient(to right, rgba(40, 40, 40, 1), rgba(255, 255, 255, 1))',
    opacity: .75,
  };
  
  function CurtainStart(e, options = {}) {
    e.stopImmediatePropagation();
    const opts = { ...defaults, ...options };
  
    const curtain = document.createElement('div');
    const curtainStyle = curtain.style;
  
    curtain.className = `curtain-object ${opts.class}`;
    curtainStyle.position = opts.position;
    curtainStyle.top = '0';
    curtainStyle.left = opts.left + 'px';
    curtainStyle.zIndex = opts.zIndex;
    curtainStyle.height = opts.height;
    curtainStyle.width = opts.width;
    curtainStyle.backgroundImage = opts.backgroundImage;
    curtainStyle.opacity = opts.opacity;
  
    const container = document.getElementById('container');
    container.appendChild(curtain);
  
    console.log(curtain.style); // Now you'll see the applied styles
  
    let originalHeight = parseInt(opts.height);
    let steps = Math.floor(originalHeight / 10);
    let stepHeight = originalHeight / steps; // Adjust step height accordingly
    let intervalId = setInterval(() => {
      if (steps <= 0) {
        clearInterval(intervalId);
        return;
      }
      curtainStyle.height = `${parseInt(curtainStyle.height) - stepHeight}px`;
      steps--;
    }, 100);
  }


function CurtainStop(curtain) {
    if(curtain) {
       console.log("stop") 
    }
}



// function CurtainStart(e, options = {}) {
//      e.stopImmediatePropagation();
//      const opts = { ...defaults, ...options };

//      const curtain = document.createElement('div')
//      const curtainStyle = curtain.style;
     
     
//      curtain.className=`curtain-object ${opts.class}`
//      const parent = document.getElementById('parent')
//      parent?.appendChild(curtain);
//      console.log(curtain.style)
//      let originalHeight = parseInt(curtainStyle.height); 
//      console.log(originalHeight)
//      // Calculate the number of steps needed to decrease the height by ~10px every 100ms
//      let steps = Math.floor(originalHeight / 10);
//      let stepHeight = 10;
//     let intervalId = setInterval(() => {
//          if (steps <= 0) {
//              clearInterval(intervalId);
//              return;
//          }
//          curtainStyle.height = `${parseInt(curtainStyle.height) - stepHeight}px`;
//          steps--;
//      }, 100);
//      console.log(curtainStyle.height)
// }