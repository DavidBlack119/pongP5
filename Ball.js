class Ball{
    constructor(x,y,d,c){
        this.x=x
        this.y=y
        this.d=d
        this.c=c
        this.speedx = 2 * this.direction()
        this.speedy = 2 * this.direction()
    }

    draw(){
        push()
        noStoke()
        fill(this.c)
        ellipse(this.x, this.y, this.d, this.d)
        pop()
    }

    move(){
        this.x += this.speedx
        this.y += this.speedy
    }

    direction(){
        return floor(random(2))*2-1
    }
}