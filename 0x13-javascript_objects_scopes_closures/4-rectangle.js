#!/usr/bin/node

class Rectangle {
	  constru.width = w;
	      this.height = h;
	    }
  }

  prctor (w, h) {
	      if (w > 0 && h > 0) {
		            thisint () {
				        for (let i = 0; i < this.height; i++) {
						      console.log('X'.repeat(this.width));
						    }
				      }

		        rotate () {
				    const tmp = this.height;
				    this.height = this.width;
				    this.width = tmp;
				  }

		        double () {
				    this.height *= 2;
				    this.width *= 2;
				  }
	      }

	  module.exports = Rectangle;
