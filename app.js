let container1 = document.querySelector(".container1");
let root = document.documentElement;

document.addEventListener('DOMContentLoaded', ()=>{
    let w = window.innerWidth;
    let h = window.innerHeight;

    console.log('w = ' + w + ' pixels');
    console.log('h = ' + h + ' pixels');

    let ch = container1.clientHeight;
    let cw = container1.clientWidth;

    console.log('w = ' + cw + ' pixels');
    console.log('h = ' + ch + ' pixels');

    let numberOfCellsCW = Math.floor(cw / 50);
    root.style.setProperty('--numberOfCellsw', numberOfCellsCW);
    
    let numberOfCellsCH = Math.floor(ch / 50); 
    root.style.setProperty('--numberOfCellsh', numberOfCellsCH);
    
    let numberOfCells = numberOfCellsCW * numberOfCellsCH;
    
    for(let i = 0; i < numberOfCells; i++) {
        var node = document.createElement('div');
        node.classList.add('pic_cell');
        node.classList.add('pic_cell' + i);

        var img = document.createElement('img');
        img.src = "/assets/svg/strait_line_L_R.svg";
        node.appendChild(img);

        container1.appendChild(node);
    };
});



/*--------------------------------------------------------------------------------------------------------------------*/
/* risize a div */
function makeResizableDiv(div) {
    const element = document.querySelector(div);
    const resizers = document.querySelectorAll(div + ' .resizer')
    const minimum_size = 20;
    let original_width = 0;
    let original_height = 0;
    let original_x = 0;
    let original_y = 0;
    let original_mouse_x = 0;
    let original_mouse_y = 0;
    for (let i = 0;i < resizers.length; i++) {
      const currentResizer = resizers[i];
      currentResizer.addEventListener('mousedown', function(e) {
        e.preventDefault();
        original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
        original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
        original_x = element.getBoundingClientRect().left;
        original_y = element.getBoundingClientRect().top;
        original_mouse_x = e.pageX;
        original_mouse_y = e.pageY;
        window.addEventListener('mousemove', resize);
        window.addEventListener('mouseup', stopResize);
      });
      
      function resize(e) {
        if (currentResizer.classList.contains('bottom-right')) {
          const width = original_width + (e.pageX - original_mouse_x);
          const height = original_height + (e.pageY - original_mouse_y)
          if (width > minimum_size) {
            element.style.width = width + 'px'
          };
          if (height > minimum_size) {
            element.style.height = height + 'px'
          };
        }
        else if (currentResizer.classList.contains('bottom-left')) {
          const height = original_height + (e.pageY - original_mouse_y)
          const width = original_width - (e.pageX - original_mouse_x)
          if (height > minimum_size) {
            element.style.height = height + 'px'
          };
          if (width > minimum_size) {
            element.style.width = width + 'px'
            element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
          };
        }
        else if (currentResizer.classList.contains('top-right')) {
          const width = original_width + (e.pageX - original_mouse_x)
          const height = original_height - (e.pageY - original_mouse_y)
          if (width > minimum_size) {
            element.style.width = width + 'px'
          };
          if (height > minimum_size) {
            element.style.height = height + 'px'
            element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
          };
        }
        else {
          const width = original_width - (e.pageX - original_mouse_x)
          const height = original_height - (e.pageY - original_mouse_y)
          if (width > minimum_size) {
            element.style.width = width + 'px'
            element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
          };
          if (height > minimum_size) {
            element.style.height = height + 'px'
            element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
          };
        };
      }
      
        function stopResize() {
            window.removeEventListener('mousemove', resize)
        }
    };
};


function constructMimic(){
      /* constructMimic() will show you the allowed symbols and allow you to drag them to the squares
      of the grid */

}

function createPalette(div){
  /* will create the symbol palette that can be used. */
  //create container on the left of the page
  let pallete = document.querySelector('.palette');
  let paletteItems = [];
  paletteItems.push('./assets/svg/strait_line_L_R.svg');
  paletteItems.push('./assets/svg/strait_line_T_B.svg');
  paletteItems.push('./assets/svg/corner_T_R.svg');
  paletteItems.push('./assets/svg/corner_T_L.svg');
  paletteItems.push('./assets/svg/corner_B_R.svg');
  paletteItems.push('./assets/svg/corner_B_L.svg');

  for(let i = 0; i < palette.length; i++) {
    var node = document.createElement('div');
    node.classList.add('palette_pic_cell');
    node.classList.add('palette_pic_cell' + i);

    var img = document.createElement('img');
    img.src = paletteItems[i];
    node.appendChild(img);

    palette.appendChild(node);
  };
    

    

    console.log(paletteItems);

}


  
  makeResizableDiv('.resizable'); // run resizable function.
  createPalette();
  constructMimic();




