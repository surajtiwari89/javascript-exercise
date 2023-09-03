// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width=80,height=60){
    this.width= width;
    this.height= height;

}
 
Size.prototype.resize= function(newWidth,newHeigth){
    this.height=newHeigth;
    this.width=newWidth;
}


export function Position(x=0,y=0){
    this.x=x;
    this.y=y;

}

Position.prototype.move=function(newX,newY){
    this.x=newX;
    this.y=newY;
}


export class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();
    }

    resize(newsize){
       var  maxsizew = this.screenSize.width - this.position.x;
       var  maxsizeh = this.screenSize.height - this.position.y;

       
         this.size.width= Math.min(newsize.width,maxsizew);
         this.size.height= Math.min(newsize.height,maxsizeh);

         this.size.width= Math.max(this.size.width,1);
         this.size.height= Math.max(this.size.height,1);

       }
       move(newposition){

        const maxpositionX = this.screenSize.width - this.size.width;
        const maxpositionY = this.screenSize.height - this.size.height;

         this.position.x= Math.min(newposition.x,maxpositionX);
         this.position.y= Math.min(newposition.y,maxpositionY)

         this.position.x=Math.max(this.position.x,0);
         this.position.y=Math.max(this.position.y,0);
    

       } 
    }

// export function changeWindow(windowInstance) {
//     const newsize = new Size(400,300); //! creating an instance of size in newsize
//     const newposition = new Position(100,150);

//     windowInstance.resize(newsize);   //! programwindow instance has resize having resize

//     windowInstance.move(newposition);  //! programwindow instance has position having move 

//     return windowInstance;
// }

export function changeWindow(windowInstance){

    // windowInstance.size = new Size(400,300); //! creating an instance of size in newsize
    // windowInstance.position = new Position(100,150);

    // windowInstance.size.width = 400;
    // windowInstance.size.height = 300;
    // windowInstance.position.x = 100;
    // windowInstance.position.y = 150;

    const newsize = new Size(400,300);
    const newposition = new Position(100,150)


      windowInstance.resize(newsize);
    windowInstance.move(newposition)

    return windowInstance;
}