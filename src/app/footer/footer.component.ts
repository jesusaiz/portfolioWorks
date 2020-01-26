import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      /*var pxShow = 300; // height on which the button will show
      var fadeInTime = 400; // how slow/fast you want the button to show
      var fadeOutTime = 400; // how slow/fast you want the button to hide
      var scrollSpeed = 300; // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

      // Show or hide the sticky footer button
      jQuery(window).scroll(function() {

        if (!( $("#header-search").hasClass('is-visible'))) {

          if (jQuery(window).scrollTop() >= pxShow) {
            jQuery("#go-top").fadeIn(fadeInTime);
          } else {
            jQuery("#go-top").fadeOut(fadeOutTime);
          }

        }		

      });		

    };*/
   
}

}
